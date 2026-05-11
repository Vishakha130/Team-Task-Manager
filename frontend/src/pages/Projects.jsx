// // // function Projects() {
// // //   return (
// // //     <div className="min-h-screen bg-gray-100 p-6">
// // //       {/* Heading */}
// // //       <div className="flex justify-between items-center mb-8">
// // //         <div>
// // //           <h1 className="text-3xl font-bold text-gray-800">Projects</h1>

// // //           <p className="text-gray-500 mt-1">Manage your team projects</p>
// // //         </div>

// // //         <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition">
// // //           Create Project
// // //         </button>
// // //       </div>

// // //       {/* Project Cards */}
// // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // //         {/* Project Card */}
// // //         <div className="bg-white p-6 rounded-2xl shadow">
// // //           <div className="flex justify-between items-center mb-4">
// // //             <h2 className="text-2xl font-semibold">Task Manager App</h2>

// // //             <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
// // //               Active
// // //             </span>
// // //           </div>

// // //           <p className="text-gray-500 mb-5">
// // //             Full-stack task management application using React and Node.js.
// // //           </p>

// // //           {/* Team */}
// // //           <div className="mb-4">
// // //             <p className="text-sm text-gray-500 mb-2">Team Members</p>

// // //             <div className="flex gap-2">
// // //               <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center font-semibold">
// // //                 V
// // //               </div>

// // //               <div className="w-10 h-10 bg-pink-200 rounded-full flex items-center justify-center font-semibold">
// // //                 A
// // //               </div>

// // //               <div className="w-10 h-10 bg-yellow-200 rounded-full flex items-center justify-center font-semibold">
// // //                 R
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Progress */}
// // //           <div className="mb-4">
// // //             <div className="flex justify-between text-sm mb-1">
// // //               <span>Progress</span>
// // //               <span>70%</span>
// // //             </div>

// // //             <div className="w-full bg-gray-200 rounded-full h-3">
// // //               <div className="bg-black h-3 rounded-full w-[70%]"></div>
// // //             </div>
// // //           </div>

// // //           {/* Footer */}
// // //           <div className="flex justify-between items-center mt-5">
// // //             <p className="text-sm text-gray-500">12 Tasks</p>

// // //             <div className="flex gap-2">
// // //               <button className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg hover:bg-blue-200 transition">
// // //                 Edit
// // //               </button>

// // //               <button className="bg-red-100 text-red-600 px-3 py-1 rounded-lg hover:bg-red-200 transition">
// // //                 Delete
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Project Card */}
// // //         <div className="bg-white p-6 rounded-2xl shadow">
// // //           <div className="flex justify-between items-center mb-4">
// // //             <h2 className="text-2xl font-semibold">Ecommerce Dashboard</h2>

// // //             <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
// // //               In Progress
// // //             </span>
// // //           </div>

// // //           <p className="text-gray-500 mb-5">
// // //             Admin dashboard for managing ecommerce products and orders.
// // //           </p>

// // //           {/* Team */}
// // //           <div className="mb-4">
// // //             <p className="text-sm text-gray-500 mb-2">Team Members</p>

// // //             <div className="flex gap-2">
// // //               <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center font-semibold">
// // //                 S
// // //               </div>

// // //               <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center font-semibold">
// // //                 P
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Progress */}
// // //           <div className="mb-4">
// // //             <div className="flex justify-between text-sm mb-1">
// // //               <span>Progress</span>
// // //               <span>45%</span>
// // //             </div>

// // //             <div className="w-full bg-gray-200 rounded-full h-3">
// // //               <div className="bg-yellow-500 h-3 rounded-full w-[45%]"></div>
// // //             </div>
// // //           </div>

// // //           {/* Footer */}
// // //           <div className="flex justify-between items-center mt-5">
// // //             <p className="text-sm text-gray-500">8 Tasks</p>

// // //             <div className="flex gap-2">
// // //               <button className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg hover:bg-blue-200 transition">
// // //                 Edit
// // //               </button>

// // //               <button className="bg-red-100 text-red-600 px-3 py-1 rounded-lg hover:bg-red-200 transition">
// // //                 Delete
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Projects;
// // import { useEffect, useState } from "react";

// // function Projects() {
// //   const [projects, setProjects] = useState([]);
// //   const [title, setTitle] = useState("");

// //   /* =========================
// //      SAFE FETCH PROJECTS
// //   ========================= */
// //   const fetchProjects = async () => {
// //     try {
// //       const res = await fetch("http://localhost:5000/api/projects");
// //       const data = await res.json();

// //       setProjects(data.projects || []);
// //     } catch (error) {
// //       console.log("PROJECT FETCH ERROR:", error);
// //       setProjects([]); // ✅ SAFE FALLBACK (no crash)
// //     }
// //   };

// //   useEffect(() => {
// //     fetchProjects();
// //   }, []);

// //   /* =========================
// //      CREATE PROJECT
// //   ========================= */
// //   const createProject = async () => {
// //     console.log("CREATE CLICKED"); // 🔥 ADD THIS
// //     if (!title.trim()) return;

