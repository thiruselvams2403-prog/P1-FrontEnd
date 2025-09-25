// src/components/Notes/NoteList.js

import React from "react";
import API from "../../services/api";

export default function NoteList({ notes, refresh }) {
  const handleDelete = async (id) => {
    await API.delete(`/notes/${id}`);
    refresh();
  };

  const notesArray = Array.isArray(notes)
    ? notes
    : notes?.results ?? [];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {notesArray.map((note) => (
        <div
          key={note._id}
          className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 transition hover:shadow-md"
        >
          <h3 className="text-lg font-semibold text-gray-800">{note.title}</h3>
          <p className="text-gray-600 mt-2 whitespace-pre-wrap">{note.content}</p>
          <button
            onClick={() => handleDelete(note._id)}
            className="mt-4 text-red-600 hover:underline text-sm"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
