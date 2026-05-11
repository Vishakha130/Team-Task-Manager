// // import { useState } from "react";

// // function CreateProject() {
// //   const [title, setTitle] = useState("");
// //   const [description, setDescription] = useState("");
// //   const [projects, setProjects] = useState([]);

// //   const handleCreate = () => {
// //     if (!title.trim()) return;

// //     const newProject = {
// //       id: Date.now(),
// //       title,
// //       description,
// //     };

// //     setProjects([newProject, ...projects]);

// //     setTitle("");
// //     setDescription("");
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-100 p-6">
// //       {/* HEADER */}
// //       <h1 className="text-3xl font-bold mb-6">Create Project</h1>

// //       {/* FORM */}
// //       <div className="bg-white p-6 rounded-xl shadow mb-8">
// //         <input
// //           type="text"
// //           placeholder="Project Title"
// //           value={title}
// //           onChange={(e) => setTitle(e.target.value)}
// //           className="w-full p-3 border rounded mb-4"
// //         />

// //         <textarea
// //           placeholder="Project Description"
// //           value={description}
// //           onChange={(e) => setDescription(e.target.value)}
// //           className="w-full p-3 border rounded mb-4"
// //         />

// //         <button
// //           onClick={handleCreate}
// //           className="bg-black text-white px-5 py-2 rounded-lg"
// //         >
// //           Create Project
// //         </button>
// //       </div>

// //       {/* PROJECT LIST */}
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //         {projects.length === 0 ? (
// //           <p className="text-gray-500">No projects yet</p>
// //         ) : (
// //           projects.map((p) => (
// //             <div key={p.id} className="bg-white p-6 rounded-xl shadow">
// //               <h2 className="text-xl font-semibold">{p.title}</h2>
// //               <p className="text-gray-500 mt-2">
// //                 {p.description || "No description"}
// //               </p>
// //             </div>
// //           ))
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default CreateProject;
// import { useState, useEffect } from "react";

// function CreateProject() {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");

//   const [projects, setProjects] = useState(() => {
//     return JSON.parse(localStorage.getItem("projects")) || [];
//   });

//   const handleCreate = () => {
//     if (!title.trim()) return;

//     const newProject = {
//       id: Date.now(),
//       title,
//       description,
//     };

//     const updatedProjects = [newProject, ...projects];

//     setProjects(updatedProjects);

//     // SAVE IN BROWSER STORAGE
//     localStorage.setItem("projects", JSON.stringify(updatedProjects));

//     setTitle("");
//     setDescription("");
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h1 className="text-3xl font-bold mb-6">Create Project</h1>

//       <div className="bg-white p-6 rounded-xl shadow mb-8">
//         <input
//           type="text"
//           placeholder="Project Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="w-full p-3 border rounded mb-4"
//         />

//         <textarea
//           placeholder="Project Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           className="w-full p-3 border rounded mb-4"
//         />

//         <button
//           onClick={handleCreate}
//           className="bg-black text-white px-5 py-2 rounded-lg"
//         >
//           Create Project
//         </button>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {projects.length === 0 ? (
//           <p className="text-gray-500">No projects yet</p>
//         ) : (
//           projects.map((p) => (
//             <div key={p.id} className="bg-white p-6 rounded-xl shadow">
//               <h2 className="text-xl font-semibold">{p.title}</h2>
//               <p className="text-gray-500 mt-2">
//                 {p.description || "No description"}
//               </p>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// export default CreateProject;
import { useState } from "react";

function CreateProject() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCreate = () => {
    if (!title.trim()) return;

    const existing = JSON.parse(localStorage.getItem("projects")) || [];

    const newProject = {
      id: Date.now(),
      title,
      description,
    };

    const updated = [...existing, newProject];

    localStorage.setItem("projects", JSON.stringify(updated));

    setTitle("");
    setDescription("");

    console.log("Project saved:", updated);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Create Project</h1>

      <input
        className="border p-2 w-full mb-3"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="border p-2 w-full mb-3"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={handleCreate} className="bg-black text-white px-4 py-2">
        Create
      </button>
    </div>
  );
}

export default CreateProject;
