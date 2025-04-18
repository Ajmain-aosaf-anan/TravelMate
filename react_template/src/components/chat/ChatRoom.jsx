// src/components/chat/ChatRoom.jsx
import React from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

export default function ChatRoom({ roomId }) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto">
        <MessageList roomId={roomId} />
      </div>
      <div className="border-t">
        <MessageInput roomId={roomId} />
      </div>
    </div>
  );
}