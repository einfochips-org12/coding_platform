// 
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { selectLoginData, setLoginData } from "../../redux/slices/authSlice"
import img1 from "../../Assests/Code2.svg";
import img2 from "../../Assests/Cpp.png";
import img3 from "../../Assests/c.png";
import img4 from "../../Assests/Java.png";
import img5 from "../../Assests/py.png";
import logo from "../../Assests/eInfochips-Logo.png";

import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    gidOrEmail: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isGid = /^[0-9]{6}$/.test(formData.gidOrEmail);
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.gidOrEmail);

    if (!isGid && !isEmail) {
      alert("Please enter a valid 6-digit GID or email.");
      return;
    }

    dispatch(setLoginData({
      gid: isGid ? formData.gidOrEmail : "",
      email: isEmail ? formData.gidOrEmail : "",
      password: formData.password,
    }));

    console.log("Login data dispatched:", formData);
  };

  return (
    <div className="h-screen w-screen flex bg-gray-300 relative justify-center items-center p-8 space-x-20 overflow-hidden">
      {/* Background images */}
      <div className="absolute top-0 left-2 w-36 h-20 flex justify-center items-center">
         <img src={logo} alt="logo" />
      </div>
    
      <div className="absolute left-36 h-fit flex justify-center items-center opacity-75">
        <img className="h-96" src={img1} alt="404" />
      </div>
      <div className="absolute -left-24 -bottom-10 h-fit flex justify-center items-center opacity-70">
        <img className="h-32" src={img2} alt="404" />
      </div>
      <div className="absolute top-0 right-64 h-fit flex justify-center items-center opacity-70">
        <img className="h-20" src={img3} alt="404" />
      </div>
      <div className="absolute -bottom-1 h-fit flex justify-center items-center opacity-70">
        <img className="h-36" src={img4} alt="404" />
      </div>
      <div className="absolute top-5 -right-14 h-fit flex justify-center items-center opacity-70">
        <img className="h-32" src={img5} alt="404" />
      </div>

      {/* Signup form */}
      <div className="absolute top-24 right-14 flex justify-center items-center overflow-autos shadow-sm shadow-gray-900">
        <div className="bg-white p-6 rounded-md shadow-md w-96 h-fit">
          <div className="text-center mb-4">
            <img src={logo} alt="eInfochips" className="mx-auto w-32" />
            <h2 className="text-lg font-semibold mt-2 text-gray-700">
              Login to Your Account
            </h2>
          </div>

          <form className="space-y-3 p-4" onSubmit={handleSubmit}>
        

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">Gid or E-mail</label>
              <input
                type="text"
                name="gidOrEmail"
                value={formData.gidOrEmail}
                onChange={handleChange}
                className="w-full border border-gray-700 rounded px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-700 rounded px-3 py-2 text-sm"
              />
            </div>
            <div  className="flex items-center justify-between space-x-3 text-sm">
            <div className="flex items-center space-x-3 text-sm">
              <input type="checkbox" id="terms" required />
              <label htmlFor="remember" className="text-gray-700">
                Remember me
              </label>
            </div>
            <div>
              <a href="#" className="text-blue-500 hover:underline">
                Forgot password?
              </a>
            </div>
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Login
            </button>
          </form>

          <div className="text-center mt-4 text-sm">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <a href="#" className="text-blue-500 hover:underline" onClick={() => navigate("/signup")}>
                Sign up
              </a>
            </p>
            <p className="text-gray-600">
              Designed By <span className="text-blue-500">eInfochips</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
