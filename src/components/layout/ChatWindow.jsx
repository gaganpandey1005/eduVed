import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import { Send, Smile, Circle } from "lucide-react";

const ChatWindow = ({
  selectedUser,
  messages,
  text,
  setText,
  handleSend,
  handleKeyPress,
  inputRef,
  messagesEndRef,
  myId,
  formatTime,
}) => {
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);

  const handleEmojiClick = (emojiData) => {
    setText((prevText) => prevText + emojiData.emoji);
  };

  return (
    <div className="md:w-2/3 w-full flex flex-col bg-[#121a2a] rounded-lg shadow-lg">
      {/* Header */}
      <div className="p-4 bg-[#1e293b] border-b border-gray-600 sticky top-0 z-10 rounded-t-lg">
        {selectedUser ? (
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-lg font-bold mr-3 relative">
                {selectedUser.fullName.charAt(0)}
                {selectedUser.isOnline && (
                  <Circle className="absolute bottom-0 right-0 w-3 h-3 fill-green-500 text-green-500" />
                )}
              </div>
              <h3 className="text-lg font-semibold text-blue-300">
                {selectedUser.fullName}
              </h3>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-16">
            <p className="text-gray-400">
              Select a conversation to start chatting
            </p>
          </div>
        )}
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gradient-to-b from-[#121a2a] to-[#1a2436]">
        {messages.length === 0 && selectedUser && (
          <div className="flex items-center justify-center h-full">
            <div className="text-center text-gray-500">
              <div className="w-16 h-16 rounded-full bg-gray-800 mx-auto mb-3 flex items-center justify-center">
                <Send size={24} className="text-gray-600" />
              </div>
              <p>No messages yet</p>
              <p className="text-sm">
                Start the conversation with {selectedUser.fullName}
              </p>
            </div>
          </div>
        )}
        {messages.map((msg) => (
          <div
            key={msg._id}
            className={`flex ${
              msg.senderId === myId ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`p-3 max-w-xs rounded-2xl shadow-md ${
                msg.senderId === myId
                  ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white"
                  : "bg-gray-700 text-white"
              }`}
            >
              <p className="break-words">{msg.text}</p>
              <p className="text-xs opacity-70 text-right mt-1 flex items-center justify-end">
                {formatTime(msg.createdAt)}
                {msg.senderId === myId && msg.read && (
                  <span className="ml-1 text-blue-200">✓✓</span>
                )}
                {msg.senderId === myId && !msg.read && (
                  <span className="ml-1 text-gray-300">✓</span>
                )}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef}></div>
      </div>

      {/* Input */}
      {selectedUser && (
        <div className="p-4 border-t border-gray-700 bg-[#1f2937] rounded-b-lg">
          <div className="flex items-end gap-2">
            <div className="flex space-x-2">
              <button
                onClick={() => setEmojiPickerVisible((prev) => !prev)}
                className="p-2 h-10 mb-3 rounded-full hover:bg-gray-700 text-gray-400 hover:text-blue-300 transition-colors"
              >
                <Smile size={20} />
              </button>
            </div>
            <div className="flex-1 relative">
              <textarea
                ref={inputRef}
                rows={1}
                placeholder="Type your message..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handleKeyPress}
                className="w-full p-3 rounded-full bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none overflow-hidden transition-all"
                style={{
                  minHeight: "44px",
                  maxHeight: "120px",
                }}
              />
              {emojiPickerVisible && (
                <div className="absolute bottom-12 left-0 z-10">
                  <EmojiPicker onEmojiClick={handleEmojiClick} />
                </div>
              )}
            </div>
            <div className="flex space-x-2">
              <button
                onClick={handleSend}
                disabled={!text.trim()}
                className={`rounded-full ${
                  text.trim()
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-gray-700 text-gray-500"
                } transition-colors flex items-center justify-center py-2 px-2 my-2.5`}
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWindow;
