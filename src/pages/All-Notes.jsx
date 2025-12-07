import { Plus } from "lucide-react";
import { Button } from "../components/ui/button";
import { useNotes } from "../context/notes-context";
import { NoteCard } from "../components/note-card";
import { useState } from "react";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { stack } from "../styles/classStyles";
import { NoteView } from "../components/note-view";

export function AllNotes() {
  const { notes } = useNotes();
  const [selectedNote, setSelectedNote] = useState(notes[0]);

  function selectNoteHandler(item) {
    setSelectedNote(item);
  }

  return (
    <div className="flex">
      <div className="border w-4/12 h-screen p-2.5 ">
        <Button className="w-full py-6 bg-blue-600 hover:bg-blue-800 cursor-pointer">
          <Plus />
          Create New Note
        </Button>
        <div className={`${stack} gap-2.5 my-2.5`}>
          {notes.map((n, i) => (
            <NoteCard
              key={i}
              data={n}
              isSelected={n.id === selectedNote.id}
              handleClick={selectNoteHandler}
            />
          ))}
        </div>
      </div>

      <NoteView data={selectedNote} />
    </div>
  );
}
