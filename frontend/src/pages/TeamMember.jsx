// // // // // import { useEffect, useState } from "react";

// // // // // function TeamMembers() {
// // // // //   const [members, setMembers] = useState([]);
// // // // //   const [tasks, setTasks] = useState([]);

// // // // //   /* =========================
// // // // //      FETCH USERS
// // // // //   ========================= */
// // // // //   const fetchUsers = async () => {
// // // // //     try {
// // // // //       const res = await fetch("https://team-task-manager-zyd5.onrender.com/api/auth/users");
// // // // //       const data = await res.json();

// // // // //       setMembers(data.users || []);
// // // // //     } catch (error) {
// // // // //       console.log("USER FETCH ERROR:", error);
// // // // //     }
// // // // //   };

// // // // //   /* =========================
// // // // //      FETCH TASKS
// // // // //   ========================= */
// // // // //   const fetchTasks = async () => {
// // // // //     try {
// // // // //       const res = await fetch("https://team-task-manager-zyd5.onrender.com/api/tasks");
// // // // //       const data = await res.json();

// // // // //       setTasks(data.tasks || []);
// // // // //     } catch (error) {
// // // // //       console.log("TASK FETCH ERROR:", error);
// // // // //     }
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     fetchUsers();
// // // // //     fetchTasks();
// // // // //   }, []);

// // // // //   /* =========================
// // // // //      TASK STATS PER USER
// // // // //   ========================= */
// // // // //   const getStats = (email) => {
// // // // //     const userTasks = tasks.filter((t) => t.assignedTo === email);

// // // // //     return {
// // // // //       total: userTasks.length,
// // // // //       pending: userTasks.filter((t) => t.status === "Pending").length,
// // // // //       progress: userTasks.filter((t) => t.status === "In Progress").length,
// // // // //       completed: userTasks.filter((t) => t.status === "Completed").length,
// // // // //     };
// // // // //   };

// // // // //   return (
// // // // //     <div className="min-h-screen bg-gray-100 p-6">
// // // // //       {/* HEADER */}
// // // // //       <div className="mb-6">
// // // // //         <h1 className="text-3xl font-bold text-gray-800">Team Members</h1>
// // // // //         <p className="text-gray-500">Manage users and their assigned tasks</p>
// // // // //       </div>

// // // // //       {/* TABLE */}
// // // // //       <div className="bg-white rounded-xl shadow overflow-hidden">
// // // // //         {/* HEADER ROW */}
// // // // //         <div className="grid grid-cols-6 bg-gray-200 p-4 font-semibold text-gray-700">
// // // // //           <div>Name</div>
// // // // //           <div>Email</div>
// // // // //           <div>Role</div>
// // // // //           <div>Total</div>
// // // // //           <div>Pending</div>
// // // // //           <div>Completed</div>
// // // // //         </div>

// // // // //         {/* BODY */}
// // // // //         {members.length === 0 ? (
// // // // //           <div className="p-6 text-gray-500">No team members found</div>
// // // // //         ) : (
// // // // //           members.map((member) => {
// // // // //             const stats = getStats(member.email);

// // // // //             return (
// // // // //               <div
// // // // //                 key={member._id}
// // // // //                 className="grid grid-cols-6 p-4 border-b hover:bg-gray-50"
// // // // //               >
// // // // //                 {/* NAME */}
// // // // //                 <div className="font-medium text-gray-800">{member.name}</div>

// // // // //                 {/* EMAIL */}
// // // // //                 <div className="text-gray-600">{member.email}</div>

// // // // //                 {/* ROLE */}
// // // // //                 <div>
// // // // //                   <span
// // // // //                     className={`px-2 py-1 rounded text-sm ${
// // // // //                       member.role === "admin"
// // // // //                         ? "bg-blue-100 text-blue-700"
// // // // //                         : "bg-gray-100 text-gray-700"
// // // // //                     }`}
// // // // //                   >
// // // // //                     {member.role || "member"}
// // // // //                   </span>
// // // // //                 </div>

// // // // //                 {/* TOTAL */}
// // // // //                 <div className="text-blue-600 font-semibold">{stats.total}</div>

// // // // //                 {/* PENDING */}
// // // // //                 <div className="text-red-500 font-semibold">
// // // // //                   {stats.pending}
// // // // //                 </div>

// // // // //                 {/* COMPLETED */}
// // // // //                 <div className="text-green-600 font-semibold">
// // // // //                   {stats.completed}
// // // // //                 </div>
// // // // //               </div>
// // // // //             );
// // // // //           })
// // // // //         )}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default TeamMembers;
// // // // import { useEffect, useState } from "react";

