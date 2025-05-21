import React, { useState } from "react";
import { UserContext } from '../../context/userContext';
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { toast } from "react-toastify";
import { useContext } from "react";

const Login = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    // ✅ Cek apakah login berhasil
    if (!data.success) {
      toast.error(data.message || "Login failed");
      return;
    }

    toast.success("Login successful!");
    login(data.token, data.userId);
    navigate("/");
  } catch (error) {
    toast.error("Login failed: " + error.message);
  }
};


  return (
    <div className="login-container">
      <h1 className="login-title">Welcome Back</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="signup-input"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="signup-input"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className="signup-button">Login</button>
      </form>
      <div className="signup-options">
        <span className="signup-text">Don't have an account? </span>
        <button onClick={() => navigate("/signup")} className="back-to-login">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Login;
