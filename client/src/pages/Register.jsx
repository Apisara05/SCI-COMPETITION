import {useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import AuthService from "../services/AuthService.jsx";
// import { useAuthContext } from "../context/AuthContext.jsx";
const Register = () => {
  const [useData, setUserData] = useState({
    email: "",
    name: "", 
    school:"", 
    phone:"", 
    password: "",
    type:"teacher",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...useData, [name]: value });
  };
  const navigate = useNavigate();
  // const  {login, user}  = useAuthContext();
  useEffect(() => {
    // if (user) {
    //   navigate("/");
    // }
  }
  , []);
  const handleSubmit =async () => {
        try {
          const curerentUser = await AuthService.register(
            name: useData.name,
            email: useData.email,
            type: useData.type,
            school: useData.school,
            phone: useData.phone,
            password: useData.password,
            });
          if (curerentUser.status === 200) {
            Swal.fire({
              title: "User Login",
              text: curerentUser?.data?.message,
              icon: "success",
            }).then(() => {
              setUserData({
                email: "",
                name: "",
                school:"",
                phone:"",
                password: "",
                type:"teacher",
              });
              navigate("/login");
            });
          }
          } catch (error) {
          Swal.fire({
            title: "Error!",
            text: error?.response?.data?.message || "Something went wrong",
            icon: "error",
          });
          console.error("Error during login:", error);  
        }
      }; 
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <div className="mb-4">
          <label className="block mb-1">Username</label>
          <input
            type="text"
            name="username"
            className="input input-bordered w-full"
            value={userData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Full Name</label>
          <input
            type="text"
            name="fullName"
            className="input input-bordered w-full"
            value={userData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            className="input input-bordered w-full"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            name="password"
            className="input input-bordered w-full"
            value={userData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button className="btn btn-primary w-full" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