// // // // function TeamMembers() {
// // // //   const [members, setMembers] = useState([]);
// // // //   const [tasks, setTasks] = useState([]);

// // // //   /* =========================
// // // //      FETCH USERS
// // // //   ========================= */
// // // //   const fetchUsers = async () => {
// // // //     try {
// // // //       const res = await fetch("https://team-task-manager-zyd5.onrender.com/api/auth/users");
// // // //       const data = await res.json();

// // // //       setMembers(data.users || []);
// // // //     } catch (error) {
// // // //       console.log("USER FETCH ERROR:", error);
// // // //     }
// // // //   };

// // // //   /* =========================
// // // //      FETCH TASKS
// // // //   ========================= */
// // // //   const fetchTasks = async () => {
// // // //     try {
// // // //       const res = await fetch("https://team-task-manager-zyd5.onrender.com/api/tasks");
// // // //       const data = await res.json();

// // // //       setTasks(data.tasks || []);
// // // //     } catch (error) {
// // // //       console.log("TASK FETCH ERROR:", error);
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     fetchUsers();
// // // //     fetchTasks();
// // // //   }, []);

// // // //   /* =========================
// // // //      TASK STATS PER USER (FIXED)
// // // //   ========================= */
// // // //   const getStats = (email) => {
// // // //     const cleanEmail = email?.toLowerCase().trim();

// // // //     const userTasks = tasks.filter(
// // // //       (t) => t.assignedTo?.toLowerCase().trim() === cleanEmail
// // // //     );

// // // //     return {
// // // //       total: userTasks.length,
// // // //       pending: userTasks.filter((t) => t.status === "Pending").length,
// // // //       progress: userTasks.filter((t) => t.status === "In Progress").length,
// // // //       completed: userTasks.filter((t) => t.status === "Completed").length,
// // // //     };
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen bg-gray-100 p-6">
// // // //       {/* HEADER */}
// // // //       <div className="mb-6">
// // // //         <h1 className="text-3xl font-bold text-gray-800">Team Members</h1>
// // // //         <p className="text-gray-500">Manage users and their assigned tasks</p>
// // // //       </div>

// // // //       {/* TABLE */}
// // // //       <div className="bg-white rounded-xl shadow overflow-hidden">
// // // //         {/* HEADER ROW */}
// // // //         <div className="grid grid-cols-6 bg-gray-200 p-4 font-semibold text-gray-700">
// // // //           <div>Name</div>
// // // //           <div>Email</div>
// // // //           <div>Role</div>
// // // //           <div>Total</div>
// // // //           <div>Pending</div>
// // // //           <div>Completed</div>
// // // //         </div>

// // // //         {/* BODY */}
// // // //         {members.length === 0 ? (
// // // //           <div className="p-6 text-gray-500">No team members found</div>
// // // //         ) : (
// // // //           members.map((member) => {
// // // //             const stats = getStats(member.email);

// // // //             return (
// // // //               <div
// // // //                 key={member._id}
// // // //                 className="grid grid-cols-6 p-4 border-b hover:bg-gray-50"
// // // //               >
// // // //                 {/* NAME */}
// // // //                 <div className="font-medium text-gray-800">{member.name}</div>

// // // //                 {/* EMAIL */}
// // // //                 <div className="text-gray-600">{member.email}</div>

// // // //                 {/* ROLE */}
// // // //                 <div>
// // // //                   <span
// // // //                     className={`px-2 py-1 rounded text-sm ${
// // // //                       member.role === "admin"
// // // //                         ? "bg-blue-100 text-blue-700"
// // // //                         : "bg-gray-100 text-gray-700"
// // // //                     }`}
// // // //                   >
// // // //                     {member.role || "member"}
// // // //                   </span>
// // // //                 </div>

// // // //                 {/* TOTAL */}
// // // //                 <div className="text-blue-600 font-semibold">{stats.total}</div>

// // // //                 {/* PENDING */}
// // // //                 <div className="text-red-500 font-semibold">
// // // //                   {stats.pending}
// // // //                 </div>

// // // //                 {/* COMPLETED */}
// // // //                 <div className="text-green-600 font-semibold">
// // // //                   {stats.completed}
// // // //                 </div>
// // // //               </div>
// // // //             );
// // // //           })
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default TeamMembers;

// // // import { useEffect, useState } from "react";

// // // function TeamMembers() {
// // //   const [members, setMembers] = useState([]);
// // //   const [tasks, setTasks] = useState([]);

