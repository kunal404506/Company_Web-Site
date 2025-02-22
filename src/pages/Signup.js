import React from "react";
import NavBar from "../components/Navbar/NavBar";
import Footer from '../components/Footer';

const Signup = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded shadow-md w-96">
          <h2 className="text-2xl font-bold mb-4">Signup</h2>
          <form>
            <label className="block mb-2">Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded mb-4"
              placeholder="Enter your name"
            />

            <label className="block mb-2">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded mb-4"
              placeholder="Enter your email"
            />

            <label className="block mb-2">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded mb-4"
              placeholder="Enter a password"
            />

            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-2 rounded"
            >
              Signup
            </button>
          </form>
        </div>
      </div>
      {/* Add Footer Here */}
      <Footer />
    </>
  );
};

export default Signup;
