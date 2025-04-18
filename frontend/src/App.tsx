import React, { useEffect, useState } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import { Note } from './models/noteModel';

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    async function loadNotes() {
      try {
        const response = await fetch("/api/notes", { method: "GET"});
        const notes = await response.json();
        setNotes(notes);
      } catch (error) {
        console.error(error);
        alert(error);
      }
    }
    loadNotes();
  }, []); //[] do wywolywania use effect po zmianie danych

  return (
    <div className="App">
      {JSON.stringify(notes)}
    </div>
  );
}

export default App;