// // //   /* =========================
// // //      FETCH USERS
// // //   ========================= */
// // //   const fetchUsers = async () => {
// // //     try {
// // //       const res = await fetch("https://team-task-manager-zyd5.onrender.com/api/auth/users");
// // //       const data = await res.json();

// // //       setMembers(data.users || []);
// // //     } catch (error) {
// // //       console.log("USER FETCH ERROR:", error);
// // //     }
// // //   };

// // //   /* =========================
// // //      FETCH TASKS
// // //   ========================= */
// // //   const fetchTasks = async () => {
// // //     try {
// // //       const res = await fetch("https://team-task-manager-zyd5.onrender.com/api/tasks");
// // //       const data = await res.json();

// // //       setTasks(data.tasks || []);
// // //     } catch (error) {
// // //       console.log("TASK FETCH ERROR:", error);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchUsers();
// // //     fetchTasks();
// // //   }, []);

// // //   /* =========================
// // //      FIXED TASK STATS
// // //   ========================= */
// // //   const getStats = (email) => {
// // //     const cleanEmail = email?.toLowerCase().trim();

// // //     const userTasks = tasks.filter(
// // //       (t) => t.assignedTo?.toLowerCase().trim() === cleanEmail
// // //     );

// // //     return {
// // //       total: userTasks.length,
// // //       pending: userTasks.filter((t) => t.status !== "Completed").length,
// // //       completed: userTasks.filter((t) => t.status === "Completed").length,
// // //     };
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gray-100 p-6">
// // //       {/* HEADER */}
// // //       <div className="mb-6">
// // //         <h1 className="text-3xl font-bold text-gray-800">Team Members</h1>
// // //         <p className="text-gray-500">Manage users and their assigned tasks</p>
// // //       </div>

// // //       {/* TABLE */}
// // //       <div className="bg-white rounded-xl shadow overflow-hidden">
// // //         {/* TABLE HEADER */}
// // //         <div className="grid grid-cols-6 bg-gray-200 p-4 font-semibold text-gray-700">
// // //           <div>Name</div>
// // //           <div>Email</div>
// // //           <div>Role</div>
// // //           <div>Total</div>
// // //           <div>Pending</div>
// // //           <div>Completed</div>
// // //         </div>

// // //         {/* TABLE BODY */}
// // //         {members.length === 0 ? (
// // //           <div className="p-6 text-gray-500">No team members found</div>
// // //         ) : (
// // //           members.map((member) => {
// // //             const stats = getStats(member.email);

// // //             return (
// // //               <div
// // //                 key={member._id}
// // //                 className="grid grid-cols-6 p-4 border-b hover:bg-gray-50"
// // //               >
// // //                 {/* NAME */}
// // //                 <div className="font-medium text-gray-800">{member.name}</div>

// // //                 {/* EMAIL */}
// // //                 <div className="text-gray-600">{member.email}</div>

// // //                 {/* ROLE */}
// // //                 <div>
// // //                   <span
// // //                     className={`px-2 py-1 rounded text-sm ${
// // //                       member.role === "admin"
// // //                         ? "bg-blue-100 text-blue-700"
// // //                         : "bg-gray-100 text-gray-700"
// // //                     }`}
// // //                   >
// // //                     {member.role || "member"}
// // //                   </span>
// // //                 </div>

// // //                 {/* TOTAL */}
// // //                 <div className="text-blue-600 font-semibold">{stats.total}</div>

// // //                 {/* PENDING */}
// // //                 <div className="text-red-500 font-semibold">
// // //                   {stats.pending}
// // //                 </div>

// // //                 {/* COMPLETED */}
// // //                 <div className="text-green-600 font-semibold">
// // //                   {stats.completed}
// // //                 </div>
// // //               </div>
// // //             );
// // //           })
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default TeamMembers;
// // import { useEffect, useState } from "react";

// // function TeamMembers() {
// //   const [members, setMembers] = useState([]);
// //   const [tasks, setTasks] = useState([]);

// //   /* =========================
// //      FETCH USERS
// //   ========================= */
// //   const fetchUsers = async () => {
// //     try {
// //       const res = await fetch("https://team-task-manager-zyd5.onrender.com/api/auth/users");
// //       const data = await res.json();

// //       setMembers(data.users || []);
// //     } catch (error) {
// //       console.log("USER FETCH ERROR:", error);
// //     }
// //   };

