import React from "react";

const ClientOverview = () => {
  return (
    <div className="container mx-auto p-8">
      <header className="text-center mb-12 opacity-0 animate-fadeIn">
        <h1 className="text-4xl font-bold text-blue-600 tracking-wide">
          Client Overview
        </h1>
      </header>

      <section className="flex flex-col gap-8 items-center opacity-0 animate-fadeIn animate-delay-500">
        <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-md opacity-0 animate-slideUp animate-delay-500 hover:transform hover:translate-y-1 hover:shadow-xl">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Total Income Earned</h2>
          <p className="text-3xl font-bold text-green-600">$5,350.00</p>
        </div>

        <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-md opacity-0 animate-slideUp animate-delay-1000 hover:transform hover:translate-y-1 hover:shadow-xl">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Total Hours Worked</h2>
          <p className="text-3xl font-bold text-green-600">120 Hours</p>
        </div>
      </section>

      <footer className="text-center mt-12 text-gray-600">
        <p>Client Overview Dashboard - 2025</p>
      </footer>
    </div>
  );
};

export default ClientOverview;
