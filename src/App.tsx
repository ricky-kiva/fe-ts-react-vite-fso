import React, { useState } from "react";

interface Note {
  id: string,
  content: string
}

function App() {
  const [newNote, setNewNote] = useState('');
  const [notes, setNotes] = useState<Note[]>([
    { id: '1', content: 'testing' }
  ]);

  const noteCreation = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const noteToAdd = {
      id: String(notes.length + 1),
      content: newNote
    }

    setNotes(notes.concat(noteToAdd));
    setNewNote('');
  }

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
