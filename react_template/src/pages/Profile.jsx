// src/pages/Profile.jsx
import React from 'react';
import PostList from '../components/posts/PostList';

export default function Profile() {
  const profile = {
    name: 'John Doe',
    bio: 'Adventure seeker | Photography enthusiast',
    avatar: '/assets/images/avatar.jpg',
    posts: []
  };

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <div className="flex items-center space-x-4">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-20 h-20 rounded-full"
          />
          <div>
            <h2 className="text-2xl font-bold">{profile.name}</h2>
            <p className="text-gray-600">{profile.bio}</p>
          </div>
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-4">My Posts</h3>
      <PostList posts={profile.posts} />
    </div>
  );
}