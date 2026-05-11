// import { useEffect, useState } from "react";

// function MemberDashboard() {
//   const [tasks, setTasks] = useState([]);

//   const user = JSON.parse(localStorage.getItem("user"));

//   /* =========================
//      FETCH MEMBER TASKS
//   ========================= */
//   const fetchTasks = async () => {
//     try {
//       if (!user?.email) {
//         console.log("No user found in localStorage");
//         return;
//       }

//       const res = await fetch(
//         `https://team-task-manager-zyd5.onrender.com/api/tasks?email=${user.email}`
//       );

//       const data = await res.json();

//       console.log("TASK DATA:", data);

//       if (data.success) {
//         setTasks(data.tasks);
//       }
//     } catch (error) {
//       console.log("FETCH ERROR:", error);
//     }
//   };

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   /* =========================
//      UPDATE TASK STATUS
//   ========================= */
//   const updateStatus = async (id, status) => {
//     try {
//       const res = await fetch(`https://team-task-manager-zyd5.onrender.com/api/tasks/${id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ status }),
//       });

//       const data = await res.json();

//       if (data.success) {
//         fetchTasks();
//       } else {
//         alert(data.message);
//       }
//     } catch (error) {
//       console.log("UPDATE ERROR:", error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       {/* HEADER */}
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold text-gray-800">Member Dashboard</h1>

//         <p className="text-gray-500 mt-2">View and manage assigned tasks</p>
//       </div>

//       {/* STATS */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
//         <div className="bg-white p-6 rounded-xl shadow">
//           <h2 className="text-gray-500 text-lg">Total Tasks</h2>
//           <p className="text-4xl font-bold mt-3">{tasks.length}</p>
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow">
//           <h2 className="text-gray-500 text-lg">Completed</h2>
//           <p className="text-4xl font-bold mt-3 text-green-600">
//             {tasks.filter((t) => t.status === "Completed").length}
//           </p>
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow">
//           <h2 className="text-gray-500 text-lg">Pending</h2>
//           <p className="text-4xl font-bold mt-3 text-red-600">
//             {tasks.filter((t) => t.status !== "Completed").length}
//           </p>
//         </div>
//       </div>

//       {/* TASK LIST */}
//       <div className="space-y-5">
//         {tasks.length === 0 ? (
//           <div className="bg-white p-6 rounded-xl shadow text-center">
//             <p className="text-gray-500">No tasks assigned</p>
//           </div>
//         ) : (
//           tasks.map((task) => (
//             <div key={task._id} className="bg-white p-5 rounded-xl shadow">
//               <div className="flex flex-col md:flex-row md:justify-between gap-4">
//                 {/* LEFT */}
//                 <div>
//                   <h2 className="text-xl font-semibold">{task.title}</h2>

//                   <p className="text-gray-500 mt-1">{task.description}</p>

//                   {/* ASSIGNED INFO */}
//                   <p className="text-sm text-gray-400 mt-2">
//                     Assigned to: {task.assignedName}
//                   </p>

//                   <div className="flex gap-3 mt-3 flex-wrap">
//                     <span className="bg-gray-100 px-3 py-1 rounded">
//                       {task.priority}
//                     </span>

//                     <span className="bg-gray-100 px-3 py-1 rounded">
//                       {task.dueDate
//                         ? new Date(task.dueDate).toDateString()
//                         : "No date"}
//                     </span>
//                   </div>
//                 </div>

//                 {/* STATUS */}
//                 <div>
//                   <select
//                     value={task.status}
//                     onChange={(e) => updateStatus(task._id, e.target.value)}
//                     className="border p-2 rounded"
//                   >
//                     <option value="Pending">Pending</option>
//                     <option value="In Progress">In Progress</option>
//                     <option value="Completed">Completed</option>
//                   </select>
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// export default MemberDashboard;
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MemberDashboard() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  /* FETCH TASKS */
  const fetchTasks = async () => {
    try {
      if (!user?.email) return;

      const res = await fetch(
        `https://team-task-manager-zyd5.onrender.com/api/tasks?email=${user.email}`
      );

      const data = await res.json();

      if (data.success) {
        setTasks(data.tasks);
      }
    } catch (error) {
      console.log("FETCH ERROR:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  /* UPDATE STATUS */
  const updateStatus = async (id, status) => {
    try {
      const res = await fetch(
        `https://team-task-manager-zyd5.onrender.com/api/tasks/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status }),
        }
      );

      const data = await res.json();

      if (data.success) {
        fetchTasks();
      }
    } catch (error) {
      console.log(error);
    }
  };

  /* =========================
     LOGOUT FUNCTION
  ========================= */
  const handleLogout = () => {
    localStorage.removeItem("user"); // clear user
    navigate("/"); // redirect to login
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Member Dashboard</h1>

          <p className="text-gray-500 mt-2">View and manage assigned tasks</p>
        </div>

        {/* LOGOUT BUTTON */}
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2>Total Tasks</h2>
          <p className="text-3xl font-bold">{tasks.length}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2>Completed</h2>
          <p className="text-3xl font-bold text-green-600">
            {tasks.filter((t) => t.status === "Completed").length}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2>Pending</h2>
          <p className="text-3xl font-bold text-red-600">
            {tasks.filter((t) => t.status !== "Completed").length}
          </p>
        </div>
      </div>

      {/* TASK LIST */}
      <div className="space-y-5">
        {tasks.length === 0 ? (
          <div className="bg-white p-6 rounded-xl shadow text-center">
            No tasks assigned
          </div>
        ) : (
          tasks.map((task) => (
            <div key={task._id} className="bg-white p-5 rounded-xl shadow">
              <h2 className="text-xl font-semibold">{task.title}</h2>

              <p className="text-gray-500">{task.description}</p>

              <p className="text-sm text-gray-400 mt-2">
                Assigned to: {task.assignedName}
              </p>

              <div className="mt-3 flex gap-3">
                <span className="bg-gray-100 px-3 py-1 rounded">
                  {task.priority}
                </span>

                <span className="bg-gray-100 px-3 py-1 rounded">
                  {task.dueDate
                    ? new Date(task.dueDate).toDateString()
                    : "No date"}
                </span>
              </div>

              {/* STATUS */}
              <div className="mt-4">
                <select
                  value={task.status}
                  onChange={(e) => updateStatus(task._id, e.target.value)}
                  className="border p-2 rounded"
                >
                  <option>Pending</option>
                  <option>In Progress</option>
                  <option>Completed</option>
                </select>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MemberDashboard;
