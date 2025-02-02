<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> cd4a5ae (last commit)
// import React from 'react';

// const Portfolio = () => {
//   return (
//     <>
//       {/* Background Pattern */}
//       <div className="fixed inset-0 -z-10 min-h-screen w-screen bg-black bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,#00091d_1px)] bg-[size:20px_20px]"></div>

<<<<<<< HEAD
//       {/* Main Container */}
//       <div className="my-8 py-10 w-screen flex justify-center ">
//         <div className="grid grid-cols-5 grid-rows-2 gap-8 max-w-[95vw] w-full mx-auto px-8">
=======
//       {/* Main Container with fixed height */}
//       <div className="py-10 mt-10 w-screen flex justify-center min-h-screen">
//         <div className="grid grid-cols-5 grid-rows-2 gap-8 max-w-[95vw] w-full mx-auto px-8 min-h-[90vh]">
>>>>>>> cd4a5ae (last commit)
          
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

<<<<<<< HEAD
//           {/* *Ultra Thin Icons/Footer Card* */}
//           <div className="col-span-5 flex justify-center mt-2 w-full">
//             <div className="bg-gray-500 bg-opacity-50 backdrop-blur-lg border border-gray-400 px-4 py-0.5 rounded-lg shadow-md transition-transform transform hover:scale-105 w-full text-center max-h-[50px] flex items-center justify-center">
=======
//           {/* Footer/Card for Icons */}
//           <div className="col-span-5 flex justify-center mt-2 w-full">
//             <div className="bg-gray-500 bg-opacity-50 backdrop-blur-lg border border-gray-400 px-4 py-1 rounded-lg shadow-md transition-transform transform hover:scale-105 w-full text-center h-[50px] flex items-center justify-center">
>>>>>>> cd4a5ae (last commit)
//               <p className="text-white text-xs">🔗 Icons Here</p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </>
//   );
// };

// export default Portfolio;


<<<<<<< HEAD
=======
>>>>>>> 83189138cd60f5f17b55a34af03e27f1733fcf87
import React from 'react';

