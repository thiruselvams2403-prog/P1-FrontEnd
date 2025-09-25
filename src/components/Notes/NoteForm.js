// src/components/Notes/NoteForm.js

import React, { useState } from "react";
import API from "../../services/api";

export default function NoteForm({ refresh }) {
  const [form, setForm] = useState({ title: "", content: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.content.trim()) return;
    await API.post("/notes", form);
    setForm({ title: "", content: "" });
    refresh();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full mb-6">
      <input
        className="border border-gray-300 p-3 w-full rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Title"
      />
      <textarea
        className="border border-gray-300 p-3 w-full rounded-lg shadow-sm resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
        name="content"
        value={form.content}
        onChange={handleChange}
        placeholder="Content"
        rows="4"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200 shadow-md"
      >
        Add Note
      </button>
    </form>
  );
}
