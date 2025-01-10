import React from 'react'
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();

  const handlesubmit = () => {
    navigate("/dashboard");

  }
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 sm:px-8">
      {/* Logo */}
      <div className="mb-8 text-center">
        {/* logo */}
        <h1 className="text-blue-800 font-bold text-xl sm:text-2xl mt-2">
          NETWORTH TRACKER
        </h1>
      </div>

      {/* Lock Icon */}
      <div className="relative mb-8">
        <div className="bg-gray-200 rounded-full w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center mx-auto relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 sm:h-12 sm:w-12 text-blue-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 2h12a2 2 0 002-2v-6a2 2 0 00-2-2h-3V7a4 4 0 10-8 0v4H6a2 2 0 00-2 2v6a2 2 0 002 2z"
            />
          </svg>
        </div>
       
      </div>

      {/* Form */}
      <form onSubmit={handlesubmit} className="w-full max-w-sm">
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-600 text-sm font-semibold mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 rounded-md bg-blue-50 border border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-600 text-sm font-semibold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-3 rounded-md bg-blue-50 border border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-800 text-white rounded-lg shadow-lg hover:bg-blue-900 transition"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default Login;
