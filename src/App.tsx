import React, { useEffect, useState } from "react";
import { Note } from "./types";
import { getAllNotes, createNote } from "./noteService";

function App() {
  const [newNote, setNewNote] = useState('');
  const [notes, setNotes] = useState<Note[]>([
    { id: '1', content: 'testing' }
  ]);

  const noteCreation = (event: React.SyntheticEvent) => {
    event.preventDefault();

    createNote({ content: newNote })
      .then(data => { setNotes(notes.concat(data)) });

    setNewNote('');
  }

  useEffect(() => {
    getAllNotes().then(data => { setNotes(data) });
  }, []);

  return (
    <div>
      <form onSubmit={noteCreation}>
        <input
          value={newNote}
          onChange={(event) => setNewNote(event.target.value)}
        />
      </form>
      <ul>
        {notes.map(n =>
          <li key={n.id}>{n.content}</li>
        )}
      </ul>
    </div>
  )
}

export default App