// //     try {
// //       const res = await fetch("http://localhost:5000/api/projects/create", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({
// //           title,
// //         }),
// //       });

// //       const data = await res.json();

// //       if (data.success) {
// //         setTitle("");
// //         fetchProjects(); // refresh list
// //       }
// //     } catch (error) {
// //       console.log("CREATE ERROR:", error);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-100 p-6">
// //       {/* HEADER */}
// //       <div className="flex justify-between items-center mb-8">
// //         <div>
// //           <h1 className="text-3xl font-bold text-gray-800">Projects</h1>
// //           <p className="text-gray-500 mt-1">Manage your team projects</p>
// //         </div>

// //         {/* CREATE PROJECT INPUT */}
// //         <div className="flex gap-2">
// //           <input
// //             value={title}
// //             onChange={(e) => setTitle(e.target.value)}
// //             placeholder="Project name"
// //             className="p-2 border rounded-lg"
// //           />

// //           <button
// //             onClick={createProject}
// //             className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800"
// //           >
// //             Create Project
// //           </button>
// //         </div>
// //       </div>

// //       {/* PROJECT LIST */}
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //         {projects.length === 0 ? (
// //           <p className="text-gray-500">No projects found</p>
// //         ) : (
// //           projects.map((p) => (
// //             <div key={p._id} className="bg-white p-6 rounded-2xl shadow">
// //               <div className="flex justify-between items-center mb-4">
// //                 <h2 className="text-2xl font-semibold">{p.title}</h2>

// //                 <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
// //                   Active
// //                 </span>
// //               </div>

// //               <p className="text-gray-500 mb-5">
// //                 {p.description || "No description"}
// //               </p>

// //               {/* TEAM (STATIC FOR NOW) */}
// //               <div className="mb-4">
// //                 <p className="text-sm text-gray-500 mb-2">Team Members</p>
// //                 <div className="text-gray-400 text-sm">
// //                   No team assigned yet
// //                 </div>
// //               </div>

// //               {/* FOOTER */}
// //               <div className="flex justify-between mt-5">
// //                 <p className="text-sm text-gray-500">0 Tasks</p>

// //                 <div className="flex gap-2">
// //                   <button className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg">
// //                     Edit
// //                   </button>

// //                   <button className="bg-red-100 text-red-600 px-3 py-1 rounded-lg">
// //                     Delete
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           ))
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Projects;
// import { useEffect, useState } from "react";

// function Projects() {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     const loadProjects = () => {
//       const data = JSON.parse(localStorage.getItem("projects")) || [];
//       console.log("Loaded projects:", data);
//       setProjects(data);
//     };

//     loadProjects();
//   }, []);

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Projects</h1>

//       {projects.length === 0 ? (
//         <p>No projects found</p>
//       ) : (
//         projects.map((p) => (
//           <div key={p.id} className="border p-4 mb-2">
//             <h2 className="font-bold">{p.title}</h2>
//             <p>{p.description}</p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default Projects;
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Projects() {
  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  /* LOAD PROJECTS */
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("projects")) || [];
    setProjects(data);
  }, []);

  /* CREATE PROJECT */
  const handleCreate = () => {
    if (!title.trim()) return;

    const newProject = {
      id: Date.now(),
      title,
      description,
    };

    const updated = [newProject, ...projects];

    setProjects(updated);
    localStorage.setItem("projects", JSON.stringify(updated));

    setTitle("");
    setDescription("");
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        {/* LEFT SIDE */}
        <div>
          <h1 className="text-3xl font-bold">Projects</h1>
          <p className="text-gray-500">Manage your team projects</p>
        </div>

        {/* RIGHT SIDE BUTTONS */}
        <div className="flex gap-3">
          {/* BACK BUTTON */}
          <button
            onClick={() => navigate("/admin-dashboard")} // 🔥 CHANGE ROUTE IF NEEDED
            className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400"
          >
            ← Back
          </button>

          {/* CREATE BUTTON */}
          <button
            onClick={() => setShowForm(true)}
            className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800"
          >
            + Create Project
          </button>
        </div>
      </div>

      {/* FORM */}
      {showForm && (
        <div className="bg-white p-6 rounded-xl shadow mb-6">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Project Title"
            className="w-full p-3 border rounded mb-3"
          />

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Project Description"
            className="w-full p-3 border rounded mb-3"
          />

          <div className="flex gap-3">
            <button
              onClick={handleCreate}
              className="bg-black text-white px-4 py-2 rounded"
            >
              Save
            </button>

            <button
              onClick={() => setShowForm(false)}
              className="bg-gray-300 px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* PROJECT LIST */}
      {projects.length === 0 ? (
        <p className="text-gray-500">No projects found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.id} className="bg-white p-5 rounded-xl shadow">
              <h2 className="text-xl font-bold">{p.title}</h2>
              <p className="text-gray-500 mt-2">{p.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Projects;
