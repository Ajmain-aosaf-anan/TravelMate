// src/components/chat/MessageList.jsx
import React from 'react';

export default function MessageList({ messages = [] }) {
  return (
    <div className="p-4 space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${
            message.isSelf ? 'justify-end' : 'justify-start'
          }`}
        >
          <div
            className={`max-w-xs md:max-w-md rounded-lg p-3 ${
              message.isSelf
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-900'
            }`}
          >
            <p className="text-sm">{message.content}</p>
            <span className="text-xs mt-1 block">
              {new Date(message.timestamp).toLocaleTimeString()}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}