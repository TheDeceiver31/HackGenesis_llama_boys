import React, { useState } from "react";
<<<<<<< HEAD
import { Link, useNavigate } from "react-router-dom";
=======
import { Link } from "react-router-dom";
>>>>>>> 83189138cd60f5f17b55a34af03e27f1733fcf87

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

<<<<<<< HEAD
  const navigate = useNavigate();

=======
>>>>>>> 83189138cd60f5f17b55a34af03e27f1733fcf87
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

<<<<<<< HEAD
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("User Signed Up:", formData);
  //   fetch("http://localhost:3000/user/signup",{
  //     method:"POST",
  //     headers:{
  //     },
  //     body:formData

  //   }).then((res)=>res.
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Signed Up:", formData);

    fetch("http://localhost:5000/user/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then((res) => res.json()) // Convert response to JSON
    .then((data) => {
        console.log("Signup Success:", data);
        navigate("/portfolio");
        // alert(data.message);
    })
    .catch((error) => {
        console.error("Signup Error:", error);
        // alert("Signup failed. Please try again.");
    });
};

=======
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Signed Up:", formData);
  };
>>>>>>> 83189138cd60f5f17b55a34af03e27f1733fcf87

  return (
    
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label className="block text-gray-300 text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Create a password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition-transform duration-300 text-white font-bold py-2 rounded-lg"
          >
            Sign Up
          </button>
        </form>

        {/* Already have an account */}
        <p className="text-gray-400 text-sm text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-400 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
