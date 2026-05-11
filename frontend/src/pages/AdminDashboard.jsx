import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);

  /* =========================
     FETCH ALL TASKS
  ========================= */
  const fetchTasks = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/tasks");

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

  return (
    <div className="min-h-screen bg-slate-100 flex">
      {/* SIDEBAR */}
      <div className="w-64 bg-indigo-700 text-white p-6 hidden md:block">
        <h1 className="text-3xl font-bold mb-10">Team Task Manager</h1>

        <ul className="space-y-4">
          <li className="bg-indigo-800 p-3 rounded-lg cursor-pointer hover:bg-indigo-900 transition">
            Dashboard
          </li>

          <li
            onClick={() => navigate("/task")}
            className="p-3 rounded-lg cursor-pointer hover:bg-indigo-800 transition"
          >
            Manage Tasks
          </li>

          <li
            onClick={() => navigate("/team")}
            className="p-3 rounded-lg cursor-pointer hover:bg-indigo-800 transition"
          >
            Team Members
          </li>

          <li
            onClick={() => navigate("/projects")}
            className="p-3 rounded-lg cursor-pointer hover:bg-indigo-800 transition"
          >
            Projects
          </li>

          <li
            onClick={() => navigate("/report")}
            className="p-3 rounded-lg cursor-pointer hover:bg-indigo-800 transition"
          >
            Reports
          </li>
        </ul>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-6">
        {/* TOP SECTION */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-800">Dashboard</h1>

            <p className="text-slate-500 mt-1">Welcome Admin 👋</p>
          </div>

          <button
            onClick={() => {
              localStorage.clear();
              navigate("/");
            }}
            className="bg-indigo-600 hover:bg-indigo-700 transition text-white px-5 py-2 rounded-xl shadow"
          >
            Logout
          </button>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* TOTAL */}
          <div className="bg-pink-100 p-6 rounded-2xl shadow">
            <h2 className="text-pink-700 mb-2 font-medium">Total Tasks</h2>

            <p className="text-4xl font-bold text-pink-900">{tasks.length}</p>
          </div>

          {/* COMPLETED */}
          <div className="bg-emerald-100 p-6 rounded-2xl shadow">
            <h2 className="text-emerald-700 mb-2 font-medium">Completed</h2>

            <p className="text-4xl font-bold text-emerald-900">
              {tasks.filter((task) => task.status === "Completed").length}
            </p>
          </div>

          {/* IN PROGRESS */}
          <div className="bg-amber-100 p-6 rounded-2xl shadow">
            <h2 className="text-amber-700 mb-2 font-medium">In Progress</h2>

            <p className="text-4xl font-bold text-amber-900">
              {tasks.filter((task) => task.status === "In Progress").length}
            </p>
          </div>

          {/* PENDING */}
          <div className="bg-rose-100 p-6 rounded-2xl shadow">
            <h2 className="text-rose-700 mb-2 font-medium">Pending</h2>

            <p className="text-4xl font-bold text-rose-900">
              {tasks.filter((task) => task.status === "Pending").length}
            </p>
          </div>
        </div>

        {/* RECENT TASKS */}
        <div className="bg-white mt-10 p-6 rounded-2xl shadow">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-slate-800">Recent Tasks</h2>

            <button
              onClick={() => navigate("/createtask")}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
            >
              Create Task
            </button>
          </div>

          {tasks.length === 0 ? (
            <p className="text-gray-500">No tasks found</p>
          ) : (
            <div className="space-y-4">
              {tasks.slice(0, 5).map((task) => (
                <div
                  key={task._id}
                  className="flex justify-between items-center border-b pb-3"
                >
                  <div>
                    <h3 className="font-semibold text-slate-800">
                      {task.title}
                    </h3>

                    <p className="text-sm text-slate-500">
                      Assigned To: {task.assignedTo || "No Member"}
                    </p>
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      task.status === "Completed"
                        ? "bg-emerald-100 text-emerald-700"
                        : task.status === "In Progress"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-rose-100 text-rose-700"
                    }`}
                  >
                    {task.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
