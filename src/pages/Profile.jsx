import React from 'react'
import { useSelector } from 'react-redux';

const Profile = () => {
    const user = useSelector((state) => state.user.data); 

    if (!user) {
      return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <p className="text-gray-500">No user found. Please log in.</p>
        </div>
      );
    }
  
    return (
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">User Profile</h2>
          
          <div className="flex items-center justify-center mb-6">
            <div className="w-24 h-24 rounded-full bg-gray-300 overflow-hidden">
              
              <img 
                src={user.profilePicture || 'https://via.placeholder.com/150'} 
                alt="Profile" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
  
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="font-medium text-gray-600">Username:</span>
              <span>{user.username}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-600">Email:</span>
              <span>{user.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-600">Joined:</span>
              <span>{new Date(user.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
  
          <div className="mt-8 flex justify-center">
            <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    );
}

export default Profile
