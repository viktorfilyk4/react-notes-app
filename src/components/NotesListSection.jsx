import React, { useState, useEffect, useContext } from "react";
import NotesListItem from "./NotesListItem";
import { NotesContext } from "../context";

function NotesListSection() {
  const [notes, setNotes] = useState([]);
  const [showOnlyFavoriteNotes] = useContext(NotesContext);

  useEffect(() => {
    async function fetchNotes() {
      const notesList = await (await import("../notes")).default;
      setNotes(showOnlyFavoriteNotes ? notesList.filter((note) => note.isFavorite) : notesList);
    }
    fetchNotes();
  }, [showOnlyFavoriteNotes]);

  return (
    <div className={`h-full overflow-y-scroll pb-20 ${false ? "opacity-50 bg-grey-800" : ""}`}>
      {notes.length > 0 && notes.map((note, idx) => <NotesListItem key={idx} data={note} />)}
    </div>
  );
}

export default NotesListSection;
