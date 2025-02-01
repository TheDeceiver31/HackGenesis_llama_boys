import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6 mt-10">
      <div className="max-w-4xl bg-gray-800 p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-purple-400 mb-4">About Us</h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          Welcome to <span className="text-purple-500 font-bold">Chandan</span>! We are dedicated to providing top-notch
          services and creating amazing digital experiences. Our goal is to
          bring innovation and creativity to every project we work on.
        </p>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-purple-300 mb-2">
            Our Mission
          </h2>
          <p className="text-gray-400">
            We strive to build high-quality web applications that solve real-world
            problems. Our focus is on **user-friendly design, performance, and scalability**.
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-purple-300 mb-2">
            Why Choose Us?
          </h2>
          <ul className="text-gray-400 list-disc list-inside space-y-2">
            <li>🚀 Innovative & Scalable Solutions</li>
            <li>🎨 Modern & User-Friendly Design</li>
            <li>🛠 High-Performance & Secure Applications</li>
            <li>💡 Passionate & Experienced Team</li>
          </ul>
        </div>

        <button className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg text-lg hover:scale-105 transition-transform duration-300">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default About;
