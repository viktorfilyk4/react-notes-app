import React, { useState } from "react";
import NotesListItem from "./NotesListItem";

function NotesListSection() {
  const [state, setstate] = useState(false);

  return (
    <div
      className={`h-full overflow-y-scroll pb-20 ${
        false ? "opacity-50 bg-grey-800" : ""
      }`}
    >
      <NotesListItem handleClick={() => {}} />
      <NotesListItem />
      <NotesListItem />
      <NotesListItem />
      <NotesListItem />
      <NotesListItem />
      <NotesListItem />
      <NotesListItem />
      <NotesListItem />
    </div>
  );
}

export default NotesListSection;
