import { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";
import apirequest from "../../utils/lib/apiRequest";

const ChatBox = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const myId = user._id;

  const socketRef = useRef(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const [users, setUsers] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSidebar, setShowSidebar] = useState(true); // For mobile toggle

  // Initialize socket
  useEffect(() => {
    socketRef.current = io("https://eduved-backend-tpos.onrender.com", {
      query: { userId: myId },
    });

    socketRef.current.on("getOnlineUsers", (onlineUserIds) => {
      setOnlineUsers(onlineUserIds);
    });

    socketRef.current.on("newMessage", (newMsg) => {
      if (
        selectedUser &&
        (newMsg.senderId === selectedUser._id ||
          newMsg.receiverId === selectedUser._id)
      ) {
        setMessages((prev) => [...prev, newMsg]);
      }
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [myId, selectedUser]);

  // Fetch users
  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const res = await (
          apirequest.get(`/chat/users/${myId}`)
        );
        if (Array.isArray(res.data)) setUsers(res.data);
      } catch (err) {
        console.error("Error fetching users:", err.message);
        setError("Failed to load contacts. Please try again.");
      }
      setIsLoading(false);
    };
    fetchUsers();
  }, [myId]);

  // Fetch messages for selected user
  useEffect(() => {
    const fetchMessages = async () => {
      if (!selectedUser) return;
      setIsLoading(true);
      try {
        const res = await apirequest.get(
          `/chat/${selectedUser._id}?myId=${myId}`
        );
        setMessages(res.data);
        if (inputRef.current) inputRef.current.focus();
      } catch (err) {
        console.error("Error fetching messages:", err.message);
        setError("Failed to load messages. Please try again.");
      }
      setIsLoading(false);
    };
    fetchMessages();
  }, [selectedUser, myId]);

  const lastMessageFromMe = useRef(false);

  useEffect(() => {
    if (!lastMessageFromMe.current) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    lastMessageFromMe.current = false;
  }, [messages]);

  const handleSend = async () => {
    if (!text.trim()) return;
    try {
      lastMessageFromMe.current = true;
      const res = await apirequest.post(
        `/chat/send/${selectedUser._id}`,
        {
          senderId: myId,
          text,
        }
      );
      setMessages((prev) => [...prev, res.data]);
      setText("");
    } catch (err) {
      console.error("Error sending message:", err.message);
      setError("Failed to send message. Please try again.");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const isUserOnline = (userId) => onlineUsers.includes(userId);

  const filteredUsers = users.filter((user) =>
    user.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatTime = (timestamp) => {
    if (!timestamp) return "";
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="h-screen w-full flex flex-col md:flex-row text-white bg-[#111827]">
      {/* Sidebar - Users List */}
      <div
        className={`md:w-1/3 w-full md:block ${
          showSidebar ? "block" : "hidden"
        } bg-[#1f2937] md:border-r border-gray-700 flex flex-col`}
      >
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-2xl font-semibold mb-4 text-blue-400">Chats</h3>
          <div className="relative">
            <input
              type="text"
              placeholder="Search contacts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 pl-10 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
            />
            <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
          </div>
        </div>

        <div className="overflow-y-auto flex-1 p-4">
          {isLoading && !filteredUsers.length ? (
            <div className="flex justify-center items-center h-32">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <div
                key={user._id}
                onClick={() => {
                  setSelectedUser(user);
                  setShowSidebar(false); // Hide sidebar on mobile after selection
                }}
                className={`p-3 rounded-lg cursor-pointer mb-2 hover:bg-blue-800 transition-all ${
                  selectedUser?._id === user._id ? "bg-blue-700" : "bg-gray-800"
                }`}
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-lg font-bold mr-3">
                    {user.fullName.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{user.fullName}</span>
                      <span
                        className={`text-sm ${
                          isUserOnline(user._id)
                            ? "text-green-400"
                            : "text-gray-500"
                        }`}
                        title={isUserOnline(user._id) ? "Online" : "Offline"}
                      >
                        ●
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 truncate">
                      {isUserOnline(user._id) ? "Online" : "Offline"}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-center pt-4">
              No matching contacts found
            </p>
          )}
        </div>
      </div>

      {/* Chat View */}
      <div className="md:w-2/3 w-full flex flex-col overflow-hidden">
        <div className="p-4 bg-[#1e293b] border-b border-gray-600 flex items-center gap-4 sticky top-0 z-10">
          {/* Back Button on small screens */}
          {selectedUser && (
            <button
              onClick={() => {
                setShowSidebar(true);
                setSelectedUser(null);
              }}
              className="md:hidden bg-gray-700 px-2 py-1 rounded text-white hover:bg-gray-600"
            >
              ← Back
            </button>
          )}

          {selectedUser ? (
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-lg font-bold mr-3">
                {selectedUser.fullName.charAt(0)}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-300">
                  {selectedUser.fullName}
                </h3>
                <p className="text-xs text-gray-400">
                  {isUserOnline(selectedUser._id) ? "Online" : "Offline"}
                </p>
              </div>
            </div>
          ) : (
            <p className="text-gray-400">Select a user to start chatting</p>
          )}
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-2">
          {messages.map((msg) => (
            <div
              key={msg._id}
              className={`p-2 max-w-xs rounded-lg ${
                msg.senderId === myId
                  ? "bg-blue-500 text-white self-end ml-auto"
                  : "bg-gray-700 text-white self-start"
              }`}
            >
              <p>{msg.text}</p>
              <p className="text-xs text-gray-300 text-right">
                {formatTime(msg.createdAt)}
              </p>
            </div>
          ))}
          <div ref={messagesEndRef}></div>
        </div>

        {/* Message Input */}
        {selectedUser && (
          <div className="p-4 border-t border-gray-700 bg-[#1f2937]">
            <textarea
              ref={inputRef}
              rows={2}
              placeholder="Type your message..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={handleKeyPress}
              className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none resize-none"
            />
            <button
              onClick={handleSend}
              className="mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
            >
              Send
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBox;
