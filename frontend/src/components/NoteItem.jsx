import { useState } from "react";
import api from "../services/api";
import "../css/NoteItem.css";

export default function NoteItem({ note, fetchNotes }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const deleteNote = async () => {
    try {
      await api.delete(`/notes/${note._id}`);
      fetchNotes();
    } catch (err) {
      alert("Failed to delete note");
      console.error(err);
    }
  };

  const updateNote = async () => {
    try {
      await api.put(`/notes/${note._id}`, { title, content });
      setIsEditing(false);
      fetchNotes();
    } catch (err) {
      alert("Failed to update note");
      console.error(err);
    }
  };

  return (
    <div className="note-item">
      {isEditing ? (
        <div className="note-edit-form">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <div className="note-item-buttons">
            <button onClick={updateNote}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </div>
      ) : (
        <>
          <h3>{note.title}</h3>
          <p>{note.content}</p>

          <div className="note-item-buttons">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={deleteNote}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
}