const Portfolio = () => {
  return (
    <>
<<<<<<< HEAD
=======

// import React, { useState } from 'react';

// const Portfolio = () => {
//   const [showForm, setShowForm] = useState(false);

//   return (
//     <>
//       {/* Background Pattern */}
//       <div className="fixed inset-0 -z-10 min-h-screen w-screen bg-black bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,#00091d_1px)] bg-[size:20px_20px]"></div>

//       {/* Main Container with fixed height */}
//       <div className="py-10 mt-10 w-screen flex justify-center min-h-screen">
//         <div className="grid grid-cols-5 grid-rows-2 gap-8 max-w-[95vw] w-full mx-auto px-8 min-h-[90vh]">
          
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
//           <div className="bg-gray-700 bg-opacity-50 backdrop-blur-lg border border-gray-400 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col items-center justify-center col-span-3 min-h-[400px]">
//             {showForm ? (
//               <form className="bg-gray-800 p-6 rounded-lg w-full max-w-lg">
//                 <h2 className="text-white text-xl mb-4">Add Project</h2>

//                 <label className="text-white block mb-2">Project Name</label>
//                 <input type="text" className="w-full p-2 mb-4 rounded bg-gray-700 text-white border border-gray-500" />

//                 <label className="text-white block mb-2">Status</label>
//                 <select className="w-full p-2 mb-4 rounded bg-gray-700 text-white border border-gray-500">
//                   <option>Ongoing</option>
//                   <option>Completed</option>
//                   <option>On Hold</option>
//                 </select>

//                 <label className="text-white block mb-2">Hourly Rate ($)</label>
//                 <input type="number" className="w-full p-2 mb-4 rounded bg-gray-700 text-white border border-gray-500" />

//                 <label className="text-white block mb-2">Budget ($)</label>
//                 <input type="number" className="w-full p-2 mb-4 rounded bg-gray-700 text-white border border-gray-500" />

//                 <label className="text-white block mb-2">Team Members</label>
//                 <input type="text" className="w-full p-2 mb-4 rounded bg-gray-700 text-white border border-gray-500" placeholder="Enter names separated by commas" />

//                 <div className="flex justify-between">
//                   <button type="submit" className="bg-green-500 px-4 py-2 rounded text-white hover:bg-green-600">Submit</button>
//                   <button type="button" className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600" onClick={() => setShowForm(false)}>Cancel</button>
//                 </div>
//               </form>
//             ) : (
//               <>
//                 <p className="text-white text-3xl font-semibold mb-4">Central Big Card</p>
//                 <button 
//                   className="bg-blue-500 px-6 py-2 rounded-lg text-white hover:bg-blue-600 transition-transform transform hover:scale-105"
//                   onClick={() => setShowForm(true)}
//                 >
//                   Add Project
//                 </button>
//               </>
//             )}
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

//           {/* Footer/Card for Icons */}
//           <div className="col-span-5 flex justify-center mt-2 w-full">
//             <div className="bg-gray-500 bg-opacity-50 backdrop-blur-lg border border-gray-400 px-4 py-1 rounded-lg shadow-md transition-transform transform hover:scale-105 w-full text-center h-[50px] flex items-center justify-center">
//               <p className="text-white text-xs">🔗 Icons Here</p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </>
//   );
// };

// export default Portfolio;


// import React, { useState } from 'react';
// import ActiveTimeTracker from './ActiveTimeTracker';

// const Portfolio = () => {
//   const [showForm, setShowForm] = useState(false);

//   return (
//     <>
//       {/* Background Pattern */}
//       <div className="fixed inset-0 -z-10 min-h-screen w-screen bg-black bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,#00091d_1px)] bg-[size:20px_20px]"></div>

//       {/* Main Container */}
//       <div className={`py-10 mt-10 w-screen flex justify-center min-h-screen transition-all ${showForm ? 'blur-lg' : ''}`}>
//         <div className="grid grid-cols-5 grid-rows-2 gap-8 max-w-[95vw] w-full mx-auto px-8 min-h-[90vh]">
          
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
//           {/* <div className="bg-gray-700 bg-opacity-50 backdrop-blur-lg border border-gray-400 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col items-center justify-center col-span-3 min-h-[400px]">
//             <p className="text-white text-3xl font-semibold mb-4"></p>
//             <button 
//               className="bg-blue-500 px-6 py-2 rounded-lg text-white hover:bg-blue-600 transition-transform transform hover:scale-105"
//               onClick={() => setShowForm(true)}
//             >
//               Add Project
//             </button>
//           </div> */}

// <div className="bg-gray-700 bg-opacity-50 backdrop-blur-lg border border-gray-400 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col items-center  col-span-3 min-h-[400px]">
  
//   {/* Profile Image */}
//   <div className="w-24 h-24 rounded-full bg-gray-500 flex items-center justify-center mb-4">
//     <span className="text-white text-2xl">👤</span> {/* Placeholder Icon */}
//   </div>

//   {/* Username */}
//   <p className="text-white text-2xl font-semibold mb-4">John Doe</p> {/* Replace with dynamic username */}

//   {/* Add Project Button */}
//   <button 
//     className="bg-violet-500 px-6 py-2 rounded-lg text-white hover:bg-violet-600  transition-transform transform hover:scale-105"
//     onClick={() => setShowForm(true)}
//   >
//     Add Project
//   </button>
// </div>


//           {/* Right Column (2 stacked cards) */}
//           <div className="flex flex-col gap-8 w-full col-span-1">
//             <div className="bg-gray-600 bg-opacity-50 backdrop-blur-lg border border-gray-400 p-8 rounded-lg shadow-md min-h-[300px] transition-transform transform hover:scale-105">
//               <p className="text-white text-lg">Card 3 (Top Right)</p>
//             </div>
//             <div className="bg-gray-600 bg-opacity-50 backdrop-blur-lg border border-gray-400 p-8 rounded-lg shadow-md min-h-[300px] transition-transform transform hover:scale-105">
//               <p className="text-white text-lg">Card 4 (Bottom Right)</p>
//             </div>
//           </div>

//           {/* Footer/Card for Icons */}
//           <div className="col-span-5 flex justify-center mt-2 w-full">
//             <div className="bg-gray-500 bg-opacity-50 backdrop-blur-lg border border-gray-400 px-4 py-1 rounded-lg shadow-md transition-transform transform hover:scale-105 w-full text-center h-[50px] flex items-center justify-center">
//               <p className="text-white text-xs">🔗 Icons Here</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* MODAL FORM */}
//       {showForm && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-md">
//           <div className="bg-gray-800 p-6 rounded-lg w-full max-w-lg">
//             <h2 className="text-white text-xl mb-4">Add Project</h2>

//             <label className="text-white block mb-2">Project Name</label>
//             <input type="text" className="w-full p-2 mb-4 rounded bg-gray-700 text-white border border-gray-500" />

//             <label className="text-white block mb-2">Status</label>
//             <select className="w-full p-2 mb-4 rounded bg-gray-700 text-white border border-gray-500">
//               <option>Ongoing</option>
//               <option>Completed</option>
//               <option>On Hold</option>
//             </select>

//             <label className="text-white block mb-2">Hourly Rate ($)</label>
//             <input type="number" className="w-full p-2 mb-4 rounded bg-gray-700 text-white border border-gray-500" />

//             <label className="text-white block mb-2">Budget ($)</label>
//             <input type="number" className="w-full p-2 mb-4 rounded bg-gray-700 text-white border border-gray-500" />

//             <label className="text-white block mb-2">Team Members</label>
//             <input type="text" className="w-full p-2 mb-4 rounded bg-gray-700 text-white border border-gray-500" placeholder="Enter names separated by commas" />

//             <div className="flex justify-between">
//               <button type="submit" className="bg-green-500 px-4 py-2 rounded text-white hover:bg-green-600">Submit</button>
//               <button type="button" className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600" onClick={() => setShowForm(false)}>Cancel</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Portfolio;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ActiveTimeTracker from './ActiveTimeTracker';
import ClientOverview from './ClientOverview';
// Import custom images (adjust the path based on your project structure)
import icon1 from '../assets/icon1.jpg'; // Add correct path to your images
import icon2 from '../assets/icon2.jpg';
import icon3 from '../assets/icon3.jpg';
import icon4 from '../assets/icon4.jpg';
import icon5 from '../assets/icon5.jpg';
import icon6 from '../assets/icon6.jpg';



const Portfolio = () => {
    const navigate = useNavigate();

    const [showForm, setShowForm] = useState(false);
    
const [tasks, setTasks] = useState([
  { id: 1, title: "Complete the project proposal", urgency: "urgent", deadline: "Today" },
  { id: 2, title: "Review the quarterly report", urgency: "medium", deadline: "In 3 days" },
  { id: 3, title: "Organize the workspace", urgency: "chill", deadline: "Next week" },
]);

const [clients, setClients] = useState([
  { id: 1, name: "Alice Johnson", link: "/projects/alice" },
  { id: 2, name: "Bob Smith", link: "/projects/bob" },
  { id: 3, name: "Charlie Brown", link: "/projects/charlie" },
]);


const [projectDetails, setProjectDetails] = useState({
  projectName: "",
  status: "Ongoing",
  clientName: "",
  budget: "",
  teamMembers: "",
});

const handleInputChangeProject = (e) => {
  setProjectDetails({ ...projectDetails, [e.target.name]: e.target.value });
};

const handleSubmitProject = (e) => {
  e.preventDefault();

  if (!projectDetails.clientName.trim()) return;

  // Create new client object
  const newClient = {
    id: clients.length + 1,
    name: projectDetails.clientName,
    link: `/projects/${projectDetails.clientName.toLowerCase().replace(/\s+/g, "-")}`,
  };

  // Update client list
  setClients((prevClients) => [...prevClients, newClient]);

  // Reset form
  setProjectDetails({
    projectName: "",
    status: "Ongoing",
    clientName: "",
    budget: "",
    teamMembers: "",
  });

  // Close form
  setShowForm(false);
};


const [shhowForm, setShhowForm] = useState(false);
  const [earnings, setEarnings] = useState(500); // Initial earnings
  const [taskDetails, setTaskDetails] = useState({
    taskName: '',
    hourlyRate: 0,
    hoursWorked: 0,
  });

  // Handle task form changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission to calculate earnings and update state
  const handleSubmitTask = (e) => {
    e.preventDefault();

    // Destructure task details
    const { hourlyRate, hoursWorked } = taskDetails;
    
    // Calculate earnings for the task
    const taskEarnings = parseFloat(hourlyRate) * parseFloat(hoursWorked);

    // Update the total earnings
    setEarnings((prev) => prev + taskEarnings);

    // Reset task form after submission
    setTaskDetails({
      taskName: '',
      hourlyRate: 0,
      hoursWorked: 0,
    });

    // Close the modal after submission
    setShhowForm(false);
  };

  
  const handleLogout = () => {
    // localStorage.removeItem("authToken"); // Clear authentication token
    // sessionStorage.removeItem("userSession"); // Clear session data if needed
    navigate("/login"); // Redirect to login page
  };


  const [newTask, setNewTask] = useState({ title: "", urgency: "medium", deadline: "" });
  const [showwForm, setShowwForm] = useState(false);

  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const [tassks, setTassks] = useState([
    { id: 1, text: "✅ Complete project report" },
    { id: 2, text: "📖 Read 20 pages of a book" },
    { id: 3, text: "🏋️‍♂️ Exercise for 30 minutes" },
  ]);
  const [newTassk, setNewTassk] = useState("");

  const addTask = () => {
    if (newTassk.trim() === "") return;
    setTassks([...tasks, { id: Date.now(), text: `📝 ${newTassk}` }]);
    setNewTassk("");
  };

  const deleteTask = (id) => {
    setTassks(tasks.filter((task) => task.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTassk.title || !newTassk.deadline) return;

    const taskToAdd = {
      id: tasks.length + 1,
      title: newTassk.title,
      urgency: newTassk.urgency,
      deadline: newTassk.deadline,
    };
    
    setTassks([...tasks, taskToAdd]);
    setNewTassk({ title: "", urgency: "medium", deadline: "" });
    setShowwForm(false);
  };
  return (
    <>
>>>>>>> cd4a5ae (last commit)
      {/* Background Pattern */}
      <div className="fixed inset-0 -z-10 min-h-screen w-screen bg-black bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,#00091d_1px)] bg-[size:20px_20px]"></div>

      {/* Main Container with fixed height */}
      <div className="py-10 mt-10 w-screen flex justify-center min-h-screen">
        <div className="grid grid-cols-5 grid-rows-2 gap-8 max-w-[95vw] w-full mx-auto px-8 min-h-[90vh]">
          
          {/* Left Column (2 stacked cards) */}
          <div className="flex flex-col gap-8 w-full col-span-1">
<<<<<<< HEAD
            <div className="bg-gray-600 bg-opacity-50 backdrop-blur-lg border border-gray-400 p-8 rounded-lg shadow-md min-h-[300px] transition-transform transform hover:scale-105">
              <p className="text-white text-lg">Card 1 (Top Left)</p>
            </div>
            <div className="bg-gray-600 bg-opacity-50 backdrop-blur-lg border border-gray-400 p-8 rounded-lg shadow-md min-h-[300px] transition-transform transform hover:scale-105">
              <p className="text-white text-lg">Card 2 (Bottom Left)</p>
=======
            <div className="bg-gray-600  bg-opacity-50 backdrop-blur-lg border border-gray-400 p-8 rounded-lg shadow-md min-h-[300px] max-h-[300px] overflow-y-auto transition-transform transform hover:scale-105">
              <p className="text-white text-lg text-center">DEADLINE</p>
              {tasks.map((tasks) => (
                                <div key={tasks.id} className={`p-1 my-1 rounded bg-black`}>
                                    <p className="text-white text-xs">{tasks.title} - <span className={`font-bold  ${tasks.urgency === 'urgent' ? 'text-red-500' : 
          tasks.urgency === 'medium' ? 'text-yellow-500' : 
          'text-green-500'}`}>{tasks.deadline}</span></p>
                                </div>
                            ))}
                            <button 
    className="bg-violet-500 px-6 py-2 rounded-lg text-white hover:bg-violet-600  transition-transform transform hover:scale-105"
    onClick={() => setShowwForm(true)}
  >
    Add Task
  </button>
            </div>
            <div className="bg-gray-600 bg-opacity-50 backdrop-blur-lg border border-gray-400 p-8 rounded-lg shadow-md min-h-[300px] transition-transform transform hover:scale-105">
              <p className="text-white text-lg text-center">EARNINGS</p>
              <div className="mt-6 flex items-center space-x-4 p-6 bg-gradient-to-r bg-black rounded-xl shadow-xl max-h-[250px] overflow-hidden">
                {/* Earnings Icon */}
                <span className="text-xl text-white">
                  
                </span>
                
                {/* Earnings Text */}
                <div className="flex flex-col">
                  <p className="text-white text-sm font-medium">Total Earnings</p>
                  <p className="text-xl sm:text-xs font-extrabold text-white mt-2 break-words max-w-[80%]">
                    ${earnings.toFixed(2)} {/* Display updated earnings */}
                  </p>
                </div>
              </div>

>>>>>>> cd4a5ae (last commit)
            </div>
          </div>

          {/* Central Big Card (Wider) */}
<<<<<<< HEAD
          <div className="bg-gray-700 bg-opacity-50 backdrop-blur-lg border border-gray-400 p-16 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center col-span-3 min-h-[400px]">
            <p className="text-white text-3xl font-semibold">Central Big Card</p>
=======
          <div className="bg-gray-700 gap-1 bg-opacity-50 backdrop-blur-lg border border-gray-400 p-16 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col items-start justify-center col-span-3 min-h-[300px]">
          <p className="text-white text-3xl font-semibold mb-4"></p>
            {/* <button 
              className="bg-blue-500 px-6 py-2 rounded-lg text-white hover:bg-blue-600 transition-transform transform hover:scale-105"
              onClick={() => setShowForm(true)}
            >
              Add Project
            </button> */}
          

  
  {/* Profile Image */}
  <div className="w-24 h-24 rounded-full bg-gray-500 flex items-center justify-center mb-4">
    <span className="text-white text-2xl">👤</span> {/* Placeholder Icon */}
    
  </div>

  {/* Username */}
  <p className="text-white text-2xl  font-semibold mb-4">Profile 1</p> {/* Replace with dynamic username */}
  <img height={60} width={300} src='./public/graph.jpg'></img>
  {/* Add Project Button */}
  <button 
    className="bg-violet-500 px-6 py-2 rounded-lg text-white hover:bg-violet-600  transition-transform transform hover:scale-105"
    onClick={() => setShowForm(true)}
  >
    Add Project
  </button>
  
  <button 
              className="bg-red-500 px-6 py-2 rounded-lg text-white hover:bg-red-600 transition-transform transform hover:scale-105"
              onClick={handleLogout}
            >
              Logout
            </button>
            
            <div className="bg-gray-800 bg-opacity-60 border border-gray-500 rounded-lg p-4 w-full max-h-40 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-700">
          <ul className="text-white text-lg space-y-2">
            {tasks.map((task) => (
              <li key={task.id} className="flex justify-between items-center bg-gray-600 p-3 rounded-md">
                <span>{task.text}</span>
                <button
                  className="text-red-400 hover:text-red-600"
                  onClick={() => deleteTask(task.id)}
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>
        </div>
        

        <div className="flex mt-4">
          <input
            type="text"
            className="flex-1 p-2 rounded-l-md bg-gray-600 text-white placeholder-gray-400 focus:outline-none"
            placeholder="New Task..."
            value={newTassk}
            onChange={(e) => setNewTassk(e.target.value)}
          />
          <button
            className="bg-green-500 px-4 py-2 rounded-r-md text-white hover:bg-green-600 transition-transform transform hover:scale-105"
            onClick={addTask}
          >
            ➕
          </button>
        </div>
            <ActiveTimeTracker />
>>>>>>> cd4a5ae (last commit)
          </div>

          {/* Right Column (2 stacked cards) */}
          <div className="flex flex-col gap-8 w-full col-span-1">
<<<<<<< HEAD
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
=======
            {/* <div className="bg-gray-600 bg-opacity-50 backdrop-blur-lg border border-gray-400 p-8 rounded-lg shadow-md min-h-[300px] transition-transform transform hover:scale-105">
              <p className="text-white text-lg text-center">OVERVIEW</p>
              <ClientOverview />
            </div> */}
            {/* <div className="bg-gray-600 bg-opacity-50 backdrop-blur-lg border border-gray-400 p-8 rounded-lg shadow-md min-h-[300px] transition-transform transform hover:scale-105">
              <p className="text-white text-lg">Client & projects</p>

            </div> */}
            {/* Card 4 (Bottom Right) */}
<div className="bg-gray-600 w-[230px] bg-opacity-50 backdrop-blur-lg border border-gray-400 overflow-y-auto p-8 rounded-lg shadow-md h-[715px] max-h-[815px] transition-transform transform hover:scale-105 ">
  <p className="text-white text-lg mb-4">Client & Project Management</p>
  
  {/* Scrollable Client List */}
  <div className="min-h-[100px]  scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-700">
  {clients.map((client) => (
    <div key={client.id} className="flex flex-col items-center justify-between bg-black bg-opacity-50 p-3 rounded-lg mb-2 shadow-md">
      <div className="flex items-center gap-3">
        <img src="public/prom.jpg" alt="Profile" className="w-8 h-8 rounded-full" />
        <p className="text-white text-xs">{client.name}</p>
      </div>
      <a href={client.link} className="bg-blue-500 text-white px-3 py-1 rounded-md text-xs hover:bg-blue-600">
        View
      </a>
      </div>
    ))}
  </div>
</div>
          </div>

          {/* Footer/Card for Icons */}
          {/* <div className="col-span-5 flex justify-center mt-2 w-full">
            <div className="bg-gray-500 bg-opacity-50 backdrop-blur-lg border border-gray-400 px-4 py-1 rounded-lg shadow-md transition-transform transform hover:scale-105 w-full text-center h-[50px] flex items-center justify-center">
              <p className="text-white text-xs">🔗 Icons Here</p>
            </div>
          </div> */}

          {/* Footer/Card for Icons */}
          <div className="col-span-6 flex justify-center mt-2 w-full">
            <div className="bg-gray-500 bg-opacity-50 backdrop-blur-lg border border-gray-400 px-4 py-1 rounded-lg shadow-md transition-transform transform hover:scale-105 w-full text-center h-[100px] flex items-center justify-center">
              {/* Add the 6 icon-sized custom images */}
              <div className="flex justify-center gap-8">
                <a href="https://id.atlassian.com/login?application=trello&continue=https%3A%2F%2Ftrello.com%2Fauth%2Fatlassian%2Fcallback%3Fdisplay%3DeyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%253D%253D&display=eyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%3D%3D" target="_blank" rel="noopener noreferrer">
                  <img 
                    src={icon1} 
                    alt="Icon 1" 
                    className="w-20 h-18 rounded-xl shadow-lg cursor-pointer transition-transform transform hover:scale-110 hover:shadow-xl" 
                  />
                </a>
                <a href="https://www.notion.so/onboarding" target="_blank" rel="noopener noreferrer">
                  <img 
                    src={icon2} 
                    alt="Icon 2" 
                    className="w-20 h-18 rounded-xl shadow-lg cursor-pointer transition-transform transform hover:scale-110 hover:shadow-xl" 
                  />
                </a>
                <a href="https://meet.google.com/landing" target="_blank" rel="noopener noreferrer">
                  <img 
                    src={icon3} 
                    alt="Icon 3" 
                    className="w-20 h-18 rounded-xl shadow-lg cursor-pointer transition-transform transform hover:scale-110 hover:shadow-xl" 
                  />
                </a>
                <a href="https://www.figma.com/login" target="_blank" rel="noopener noreferrer">
                  <img 
                    src={icon4} 
                    alt="Icon 4" 
                    className="w-20 h-18 rounded-xl shadow-lg cursor-pointer transition-transform transform hover:scale-110 hover:shadow-xl" 
                  />
                </a>
                <a href="https://workspace.google.com/intl/en-US/products/calendar/" target="_blank" rel="noopener noreferrer">
                  <img 
                    src={icon5} 
                    alt="Icon 5" 
                    className="w-20 h-18 rounded-xl shadow-lg cursor-pointer transition-transform transform hover:scale-110 hover:shadow-xl" 
                  />
                </a>
                <a href="https://accounts.evernote.com/login" target="_blank" rel="noopener noreferrer">
                  <img 
                    src={icon6} 
                    alt="Icon 6" 
                    className="w-20 h-18 rounded-xl shadow-lg cursor-pointer transition-transform transform hover:scale-110 hover:shadow-xl" 
                  />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-md">
          <div className="bg-gray-800 p-6 rounded-lg w-full max-w-lg">
            <h2 className="text-white text-xl mb-4">Add Project</h2>

            <label className="text-white block mb-2">Project Name</label>
            <input type="text" className="w-full p-2 mb-4 rounded bg-gray-700 text-white border border-gray-500" />

            <label className="text-white block mb-2">Status</label>
            <select className="w-full p-2 mb-4 rounded bg-gray-700 text-white border border-gray-500">
              <option>Ongoing</option>
              <option>Completed</option>
              <option>On Hold</option>
            </select>

            <label className="text-white block mb-2">Client Name</label>
            <input type="text" className="w-full p-2 mb-4 rounded bg-gray-700 text-white border border-gray-500" />

            <label className="text-white block mb-2">Budget ($)</label>
            <input type="number" className="w-full p-2 mb-4 rounded bg-gray-700 text-white border border-gray-500" />

            <label className="text-white block mb-2">Team Members</label>
            <input type="text" className="w-full p-2 mb-4 rounded bg-gray-700 text-white border border-gray-500" placeholder="Enter names separated by commas" />

            <div className="flex justify-between">
              <button type="submit" className="bg-green-500 px-4 py-2 rounded text-white hover:bg-green-600">Submit</button>
              <button type="button" className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600" onClick={() => setShowForm(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

{showwForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-md">
          <div className="bg-gray-800 p-6 rounded-lg w-full max-w-lg">
            <h2 className="text-white text-xl mb-4">Add Task</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" name="title" value={newTask.title} onChange={handleChange} placeholder="Task Title" className="w-full p-2 mb-2 rounded bg-gray-700 text-white border border-gray-500" />
              <select name="urgency" value={newTask.urgency} onChange={handleChange} className="w-full p-2 mb-2 rounded bg-gray-700 text-white border border-gray-500">
                <option value="urgent">Urgent</option>
                <option value="medium">Medium</option>
                <option value="chill">Chill</option>
              </select>
              <input type="text" name="deadline" value={newTask.deadline} onChange={handleChange} placeholder="Deadline" className="w-full p-2 mb-2 rounded bg-gray-700 text-white border border-gray-500" />
              <div className="flex justify-between mt-4">
                <button type="submit" className="bg-green-500 px-4 py-2 rounded text-white hover:bg-green-600">Submit</button>
                <button type="button" className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600" onClick={() => setShowwForm(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>

      )}
       {/* {shhowForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-md">
          <div className="bg-gray-800 p-6 rounded-lg w-full max-w-lg">
            <h2 className="text-white text-xl mb-4">Add Task</h2>

            <label className="text-white block mb-2">Task Name</label>
            <input 
              type="text" 
              name="taskName"
              value={taskDetails.taskName} 
              onChange={handleInputChange}
              className="w-full p-2 mb-4 rounded bg-gray-700 text-white border border-gray-500" 
            />

            <label className="text-white block mb-2">Hourly Rate ($)</label>
            <input 
              type="number" 
              name="hourlyRate"
              value={taskDetails.hourlyRate} 
              onChange={handleInputChange}
              className="w-full p-2 mb-4 rounded bg-gray-700 text-white border border-gray-500" 
            />

            <label className="text-white block mb-2">Hours Worked</label>
            <input 
              type="number" 
              name="hoursWorked"
              value={taskDetails.hoursWorked} 
              onChange={handleInputChange}
              className="w-full p-2 mb-4 rounded bg-gray-700 text-white border border-gray-500" 
            />

            <div className="flex justify-between">
              <button 
                type="submit" 
                className="bg-green-500 px-4 py-2 rounded text-white hover:bg-green-600" 
                onClick={handleSubmitTask}
              >
                Submit
              </button>
              <button 
                type="button" 
                className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600" 
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )} */}

>>>>>>> cd4a5ae (last commit)
    </>
  );
};

export default Portfolio;
<<<<<<< HEAD
=======

>>>>>>> cd4a5ae (last commit)
