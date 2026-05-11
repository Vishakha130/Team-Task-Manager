import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // HANDLE INPUT
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // LOGIN
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      console.log("FULL LOGIN DATA:", data);
      console.log("ROLE:", data?.user?.role);

      if (res.ok) {
        // SAVE TOKEN
        localStorage.setItem("token", data.token);

        // SAVE USER
        localStorage.setItem("user", JSON.stringify(data.user));

        alert("Login successful 🚀");

        // ROLE BASED REDIRECT
        if (data.user.role.toLowerCase() === "admin") {
          navigate("/admin-dashboard");
        } else {
          navigate("/member-dashboard");
        }
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log("LOGIN ERROR:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        {/* TITLE */}
        <h1 className="text-3xl font-bold text-center mb-2">TeamFlow</h1>

        <p className="text-gray-500 text-center mb-6">Login to continue</p>

        {/* FORM */}
        <form className="space-y-4" onSubmit={handleLogin}>
          {/* EMAIL */}
          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block mb-2 text-sm font-medium">Password</label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Login
          </button>
        </form>

        {/* SIGNUP LINK */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-black font-medium">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
