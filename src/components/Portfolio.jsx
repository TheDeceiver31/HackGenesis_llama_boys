import React from 'react';

const Portfolio = () => {
  return (
    <>
      <div className="fixed inset-0 -z-10 min-h-screen w-screen bg-black bg-[radial-gradient(circle,_rgba(255,255,255,0.2)_1px,_#00091d_1px)] bg-[size:20px_20px]"></div>
      <div className="my-8 py-10 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          <div className="bg-gray-600 bg-opacity-50 backdrop-blur-lg border border-gray-400 p-4 rounded-lg shadow-md transition-transform transform hover:scale-y-110 min-h-[350px]">
            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-gray-600 bg-opacity-50 backdrop-blur-lg border border-gray-400 p-4 rounded-lg shadow-md transition-transform transform hover:scale-y-110 min-h-[400px]">
            <p className="text-white">Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aliquam dolor, accusamus reprehenderit aliquid similique ipsa excepturi, maxime ex cumque voluptates</p>
          </div>
          <div className="bg-gray-600 bg-opacity-50 backdrop-blur-lg border border-gray-400 p-4 rounded-lg shadow-md transition-transform transform hover:scale-y-110 min-h-[380px]">
            <p className="text-white">Curabitur laoreet efficitur augue, sed aliquam ipsum.</p>
          </div>
          <div className="bg-gray-600 bg-opacity-50 backdrop-blur-lg border border-gray-400 p-4 rounded-lg shadow-md transition-transform transform hover:scale-y-110 min-h-[420px]">
            <p className="text-white">Aliquam erat volutpat. In sit amet neque auctor.</p>
          </div>
          <div className="bg-gray-600 bg-opacity-50 backdrop-blur-lg border border-gray-400 p-4 rounded-lg shadow-md transition-transform transform hover:scale-y-110 min-h-[360px]">
            <p className="text-white">Nullam quis turpis id odio tincidunt vulputate.</p>
          </div>
          <div className="bg-gray-600 bg-opacity-50 backdrop-blur-lg border border-gray-400 p-4 rounded-lg shadow-md transition-transform transform hover:scale-y-110 min-h-[440px]">
            <p className="text-white">Morbi auctor libero a urna aliquam, in ultricies elit.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
