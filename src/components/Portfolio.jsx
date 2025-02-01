<<<<<<< HEAD
// import React from 'react';

// const Portfolio = () => {
//   return (
//     <>
//       {/* Background Pattern */}
//       <div className="fixed inset-0 -z-10 min-h-screen w-screen bg-black bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,#00091d_1px)] bg-[size:20px_20px]"></div>

//       {/* Main Container */}
//       <div className="my-8 py-10 w-screen flex justify-center ">
//         <div className="grid grid-cols-5 grid-rows-2 gap-8 max-w-[95vw] w-full mx-auto px-8">
          
//           {/* Left Column (2 stacked cards) */}
//           <div className="flex flex-col gap-8 w-full col-span-1">
//             <div className="bg-gray-600 bg-opacity-50 backdrop-blur-lg border border-gray-400 p-8 rounded-lg shadow-md min-h-[300px] transition-transform transform hover:scale-105">
//               <p className="text-white text-lg">Card 1 (Top Left)</p>
//             </div>
//             <div className="bg-gray-600 bg-opacity-50 backdrop-blur-lg border border-gray-400 p-8 rounded-lg shadow-md min-h-[300px] transition-transform transform hover:scale-105">
//               <p className="text-white text-lg">Card 2 (Bottom Left)</p>
//             </div>
//           </div>

//           {/* Central Big Card (Wider) */}
//           <div className="bg-gray-700 bg-opacity-50 backdrop-blur-lg border border-gray-400 p-16 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center col-span-3 min-h-[400px]">
//             <p className="text-white text-3xl font-semibold">Central Big Card</p>
//           </div>

//           {/* Right Column (2 stacked cards) */}
//           <div className="flex flex-col gap-8 w-full col-span-1">
//             <div className="bg-gray-600 bg-opacity-50 backdrop-blur-lg border border-gray-400 p-8 rounded-lg shadow-md min-h-[300px] transition-transform transform hover:scale-105">
//               <p className="text-white text-lg">Card 3 (Top Right)</p>
//             </div>
//             <div className="bg-gray-600 bg-opacity-50 backdrop-blur-lg border border-gray-400 p-8 rounded-lg shadow-md min-h-[300px] transition-transform transform hover:scale-105">
//               <p className="text-white text-lg">Card 4 (Bottom Right)</p>
//             </div>
//           </div>

//           {/* *Ultra Thin Icons/Footer Card* */}
//           <div className="col-span-5 flex justify-center mt-2 w-full">
//             <div className="bg-gray-500 bg-opacity-50 backdrop-blur-lg border border-gray-400 px-4 py-0.5 rounded-lg shadow-md transition-transform transform hover:scale-105 w-full text-center max-h-[50px] flex items-center justify-center">
//               <p className="text-white text-xs">🔗 Icons Here</p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </>
//   );
// };

// export default Portfolio;


=======
>>>>>>> 83189138cd60f5f17b55a34af03e27f1733fcf87
import React from 'react';

const Portfolio = () => {
  return (
    <>
<<<<<<< HEAD
      {/* Background Pattern */}
      <div className="fixed inset-0 -z-10 min-h-screen w-screen bg-black bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,#00091d_1px)] bg-[size:20px_20px]"></div>

      {/* Main Container with fixed height */}
      <div className="py-10 mt-10 w-screen flex justify-center min-h-screen">
        <div className="grid grid-cols-5 grid-rows-2 gap-8 max-w-[95vw] w-full mx-auto px-8 min-h-[90vh]">
          
          {/* Left Column (2 stacked cards) */}
          <div className="flex flex-col gap-8 w-full col-span-1">
            <div className="bg-gray-600 bg-opacity-50 backdrop-blur-lg border border-gray-400 p-8 rounded-lg shadow-md min-h-[300px] transition-transform transform hover:scale-105">
              <p className="text-white text-lg">Card 1 (Top Left)</p>
            </div>
            <div className="bg-gray-600 bg-opacity-50 backdrop-blur-lg border border-gray-400 p-8 rounded-lg shadow-md min-h-[300px] transition-transform transform hover:scale-105">
              <p className="text-white text-lg">Card 2 (Bottom Left)</p>
            </div>
          </div>

          {/* Central Big Card (Wider) */}
          <div className="bg-gray-700 bg-opacity-50 backdrop-blur-lg border border-gray-400 p-16 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center col-span-3 min-h-[400px]">
            <p className="text-white text-3xl font-semibold">Central Big Card</p>
          </div>

          {/* Right Column (2 stacked cards) */}
          <div className="flex flex-col gap-8 w-full col-span-1">
            <div className="bg-gray-600 bg-opacity-50 backdrop-blur-lg border border-gray-400 p-8 rounded-lg shadow-md min-h-[300px] transition-transform transform hover:scale-105">
              <p className="text-white text-lg">Card 3 (Top Right)</p>
            </div>
            <div className="bg-gray-600 bg-opacity-50 backdrop-blur-lg border border-gray-400 p-8 rounded-lg shadow-md min-h-[300px] transition-transform transform hover:scale-105">
              <p className="text-white text-lg">Card 4 (Bottom Right)</p>
            </div>
          </div>

          {/* Footer/Card for Icons */}
          <div className="col-span-5 flex justify-center mt-2 w-full">
            <div className="bg-gray-500 bg-opacity-50 backdrop-blur-lg border border-gray-400 px-4 py-1 rounded-lg shadow-md transition-transform transform hover:scale-105 w-full text-center h-[50px] flex items-center justify-center">
              <p className="text-white text-xs">🔗 Icons Here</p>
            </div>
          </div>

=======
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
>>>>>>> 83189138cd60f5f17b55a34af03e27f1733fcf87
        </div>
      </div>
    </>
  );
};

export default Portfolio;
