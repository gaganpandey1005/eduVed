import User from "../model/user.model.js";
import Chat from "../model/chat.model.js";
import { getReceiverSocketId, io } from "../utils/socket.js";

export const getUsersForChat = async (req, res) => {
  try {
    const loggedInUserId = req.params.id; // extract actual ID from params

    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId }, // exclude current user
    }).select("-password"); // exclude password field

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error("Error in getUsersForChat: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    console.log("user",userToChatId);
    
    const { myId } = req.query;
    console.log(myId);

    const messages = await Chat.find({
      $or: [
        { senderId: myId, receiverId: userToChatId },
        { senderId: userToChatId, receiverId: myId },
      ],
    });
    console.log(myId);

    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in getMessages controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const sendMessage = async (req, res) => {
  try {
    const { text } = req.body;

    const { id: receiverId } = req.params;
    const { senderId } = req.body;

    const newMessage = new Chat({
      senderId,
      receiverId,
      text,
    });

    await newMessage.save();

    const receiverSocketId = getReceiverSocketId(receiverId);
    console.log("receiverId",receiverSocketId);
    
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sendMessage controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
