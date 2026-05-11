import { useNavigate } from "react-router-dom";

function Report() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Admin Report</h1>
          <p className="text-gray-500">System overview (Dummy Data)</p>
        </div>

        {/* BACK BUTTON */}
        <button
          onClick={() => navigate("/admin")}
          className="bg-gray-900 text-white px-5 py-2 rounded-lg hover:bg-black"
        >
          ← Back
        </button>
      </div>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="text-gray-500">Total Users</h2>
          <p className="text-2xl font-bold">12</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="text-gray-500">Total Tasks</h2>
          <p className="text-2xl font-bold">45</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="text-gray-500">Completed</h2>
          <p className="text-2xl font-bold text-green-600">20</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="text-gray-500">Pending</h2>
          <p className="text-2xl font-bold text-red-500">25</p>
        </div>
      </div>

      {/* CHART PLACEHOLDER */}
      <div className="bg-white p-6 rounded-xl shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">Task Progress</h2>

        <div className="w-full bg-gray-200 h-6 rounded-full">
          <div className="bg-green-500 h-6 rounded-full w-[45%]"></div>
        </div>

        <p className="text-sm text-gray-500 mt-2">
          45% completion rate (dummy)
        </p>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        {/* HEADER */}
        <div className="grid grid-cols-4 bg-gray-200 p-4 font-semibold">
          <div>User</div>
          <div>Total Tasks</div>
          <div>Completed</div>
          <div>Pending</div>
        </div>

        {/* ROWS (DUMMY DATA) */}
        <div className="grid grid-cols-4 p-4 border-b">
          <div>Rahul Sharma</div>
          <div>10</div>
          <div className="text-green-600">6</div>
          <div className="text-red-500">4</div>
        </div>

        <div className="grid grid-cols-4 p-4 border-b">
          <div>Priya Singh</div>
          <div>12</div>
          <div className="text-green-600">8</div>
          <div className="text-red-500">4</div>
        </div>

        <div className="grid grid-cols-4 p-4 border-b">
          <div>Aman Verma</div>
          <div>8</div>
          <div className="text-green-600">5</div>
          <div className="text-red-500">3</div>
        </div>
      </div>
    </div>
  );
}

export default Report;
