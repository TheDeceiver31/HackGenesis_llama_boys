import React, { useState } from "react";



const App = () => {
  const [urgencyFilter, setUrgencyFilter] = useState("");
  const [durationFilter, setDurationFilter] = useState("");

  const filteredTasks = tasks.filter((task) => {
    return (
      (!urgencyFilter || task.urgency === urgencyFilter) &&
      (!durationFilter || task.deadline.includes(durationFilter))
    );
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 p-6 text-center">
        <h1 className="text-3xl font-bold">Deadline Task</h1>
        <p>Manage and track your deadlines effectively</p>
      </header>
      
      <section className="text-center py-10">
        <h2 className="text-2xl font-semibold">Track Your Tasks</h2>
        <p className="text-gray-400">Stay on top of your deadlines and work with ease.</p>
        <button className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded">Get Started</button>
      </section>

      <section className="flex justify-center gap-4 p-6">
        <div>
          <label className="block mb-2">Filter by urgency:</label>
          <select className="p-2 bg-gray-800 border border-gray-700 rounded" onChange={(e) => setUrgencyFilter(e.target.value)}>
            <option value="">All</option>
            <option value="urgent">Urgent</option>
            <option value="medium">Medium</option>
            <option value="chill">Chill</option>
          </select>
        </div>
        <div>
          <label className="block mb-2">Filter by duration:</label>
          <select className="p-2 bg-gray-800 border border-gray-700 rounded" onChange={(e) => setDurationFilter(e.target.value)}>
            <option value="">All</option>
            <option value="Today">Today</option>
            <option value="In 1 day">In 1 day</option>
            <option value="In 2 days">In 2 days</option>
            <option value="In 3 days">In 3 days</option>
            <option value="In 4 days">In 4 days</option>
            <option value="In 5 days">In 5 days</option>
            <option value="Next week">Next week</option>
            <option value="Next month">Next month</option>
          </select>
        </div>
      </section>

      <section className="max-w-4xl mx-auto p-6 space-y-4">
        {filteredTasks.map((task) => (
          <div key={task.id} className={`p-4 rounded-lg shadow-md flex justify-between items-center ${task.urgency === "urgent" ? "bg-red-500" : task.urgency === "medium" ? "bg-yellow-500" : "bg-green-500"}`}>
            <p className="font-semibold">{task.title}</p>
            <p className="text-sm px-3 py-1 rounded-lg bg-gray-800 text-white font-bold">{task.deadline}</p>
          </div>
        ))}
      </section>

      <footer className="bg-gray-800 text-center p-4 mt-10">
        <p>&copy; 2025 Deadline Task</p>
      </footer>
    </div>
  );
};

export default App;
