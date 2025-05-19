// 
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setSignupData } from "../../redux/slices/authSlice"
import img1 from "../../Assests/Code2.svg";
import img2 from "../../Assests/Cpp.png";
import img3 from "../../Assests/c.png";
import img4 from "../../Assests/Java.png";
import img5 from "../../Assests/py.png";
import logo from "../../Assests/eInfochips-Logo.png";

const SignupForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    gid: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
     e.preventDefault();

  const { gid, email, password, confirmPassword } = formData;

  // Basic validations
  if (!gid || !email || !password || !confirmPassword) {
    alert("All fields are required");
    return;
  }


  const isGid = /^[0-9]{6}$/.test(formData.gid);
  if (!isGid) {
    alert("GID must be 6 digits long");
    return;
  }

  // Email format validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address");
    return;
  }

  // Password length
  if (password.length < 6) {
    alert("Password must be at least 6 characters long");
    return;
  }

  // Password match
  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }


    dispatch(setSignupData({
      gid: formData.gid,
      email: formData.email,
      password: formData.password,
    }));

    console.log("Form submitted and data dispatched to Redux:", formData);
  };

  return (
    <div className="h-screen w-screen flex bg-gray-300 relative justify-center items-center p-8 space-x-20 overflow-hidden">
      {/* Background images */}
      <div className="absolute top-0 left-2 w-36 h-20 flex justify-center items-center">
        <img src={logo} alt="" />
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
              Sign up to Your Account
            </h2>
          </div>

          <form className="space-y-1" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">Gid</label>
              <input
                type="text"
                name="gid"
                value={formData.gid}
                onChange={handleChange}
                className="w-full border border-gray-700 rounded px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">E-mail</label>
              <input
                type="email"
                name="email"
                value={formData.email}
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

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full border border-gray-700 rounded px-3 py-2 text-sm"
              />
            </div>

            <div className="flex items-center space-x-2 text-sm">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">
                Agree to{" "}
                <a href="#" className="text-blue-500 underline">terms & conditions</a>
              </label>
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Create Account
            </button>
          </form>

          <div className="text-center mt-4 text-sm">
            <p className="text-gray-600">
              Already have an account?{" "}
              <a href="#" className="text-blue-500 hover:underline" onClick={() => navigate("/login")}> 
                Login
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

export default SignupForm;
