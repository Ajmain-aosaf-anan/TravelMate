// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Explore from './pages/Explore';
import Chat from './pages/Chat';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-lg">
          <div className="container mx-auto px-6 py-3">
            <div className="flex items-center justify-between">
              <div className="text-xl font-bold text-blue-600">
                <Link to="/">TravelMate</Link>
              </div>
              <div className="flex items-center space-x-4">
                <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
                <Link to="/explore" className="text-gray-700 hover:text-blue-600">Explore</Link>
                <Link to="/chat" className="text-gray-700 hover:text-blue-600">Chat</Link>
                <Link to="/profile" className="text-gray-700 hover:text-blue-600">Profile</Link>
                <Link to="/signin" className="text-gray-700 hover:text-blue-600">Sign In</Link>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;