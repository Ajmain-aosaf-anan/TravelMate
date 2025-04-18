// src/pages/Chat.jsx
import React from 'react';
import ChatRoom from '../components/chat/ChatRoom';

export default function Chat() {
  return (
    <div className="container mx-auto p-6 h-[calc(100vh-4rem)]">
      <div className="bg-white rounded-lg shadow-lg h-full">
        <ChatRoom />
      </div>
    </div>
  );
}