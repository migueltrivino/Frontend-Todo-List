import { useState } from "react";
import api from "../services/api";
import "../css/NoteEditor.css";

export default function NoteEditor({ fetchNotes }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const createNote = async (e) => {
    e.preventDefault();

    try {
      await api.post("/notes/", { title, content });
      setTitle("");
      setContent("");
      fetchNotes();
    } catch (err) {
      alert("Failed to create note");
      console.error(err);
    }
  };

  return (
    <form className="note-editor" onSubmit={createNote}>
      <h3>Crear Nota</h3>

      <input
        type="text"
        placeholder="Título..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        placeholder="Escribe tu nota..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />

      <button type="submit">Agregar nota</button>
    </form>
  );
}
