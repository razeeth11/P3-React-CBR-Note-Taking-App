import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "./ui/badge";

export function NoteCard({ data, isSelected }) {
  const { title, tags, lastEdited } = data;

  return (
    <Card className={`w-full cursor-pointer ${isSelected && "bg-gray-200"}`}>
      <CardHeader className="p-4">
        <CardTitle className="text-xl">{title}</CardTitle>
        <div className="flex items-center gap-2.5 mt-1 text-sm">
          {tags.slice(0, 2).map((t, i) => (
            <Badge key={i} variant="secondary">
              {t}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardFooter className="px-4 pb-1.5">
        <Badge variant="outline">{lastEdited}</Badge>
      </CardFooter>
    </Card>
  );
}
