import { box, stack } from "../styles/classStyles";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

export function NoteView({ data }) {
  const { title, tags, lastEdited, content } = data;

  return (
    <div className={`${stack} gap-5 border w-8/12 h-screen py-2.5 px-5`}>
      <h2 className="text-3xl">{title}</h2>
      <div className={`${stack} gap-5`}>
        <div className={`${box} gap-2.5`}>
          <h4 className="w-30">Tags</h4>
          <span>:</span>
          {tags.map((t, i) => (
            <Tags item={t} key={i} />
          ))}
        </div>
        <div className={`${box} gap-2.5`}>
          <h4 className="w-30">Last Edited</h4>
          <span>:</span>
          <Badge variant={"secondary"}>{lastEdited}</Badge>
        </div>
      </div>
      <Separator />
      <div>
        {content.map((c, i) => (
          <p key={i}>{c}</p>
        ))}
      </div>
    </div>
  );
}

function Tags({ item }) {
  return <Badge variant={"secondary"}>{item}</Badge>;
}
