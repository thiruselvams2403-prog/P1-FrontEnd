import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header({ onLogout, user }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const initials = user?.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : "US";

  const navigate = useNavigate();

  return (
   <header className="bg-white px-6 py-4 border-b shadow-sm flex items-center justify-between w-full whitespace-nowrap">
  {/* Left: Title */}
  <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
    📝 Notes Dashboard
  </h1>

  {/* Right: User Avatar */}
  {/* <div className="relative flex-shrink-0">
    <button
      onClick={() => setDropdownOpen((prev) => !prev)}
      className="w-10 h-10 rounded-full bg-gray-100 text-sm font-bold text-gray-800 flex items-center justify-center hover:bg-gray-200 transition"
    >
      {initials}
    </button>

    {dropdownOpen && (
      <div className="absolute right-0 mt-2 w-56 bg-white border rounded shadow-md z-50">
        <div className="px-4 py-2 border-b">
          <p className="font-semibold">{user?.name}</p>
          <p className="text-sm text-gray-500">{user?.email}</p>
        </div>
        <ul>
          <li
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => navigate("/account")}
          >
            Account
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => navigate("/billing")}
          >
            Billing
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={onLogout}
          >
            Logout
          </li>
        </ul>
      </div>
    )}
  </div> */}
</header>

  );
}