// //   /* =========================
// //      FETCH TASKS
// //   ========================= */
// //   const fetchTasks = async () => {
// //     try {
// //       const res = await fetch("https://team-task-manager-zyd5.onrender.com/api/tasks");
// //       const data = await res.json();

// //       setTasks(data.tasks || []);
// //     } catch (error) {
// //       console.log("TASK FETCH ERROR:", error);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchUsers();
// //     fetchTasks();
// //   }, []);

// //   /* =========================
// //      SAFE TASK STATS (FINAL FIX)
// //   ========================= */
// //   const getStats = (email) => {
// //     if (!email) return { total: 0, pending: 0, completed: 0 };

// //     const cleanEmail = email.toLowerCase().trim();

// //     const userTasks = tasks.filter((t) => {
// //       const taskEmail = t.assignedTo?.toLowerCase().trim();
// //       return taskEmail === cleanEmail;
// //     });

// //     const completed = userTasks.filter((t) => t.status === "Completed").length;

// //     const pending = userTasks.length - completed;

// //     return {
// //       total: userTasks.length,
// //       pending,
// //       completed,
// //     };
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-100 p-6">
// //       {/* HEADER */}
// //       <div className="mb-6">
// //         <h1 className="text-3xl font-bold text-gray-800">Team Members</h1>
// //         <p className="text-gray-500">Manage users and their assigned tasks</p>
// //       </div>

// //       {/* TABLE */}
// //       <div className="bg-white rounded-xl shadow overflow-hidden">
// //         {/* HEADER */}
// //         <div className="grid grid-cols-6 bg-gray-200 p-4 font-semibold text-gray-700">
// //           <div>Name</div>
// //           <div>Email</div>
// //           <div>Role</div>
// //           <div>Total</div>
// //           <div>Pending</div>
// //           <div>Completed</div>
// //         </div>

// //         {/* BODY */}
// //         {members.length === 0 ? (
// //           <div className="p-6 text-gray-500">No team members found</div>
// //         ) : (
// //           members.map((member) => {
// //             const stats = getStats(member.email);

// //             return (
// //               <div
// //                 key={member._id}
// //                 className="grid grid-cols-6 p-4 border-b hover:bg-gray-50"
// //               >
// //                 <div className="font-medium">{member.name}</div>

// //                 <div className="text-gray-600">{member.email}</div>

// //                 <div>
// //                   <span className="px-2 py-1 rounded bg-gray-100 text-gray-700 text-sm">
// //                     {member.role || "member"}
// //                   </span>
// //                 </div>

// //                 <div className="text-blue-600 font-semibold">{stats.total}</div>

// //                 <div className="text-red-500 font-semibold">
// //                   {stats.pending}
// //                 </div>

// //                 <div className="text-green-600 font-semibold">
// //                   {stats.completed}
// //                 </div>
// //               </div>
// //             );
// //           })
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default TeamMembers;
// import { useEffect, useState } from "react";

// function TeamMembers() {
//   const [members, setMembers] = useState([]);
//   const [tasks, setTasks] = useState([]);

//   /* =========================
//      FETCH USERS
//   ========================= */
//   const fetchUsers = async () => {
//     try {
//       const res = await fetch("https://team-task-manager-zyd5.onrender.com/api/auth/users");
//       const data = await res.json();

//       setMembers(data.users || []);
//     } catch (error) {
//       console.log("USER FETCH ERROR:", error);
//       setMembers([]); // safe fallback
//     }
//   };

//   /* =========================
//      FETCH TASKS
//   ========================= */
//   const fetchTasks = async () => {
//     try {
//       const res = await fetch("https://team-task-manager-zyd5.onrender.com/api/tasks");
//       const data = await res.json();

//       setTasks(data.tasks || []);
//     } catch (error) {
//       console.log("TASK FETCH ERROR:", error);
//       setTasks([]); // safe fallback
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//     fetchTasks();
//   }, []);

//   /* =========================
//      SAFE TASK STATS (FINAL FIX)
//   ========================= */
//   const getStats = (email) => {
//     if (!email) return { total: 0, pending: 0, completed: 0 };

//     const cleanEmail = email.toLowerCase().trim();

//     const userTasks = tasks.filter((t) => {
//       return t.assignedTo && t.assignedTo.toLowerCase().trim() === cleanEmail;
//     });

//     const completed = userTasks.filter((t) => t.status === "Completed").length;

//     const pending = userTasks.length - completed;

//     return {
//       total: userTasks.length,
//       pending,
//       completed,
//     };
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       {/* HEADER */}
//       <div className="mb-6">
//         <h1 className="text-3xl font-bold text-gray-800">Team Members</h1>
//         <p className="text-gray-500">Manage users and their assigned tasks</p>
//       </div>

