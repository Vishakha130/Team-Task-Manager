import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Task from "./pages/Task";
import CreateTask from "./pages/CreateTask";
import Projects from "./pages/Projects";
import EditTask from "./pages/EditTask";
import MemberDashboard from "./pages/MemberDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import TeamMember from "./pages/TeamMember";
import CreateProject from "./pages/CreatePage";
import Report from "./pages/Report";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/task" element={<Task />} />
      <Route path="/createtask" element={<CreateTask />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/edit-task/:id" element={<EditTask />} />
      <Route path="/member-dashboard" element={<MemberDashboard />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/team" element={<TeamMember />} />
      <Route path="/projects/create" element={<CreateProject />} />
      <Route path="/report" element={<Report />} />
    </Routes>
  );
}

export default App;
