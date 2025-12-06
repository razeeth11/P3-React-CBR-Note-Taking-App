import { Plus } from "lucide-react";
import { Button } from "../components/ui/button";
import { useNotes } from "../context/notes-context";
import { NoteCard } from "../components/note-card";
import { useState } from "react";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";

export function AllNotes() {
  const { notes } = useNotes();
  const [selectedNote, setSelectedNote] = useState(notes[0]);

  const { title, tags, lastEdited, content } = selectedNote;
  return (
    <div className="flex">
      <div className="border w-4/12 h-screen p-2.5">
        <Button className="w-full py-6 bg-blue-600 hover:bg-blue-800 cursor-pointer">
          <Plus />
          Create New Note
        </Button>
        <div className="flex flex-col gap-2.5 my-2.5">
          {notes.map((n, i) => (
            <div
              key={i}
              className="w-full rounded-2xl"
              onClick={() => {
                setSelectedNote(n);
              }}
            >
              <NoteCard data={n} isSelected={n.id === selectedNote.id} />
            </div>
          ))}
        </div>
      </div>
      <div className="border w-8/12 h-screen p-5">
        <div className="flex flex-col gap-5">
          <h3 className="text-3xl">{title}</h3>
          <div className="flex flex-col gap-3">
            <div className="flex flex-row">
              <h4 className="w-40">Tags</h4> :
              <div className="flex items-center gap-2.5">
                {tags.map((t, i) => (
                  <Badge key={i} variant={"secondary"}>
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex flex-row">
              <h4 className="w-40">Last Edited</h4> :
              <Badge variant={"secondary"}>{lastEdited}</Badge>
            </div>
          </div>
        </div>
        <Separator className="my-5" />
        <div>
          {content.map((c, i) => (
            <p key={i}>{c}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