//       {/* TABLE */}
//       <div className="bg-white rounded-xl shadow overflow-hidden">
//         {/* HEADER ROW */}
//         <div className="grid grid-cols-6 bg-gray-200 p-4 font-semibold text-gray-700">
//           <div>Name</div>
//           <div>Email</div>
//           <div>Role</div>
//           <div>Total</div>
//           <div>Pending</div>
//           <div>Completed</div>
//         </div>

//         {/* BODY */}
//         {members.length === 0 ? (
//           <div className="p-6 text-gray-500">No team members found</div>
//         ) : (
//           members.map((member) => {
//             const stats = getStats(member.email);

//             return (
//               <div
//                 key={member._id}
//                 className="grid grid-cols-6 p-4 border-b hover:bg-gray-50"
//               >
//                 <div className="font-medium">{member.name}</div>

//                 <div className="text-gray-600">{member.email}</div>

//                 <div>
//                   <span className="px-2 py-1 rounded bg-gray-100 text-gray-700 text-sm">
//                     {member.role || "member"}
//                   </span>
//                 </div>

//                 <div className="text-blue-600 font-semibold">{stats.total}</div>

//                 <div className="text-red-500 font-semibold">
//                   {stats.pending}
//                 </div>

//                 <div className="text-green-600 font-semibold">
//                   {stats.completed}
//                 </div>
//               </div>
//             );
//           })
//         )}
//       </div>
//     </div>
//   );
// }

// export default TeamMembers;
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function TeamMembers() {
  const navigate = useNavigate();

  const [members, setMembers] = useState([]);
  const [tasks, setTasks] = useState([]);

  /* =========================
     FETCH USERS
  ========================= */
  const fetchUsers = async () => {
    try {
      const res = await fetch(
        "https://team-task-manager-zyd5.onrender.com/api/auth/users"
      );
      const data = await res.json();

      setMembers(data.users || []);
    } catch (error) {
      console.log("USER FETCH ERROR:", error);
      setMembers([]);
    }
  };

  /* =========================
     FETCH TASKS
  ========================= */
  const fetchTasks = async () => {
    try {
      const res = await fetch(
        "https://team-task-manager-zyd5.onrender.com/api/tasks"
      );
      const data = await res.json();

      setTasks(data.tasks || []);
    } catch (error) {
      console.log("TASK FETCH ERROR:", error);
      setTasks([]);
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchTasks();
  }, []);

  /* =========================
     TASK STATS
  ========================= */
  const getStats = (email) => {
    if (!email) return { total: 0, pending: 0, completed: 0 };

    const cleanEmail = email.toLowerCase().trim();

    const userTasks = tasks.filter((t) => {
      return t.assignedTo && t.assignedTo.toLowerCase().trim() === cleanEmail;
    });

    const completed = userTasks.filter((t) => t.status === "Completed").length;

    const pending = userTasks.length - completed;

    return {
      total: userTasks.length,
      pending,
      completed,
    };
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Team Members</h1>
          <p className="text-gray-500">Manage users and their assigned tasks</p>
        </div>

        {/* BACK BUTTON */}
        <button
          onClick={() => navigate("/admin-dashboard")}
          className="bg-gray-900 text-white px-5 py-2 rounded-lg hover:bg-black transition"
        >
          ← Back
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        {/* HEADER ROW */}
        <div className="grid grid-cols-6 bg-gray-200 p-4 font-semibold text-gray-700">
          <div>Name</div>
          <div>Email</div>
          <div>Role</div>
          <div>Total</div>
          <div>Pending</div>
          <div>Completed</div>
        </div>

        {/* BODY */}
        {members.length === 0 ? (
          <div className="p-6 text-gray-500">No team members found</div>
        ) : (
          members.map((member) => {
            const stats = getStats(member.email);

            return (
              <div
                key={member._id}
                className="grid grid-cols-6 p-4 border-b hover:bg-gray-50"
              >
                <div className="font-medium">{member.name}</div>

                <div className="text-gray-600">{member.email}</div>

                <div>
                  <span className="px-2 py-1 rounded bg-gray-100 text-gray-700 text-sm">
                    {member.role || "member"}
                  </span>
                </div>

                <div className="text-blue-600 font-semibold">{stats.total}</div>

                <div className="text-red-500 font-semibold">
                  {stats.pending}
                </div>

                <div className="text-green-600 font-semibold">
                  {stats.completed}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default TeamMembers;
