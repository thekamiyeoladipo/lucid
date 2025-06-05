import { useState } from "react";
import { useContext } from 'react';
import { DreamContext } from '../context/DreamContext';


export default function DreamEntryForm({ onSubmit }) {
  const { dreams, dispatch } = useContext(DreamContext);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");

  dispatch({
  type: 'ADD_DREAM',
  payload: {
    id: crypto.randomUUID(),
    title: 'Flying through space',
    date: new Date().toISOString(),
    content: 'I was flying over planets...',
    tag: 'Lucid',
  },
});


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !date || !content) return;
    onSubmit({ title, date, content, tag });
    setTitle("");
    setDate("");
    setContent("");
    setTag("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-24 mbg-gradient-to-b from-purple-800 to-purple-950 p-6 rounded-2xl shadow-2xl text-white max-w-xl w-full space-y-4"
    >
      <h2 className=" flex align-center text-2xl font-semibold">Capture your dream</h2>
      <p>let your subconscious flow into the page</p>

      <input
        className="w-full p-3 rounded bg-purple-700 placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
        type="text"
        placeholder="Dream Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className="w-full p-3 rounded bg-purple-700 placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <textarea
        className="w-full p-3 rounded bg-purple-700 placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 h-40 resize-none"
        placeholder="Describe your dream in detail..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <input
        className="w-full p-3 rounded bg-purple-700 placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
        type="text"
        placeholder="Optional Tag (e.g. Lucid, Nightmare)"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
      />

      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-500 p-3 rounded font-semibold transition"
      >
        Save Dream
      </button>
    </form>
  );
}
