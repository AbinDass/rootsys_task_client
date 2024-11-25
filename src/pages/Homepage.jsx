import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-700 text-white">

      <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Todo App</h1>
      <p className="text-lg md:text-xl text-gray-200 mb-8 text-center">
        Organize your tasks, boost your productivity, and manage your time efficiently.
      </p>

      <div className="flex space-x-4">
        <Link to={'/auth'}><button className="px-6 py-3 bg-white text-indigo-700 rounded-lg shadow-lg font-semibold hover:bg-gray-100">
          Login
        </button></Link>
        <Link to={'/auth'}><button className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-lg shadow-lg font-semibold">
          Register
        </button></Link>
      </div>

      <footer className="absolute bottom-4 text-gray-300 text-sm">
        © {new Date().getFullYear()} Todo App. All rights reserved.
      </footer>
    </div>
  )
}

export default Homepage
