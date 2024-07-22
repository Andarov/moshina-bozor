import React from 'react';

const SignIn = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input type="password" className="w-full p-2 border rounded" />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
