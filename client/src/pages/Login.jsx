import { use, useEffect } from "react";
import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import AuthService from "../services/AuthService.jsx";
import { useAuthContext } from "../context/AuthContext.jsx";
function Login() {
  const [logInData, setLogInData] = useState({
    email: "",
    password: "",
  });
  const  {login, user}  = useAuthContext();
  const navigate = () => {
      const { name, value } = e.target;
      setLogInData({...logInData, [name]: value});
      };
      useEffect(() => {
        if (user) {
          navigate("/");
        }
      }, [user, navigate]);
      const { email, password } = logInData;

    const handleSubmit =async (e) => {
      e.preventDefault();
      try {
        const curerentUser = await AuthService.login(
          logInData.email, 
          logInData.password
        );
        if (curerentUser.status === 200) {
          Swal.fire({
            title: "User Login",
            text: curerentUser?.data?.message,
            icon: "success",
          }).then(() => {
            login(curerentUser?.data?.user);
            navigate("/");

          });
        }
        } catch (error) {
        console.error("Error during login:", error);
      }
    }; 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-80"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <div className="mb-4">
          <label className="block mb-1">Username</label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            className="input input-bordered w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-primary w-full" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
