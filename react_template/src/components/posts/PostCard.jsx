// src/components/posts/PostCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img 
        src={post.imageUrl} 
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
        <p className="text-gray-600 mb-2">{post.description}</p>
        <div className="flex items-center justify-between">
          <Link to={`/profile/${post.userId}`} className="flex items-center">
            <img
              src={post.userAvatar}
              alt={post.userName}
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="text-sm font-medium">{post.userName}</span>
          </Link>
          <div className="flex items-center">
            <span className="text-sm text-gray-500">{post.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}