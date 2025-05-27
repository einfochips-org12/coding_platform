import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProfileMenu = ({ expanded }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const goToProfile = () => {
    navigate("/user/profile");
  };

  return (
    <div className={`relative p-4 border-t flex items-center ${expanded ? 'justify-between' : 'justify-center'}`}>
      <div
        className={`flex items-center cursor-pointer ${!expanded ? 'justify-center w-full' : ''}`}
        onClick={goToProfile}
      >
        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
          <span className="text-xs font-medium">Vk</span>
        </div>
        {expanded && (
          <div className="ml-3">
            <div className="text-sm font-medium">Vivek kumar</div>
            <div className="text-xs text-gray-500">Intern</div>
          </div>
        )}
      </div>

      {expanded && (
        <div className="relative">
          <button onClick={() => setShowDropdown((prev) => !prev)}>
            <ChevronDown size={16} />
          </button>

          {showDropdown && (
            <div className="absolute right-0 bottom-full mb-2 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
