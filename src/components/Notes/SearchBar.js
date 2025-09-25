// src/components/Notes/SearchBar.js

import React, { useState } from "react";
import API from "../../services/api";

export default function SearchBar({ setNotes }) {
  const [query, setQuery] = useState("");
  const [mode, setMode] = useState("keyword");

  const handleSearch = async () => {
    if (!query.trim()) return;
    const res = await API.get(`/notes/search?query=${query}&type=${mode}`);
    setNotes(res.data);
  };

  return (
    <div className="w-full mb-6">
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
        <input
          className="border border-gray-300 p-3 rounded-lg flex-1 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search notes"
        />
        <select
          className="border border-gray-300 p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          value={mode}
          onChange={(e) => setMode(e.target.value)}
        >
          <option value="keyword">Keyword</option>
          <option value="ai">AI Semantic</option>
        </select>
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200 shadow-md"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
}
