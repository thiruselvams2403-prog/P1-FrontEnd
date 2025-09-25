import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../services/api";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // clear old errors
    try {
      const res = await API.post("/auth/login", formData);

      console.log("Login successful:", res.data);

      // ✅ adjust this depending on your API response
      const token = res.data.token || res.data.accessToken || res.data.jwt;

      if (!token) {
        throw new Error("No token returned from server");
      }

      localStorage.setItem("token", token);

      // ✅ navigate to dashboard
      navigate("/dashboard");
    } catch (err) {
      console.error("Login error:", err);
      setError(err.response?.data?.message || err.message || "Login failed");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>

      <p>
        Don’t have an account? <a href="/register">Register</a>
      </p>
    </div>
  );
}
