import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Tasks() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/tasks");
      const data = await res.json();

      console.log("API RESPONSE:", data);

      setTasks(data.tasks || []);
    } catch (error) {
      console.log(error);
      setTasks([]);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const deleteTask = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/tasks/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        alert("Task deleted");
        fetchTasks();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Tasks</h1>
          <p className="text-gray-500">Manage your tasks here</p>
        </div>

        <button
          onClick={() => navigate("/createtask")}
          className="bg-black text-white px-5 py-2 rounded-lg"
        >
          Create Task
        </button>
      </div>

      {/* TASKS */}
      <div className="space-y-5">
        {tasks.map((task) => (
          <div key={task._id} className="bg-white p-5 rounded-xl shadow">
            {/* TITLE */}
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold">{task.title}</h2>

              <span className="text-sm px-3 py-1 rounded bg-gray-200">
                {task.status}
              </span>
            </div>

            {/* DESCRIPTION */}
            <p className="text-gray-500 mt-2">{task.description}</p>

            {/* ⭐ ADD THIS (IMPORTANT) */}
            <div className="mt-3 text-sm text-blue-600">
              👤 Assigned To: {task.assignedName}
            </div>

            <div className="text-sm text-gray-500">📧 {task.assignedTo}</div>

            {/* FOOTER */}
            <div className="flex justify-between mt-4">
              <div className="text-sm">
                📅{" "}
                {task.dueDate
                  ? new Date(task.dueDate).toDateString()
                  : "No Date"}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => navigate(`/edit-task/${task._id}`)}
                  className="bg-blue-100 text-blue-600 px-3 py-1 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteTask(task._id)}
                  className="bg-red-100 text-red-600 px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tasks;
