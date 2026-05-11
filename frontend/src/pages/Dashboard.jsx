function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-indigo-700 text-white p-6 hidden md:block">
        <h1 className="text-3xl font-bold mb-10">TeamFlow</h1>

        <ul className="space-y-4">
          <li className="bg-indigo-800 p-3 rounded-lg cursor-pointer hover:bg-indigo-900 transition">
            Dashboard
          </li>

          <li className="p-3 rounded-lg cursor-pointer hover:bg-indigo-800 transition">
            Projects
          </li>

          <li className="p-3 rounded-lg cursor-pointer hover:bg-indigo-800 transition">
            Tasks
          </li>

          <li className="p-3 rounded-lg cursor-pointer hover:bg-indigo-800 transition">
            Team
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Top Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-800">Dashboard</h1>

            <p className="text-slate-500 mt-1">Good Evening, Vishakha 👋</p>
          </div>

          <button className="bg-indigo-600 hover:bg-indigo-700 transition text-white px-5 py-2 rounded-xl shadow">
            Logout
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-pink-100 p-6 rounded-2xl shadow hover:scale-105 transition">
            <h2 className="text-pink-700 mb-2 font-medium">Total Tasks</h2>

            <p className="text-4xl font-bold text-pink-900">24</p>
          </div>

          <div className="bg-emerald-100 p-6 rounded-2xl shadow hover:scale-105 transition">
            <h2 className="text-emerald-700 mb-2 font-medium">Completed</h2>

            <p className="text-4xl font-bold text-emerald-900">12</p>
          </div>

          <div className="bg-amber-100 p-6 rounded-2xl shadow hover:scale-105 transition">
            <h2 className="text-amber-700 mb-2 font-medium">Pending</h2>

            <p className="text-4xl font-bold text-amber-900">8</p>
          </div>

          <div className="bg-rose-100 p-6 rounded-2xl shadow hover:scale-105 transition">
            <h2 className="text-rose-700 mb-2 font-medium">Overdue</h2>

            <p className="text-4xl font-bold text-rose-900">4</p>
          </div>
        </div>

        {/* Recent Tasks */}
        <div className="bg-white mt-10 p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold mb-6 text-slate-800">
            Recent Tasks
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between items-center border-b pb-3">
              <div>
                <h3 className="font-semibold text-slate-800">
                  Design Landing Page
                </h3>

                <p className="text-sm text-slate-500">Due Tomorrow</p>
              </div>

              <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm">
                In Progress
              </span>
            </div>

            <div className="flex justify-between items-center border-b pb-3">
              <div>
                <h3 className="font-semibold text-slate-800">
                  API Integration
                </h3>

                <p className="text-sm text-slate-500">Due in 3 Days</p>
              </div>

              <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm">
                Completed
              </span>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-slate-800">Fix Login Bugs</h3>

                <p className="text-sm text-slate-500">Overdue</p>
              </div>

              <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm">
                Pending
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
