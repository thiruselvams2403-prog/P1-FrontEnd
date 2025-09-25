import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import NoteForm from "../components/Notes/NoteForm";
import NoteList from "../components/Notes/NoteList";
import SearchBar from "../components/Notes/SearchBar";
import Header from "../components/Header/Header.js";

export default function Dashboard() {
  const [notes, setNotes] = useState([]);
  const [user, setUser] = useState({ name: "Thiru Selvam . S", email: "thiruselvam20000@gmail.com" }); // Example user
  const navigate = useNavigate();

  const fetchNotes = async () => {
    try {
      const res = await API.get("/notes");
      setNotes(res.data);
    } catch (err) {
      console.error("Failed to fetch notes:", err);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4">
      <div className="container mx-auto max-w-5xl bg-white p-6 rounded-lg shadow-lg">
        
        {/* Header */}
        <Header onLogout={handleLogout} user={user} />

        {/* Search */}
        <div className="mb-6">
          <SearchBar setNotes={setNotes} />
        </div>

        {/* Add Note */}
        <div className="mb-6">
          <NoteForm refresh={fetchNotes} />
        </div>

        {/* Note List */}
        <NoteList notes={notes} refresh={fetchNotes} />
      </div>
    </div>
  );
}
