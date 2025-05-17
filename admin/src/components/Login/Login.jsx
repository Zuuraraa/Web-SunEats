import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { toast } from "react-toastify";
import axios from "axios";
import { backendUrl } from "../../App";

const Login = ({ setToken }) => {
  const navigate = useNavigate();

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const handleSubmit = async (e) => {
      
    try {
        e.preventDefault();
        const response = await axios.post(backendUrl + '/api/user/admin',{email,password})
        
        if (response.data.success) {
            setToken(response.data.token)
            toast.success("Login Successful")
        } else {
            toast.error(response.data.message)
        }

    } catch (error) {
        console.log(error);
        toast.error(error.message)
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Welcome Admin</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="signup-input"
          onChange={(e)=>setEmail(e.target.value)}
          value={email}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="signup-input"
          onChange={(e)=>setPassword(e.target.value)}
          value={password}
          required
        />
        <button type="submit" className="signup-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
