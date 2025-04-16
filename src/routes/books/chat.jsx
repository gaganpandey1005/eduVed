import { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";
import apirequest from "../../utils/lib/apiRequest";
import { Send, Search, ArrowLeft, MessageSquare, LogOut, X, Check, CheckCheck, Menu, Smile } from "lucide-react";
import EmojiPicker from "emoji-picker-react";

const ChatBox = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
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
  const [showSidebar, setShowSidebar] = useState(true);
  const [textareaHeight, setTextareaHeight] = useState(44);
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);

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
        const res = await apirequest.get(`/chat/users/${myId}`);
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

  // Auto-adjust textarea height
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = "44px";
      const scrollHeight = inputRef.current.scrollHeight;
      setTextareaHeight(scrollHeight < 120 ? scrollHeight : 120);
    }
  }, [text]);

  const lastMessageFromMe = useRef(false);

  useEffect(() => {
    if (!lastMessageFromMe.current) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    lastMessageFromMe.current = false;
  }, [messages]);

  // Close emoji picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (emojiPickerVisible && !e.target.closest(".emoji-picker-container")) {
        setEmojiPickerVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [emojiPickerVisible]);

  const handleSend = async () => {
    if (!text.trim()) return;
    try {
      lastMessageFromMe.current = true;
      const res = await apirequest.post(`/chat/send/${selectedUser._id}`, {
        senderId: myId,
        text,
      });
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

  const handleEmojiClick = (emojiData) => {
    setText((prevText) => prevText + emojiData.emoji);
    inputRef.current?.focus();
  };

  const isUserOnline = (userId) => onlineUsers.includes(userId);

  const filteredUsers = users.filter((user) =>
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatTime = (timestamp) => {
    if (!timestamp) return "";
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const getUserInitials = (email) => {
    if (!email) return "";
    const parts = email.split('@')[0].split('.');
    if (parts.length > 1) {
      return (parts[0].charAt(0) + parts[1].charAt(0)).toUpperCase();
    }
    return email.charAt(0).toUpperCase();
  };

  const getNameFromEmail = (email) => {
    if (!email) return "";
    const name = email.split('@')[0].replace(/[.]/g, ' ');
    return name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  return (
    <div className="h-screen w-full flex flex-col md:flex-row text-white bg-gradient-to-br from-gray-900 to-gray-950 overflow-hidden">
      {/* Mobile header */}
      <div className="md:hidden flex items-center justify-between p-4 bg-gray-800 border-b border-gray-700">
        <h1 className="text-xl font-bold text-blue-400 flex items-center">
          <MessageSquare className="mr-2" size={20} />
          Chat App
        </h1>
        <button 
          onClick={() => setShowSidebar(!showSidebar)}
          className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Sidebar - Users List */}
      <div
        className={`md:w-1/3 w-full md:block md:relative fixed inset-0 z-20 md:z-0 transition-all duration-300 transform 
          ${showSidebar ? "translate-x-0" : "-translate-x-full md:translate-x-0"} 
          bg-gradient-to-b from-gray-800 to-gray-900 md:border-r border-gray-700 flex flex-col`}
      >
        {/* Sidebar Header */}
        <div className="p-4 border-b border-gray-700 bg-gray-800 bg-opacity-80 backdrop-blur-sm sticky top-0">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-blue-400 flex items-center">
              <MessageSquare className="mr-2" size={20} />
              Conversations
            </h3>
            <button 
              onClick={() => setShowSidebar(false)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-700 text-gray-400"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="relative">
            <input
              type="text"
              placeholder="Search contacts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-10 rounded-lg bg-gray-900 text-white border border-gray-600 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-3.5 text-gray-400" size={18} />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-200"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Contact List */}
        <div className="overflow-y-auto flex-1 p-4 space-y-2">
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
                className={`p-3 rounded-xl cursor-pointer hover:bg-blue-800/40 transition-all 
                  ${selectedUser?._id === user._id ? "bg-gradient-to-r from-blue-700/70 to-blue-900/70 shadow-lg" : "bg-gray-800/60 hover:shadow-md"}
                  backdrop-blur-sm`}
              >
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-full ${
                    isUserOnline(user._id) 
                      ? "bg-gradient-to-br from-blue-500 to-purple-600" 
                      : "bg-gradient-to-br from-gray-600 to-gray-700"
                    } flex items-center justify-center text-sm font-bold relative shadow-md transition-transform hover:scale-105`}>
                    {getUserInitials(user.email)}
                    <span className={`absolute bottom-0 right-0 w-3 h-3 border-2 border-gray-800 rounded-full ${
                      isUserOnline(user._id) ? "bg-green-500" : "bg-gray-500"
                    }`}></span>
                  </div>
                  <div className="ml-3 flex-1">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-sm">{getNameFromEmail(user.email)}</span>
                    </div>
                    <p className="text-xs text-gray-400 flex items-center truncate">
                      {isUserOnline(user._id) ? (
                        <>
                          <span className="bg-green-500 w-1.5 h-1.5 rounded-full mr-1.5"></span>
                          <span>Online now</span>
                        </>
                      ) : (
                        <>
                          <span className="bg-gray-500 w-1.5 h-1.5 rounded-full mr-1.5"></span>
                          <span>Offline</span>
                        </>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-gray-400 text-center pt-8 flex flex-col items-center">
              <Search size={40} className="text-gray-600 mb-2" />
              <p className="text-sm">No matching contacts found</p>
              {searchTerm && (
                <p className="text-xs mt-1">Try a different search term</p>
              )}
            </div>
          )}
        </div>

        {/* User Profile/Logout Footer */}
        <div className="p-4 border-t border-gray-700 bg-gray-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center text-sm font-bold mr-3">
                {user.email ? user.email.charAt(0).toUpperCase() : "U"}
              </div>
              <div className="truncate">
                <p className="font-medium text-sm truncate">{user.email}</p>
                <p className="text-xs text-green-400">Online</p>
              </div>
            </div>
            <button className="p-2 rounded-full hover:bg-gray-700 text-gray-400 hover:text-red-400 transition-colors">
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      {selectedUser ? (
        <div className="md:w-2/3 w-full flex flex-col bg-gradient-to-br from-gray-900 to-gray-800 relative">
          {/* Chat Header */}
          <div className="p-4 bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700 sticky top-0 z-10 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <button
                  onClick={() => setShowSidebar(true)}
                  className="md:hidden p-2 mr-2 rounded-lg hover:bg-gray-700 text-gray-300"
                >
                  <ArrowLeft size={20} />
                </button>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-lg font-bold mr-3 relative shadow-lg">
                  {getUserInitials(selectedUser.email)}
                  {isUserOnline(selectedUser._id) && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-gray-800 rounded-full animate-pulse"></span>
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-300 transition-colors hover:text-blue-200">
                    {getNameFromEmail(selectedUser.email)}
                  </h3>
                  <p className="text-xs text-gray-400">
                    {isUserOnline(selectedUser._id) ? 'Online now' : 'Offline'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gradient-to-b from-gray-900 to-gray-950 bg-opacity-80">
            {error && (
              <div className="bg-red-900/30 border border-red-700 text-red-200 p-3 rounded-lg animate-pulse mb-4">
                {error}
                <button 
                  onClick={() => setError(null)} 
                  className="ml-2 text-red-300 hover:text-red-100"
                >
                  <X size={16} />
                </button>
              </div>
            )}

            {messages.length === 0 && (
              <div className="flex items-center justify-center h-full">
                <div className="text-center text-gray-500 p-6 bg-gray-800 bg-opacity-40 rounded-xl backdrop-blur-sm">
                  <div className="w-20 h-20 rounded-full bg-gray-800 mx-auto mb-4 flex items-center justify-center shadow-inner">
                    <Send size={28} className="text-gray-500 transform -rotate-12" />
                  </div>
                  <p className="font-medium text-lg mb-2">No messages yet</p>
                  <p className="text-sm">
                    Start the conversation with {getNameFromEmail(selectedUser.email)}
                  </p>
                </div>
              </div>
            )}

            {messages.map((msg, index) => (
              <div
                key={msg._id}
                className={`flex ${
                  msg.senderId === myId ? "justify-end" : "justify-start"
                } animate-fadeIn`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div
                  className={`p-3 px-4 max-w-xs sm:max-w-sm rounded-2xl shadow-lg transition-transform duration-300 hover:scale-[1.02] ${
                    msg.senderId === myId
                      ? "bg-gradient-to-r from-blue-700 to-indigo-600 text-white rounded-tr-none"
                      : "bg-gradient-to-r from-gray-800 to-gray-700 text-white rounded-tl-none"
                  }`}
                >
                  <p className="break-words leading-relaxed">{msg.text}</p>
                  <p className="text-xs opacity-70 text-right mt-1 flex items-center justify-end">
                    {formatTime(msg.createdAt)}
                    {msg.senderId === myId && msg.read && (
                      <CheckCheck size={14} className="ml-1 text-blue-200" />
                    )}
                    {msg.senderId === myId && !msg.read && (
                      <Check size={14} className="ml-1 text-gray-300" />
                    )}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef}></div>
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-gray-700 bg-gray-800">
            <div className="flex items-end gap-2">
              <div className="emoji-picker-container relative">
                <button
                  onClick={() => setEmojiPickerVisible(!emojiPickerVisible)}
                  className="p-2 h-10 rounded-full hover:bg-gray-700 text-gray-400 hover:text-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Open emoji picker"
                >
                  <Smile size={22} />
                </button>
                {emojiPickerVisible && (
                  <div className="absolute bottom-12 left-0 z-10 shadow-2xl rounded-lg overflow-hidden transition-opacity animate-fadeIn">
                    <EmojiPicker onEmojiClick={handleEmojiClick} />
                  </div>
                )}
              </div>
              <div className="flex-1 relative">
                <textarea
                  ref={inputRef}
                  rows={1}
                  placeholder="Type your message..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  onKeyDown={handleKeyPress}
                  style={{ height: `${textareaHeight}px` }}
                  className="w-full p-3 px-4 rounded-full bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 resize-none transition-all placeholder-gray-500 shadow-inner"
                />
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={handleSend}
                  disabled={!text.trim()}
                  className={`rounded-full transition-all duration-300 flex items-center justify-center p-3 ${
                    text.trim()
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-blue-500/20"
                      : "bg-gray-700 text-gray-500"
                  }`}
                >
                  <Send size={18} className={text.trim() ? "transform -rotate-12" : ""} />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Empty state when no chat is selected
        <div className="md:w-2/3 w-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-8">
          <div className="text-center max-w-md">
            <div className="w-24 h-24 rounded-full bg-gray-800 mx-auto mb-6 flex items-center justify-center shadow-inner">
              <MessageSquare size={40} className="text-gray-600" />
            </div>
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Welcome to Chat</h2>
            <p className="text-gray-400 mb-6">
              Select a conversation from the sidebar to start chatting with your contacts.
            </p>
            <button 
              onClick={() => setShowSidebar(true)}
              className="md:hidden px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg transition-colors"
            >
              View Conversations
            </button>
          </div>
        </div>
      )}

      <style >{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default ChatBox;