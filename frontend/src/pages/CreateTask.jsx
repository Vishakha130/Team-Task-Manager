import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateTask() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "Medium",
    dueDate: "",
    assignedTo: "",
    assignedName: "",
  });

  /* =========================
     HANDLE INPUT
  ========================= */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /* =========================
     CREATE TASK
  ========================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://team-task-manager-zyd5.onrender.com/api/tasks/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      console.log("CREATE TASK:", data);

      if (res.ok) {
        alert("Task created successfully 🚀");

        navigate("/task");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log("CREATE TASK ERROR:", error);

      alert("Error creating task");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow w-full max-w-md space-y-4"
      >
        <h1 className="text-2xl font-bold">Create Task</h1>

        {/* TITLE */}
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />

        {/* DESCRIPTION */}
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        {/* ASSIGNED MEMBER NAME */}
        <input
          type="text"
          name="assignedName"
          placeholder="Assign Member Name"
          value={formData.assignedName}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />

        {/* ASSIGNED MEMBER EMAIL */}
        <input
          type="email"
          name="assignedTo"
          placeholder="Assign Member Email"
          value={formData.assignedTo}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />

        {/* PRIORITY */}
        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        >
          <option value="Low">Low</option>

          <option value="Medium">Medium</option>

          <option value="High">High</option>
        </select>

        {/* DUE DATE */}
        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded hover:bg-gray-800"
        >
          Create Task
        </button>
      </form>
    </div>
  );
}

export default CreateTask;
