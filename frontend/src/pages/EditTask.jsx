import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditTask() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "Medium",
    dueDate: "",
  });

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await fetch(
          `https://team-task-manager-zyd5.onrender.com/api/tasks/${id}`
        );
        const data = await res.json();

        console.log("TASK RESPONSE:", data);

        // ✅ handle multiple backend formats safely
        const task = data.task || data.data || data;

        if (task) {
          setFormData({
            title: task.title || "",
            description: task.description || "",
            priority: task.priority || "Medium",
            dueDate: task.dueDate ? task.dueDate.split("T")[0] : "",
          });
        }
      } catch (error) {
        console.log("FETCH ERROR:", error);
      }
    };

    fetchTask();
  }, [id]);

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
     UPDATE TASK
  ========================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `https://team-task-manager-zyd5.onrender.com/api/tasks/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (res.ok || data.success) {
        alert("Task updated successfully 🚀");
        navigate("/task"); // redirect back
      } else {
        alert(data.message || "Update failed");
      }
    } catch (error) {
      console.log("UPDATE ERROR:", error);
      alert("Error updating task");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow w-full max-w-md space-y-4"
      >
        <h1 className="text-2xl font-bold">Edit Task</h1>

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
          Update Task
        </button>

        {/* BACK BUTTON */}
        <button
          type="button"
          onClick={() => navigate("/task")}
          className="w-full bg-gray-300 text-black py-2 rounded hover:bg-gray-400"
        >
          Back
        </button>
      </form>
    </div>
  );
}

export default EditTask;
