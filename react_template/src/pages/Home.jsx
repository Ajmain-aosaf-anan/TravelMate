// src/pages/Home.jsx
import React from 'react';
import PostList from '../components/posts/PostList';

export default function Home() {
  const dummyPosts = [
    {
      id: 1,
      title: 'Beautiful Sunset in Bali',
      description: 'Experiencing the most amazing sunset at Uluwatu Temple',
      imageUrl: '/assets/images/placeholder.jpg',
      location: 'Bali, Indonesia',
      userId: '1',
      userName: 'John Doe',
      userAvatar: '/assets/images/avatar.jpg'
    }
    // More posts...
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center my-8">Trending Travel Stories</h1>
      <PostList posts={dummyPosts} />
    </div>
  );
}