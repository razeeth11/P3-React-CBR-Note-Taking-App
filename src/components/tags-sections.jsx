import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
} from "./ui/sidebar";
import { ChevronRight, Tag } from "lucide-react";
import { useNotes } from "../context/notes-context";
import { useState } from "react";

export function TagsSections() {
  const { notes } = useNotes();
  const uniqueTags = Array.from(new Set(notes.flatMap((n) => n.tags)));
  const [selectedTag, setSelectedTag] = useState("All");

  function selectTagHandler(item) {
    setSelectedTag(item);
  }

  const navButtonBgColor = "rounded cursor-pointer hover:bg-gray-200";

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Notes</SidebarGroupLabel>
      <SidebarMenu className={"gap-0"}>
        <SidebarMenuItem
          className={`${
            selectedTag === "All" && "bg-gray-200"
          } ${navButtonBgColor}`}
          onClick={() => selectTagHandler("All")}
        >
          <NavButton item={"All Tag"} />
        </SidebarMenuItem>
        {uniqueTags.map((item, index) => (
          <SidebarMenuItem
            key={index}
            className={`${
              selectedTag === item && "bg-gray-200"
            } ${navButtonBgColor}`}
            onClick={() => selectTagHandler(item)}
          >
            <NavButton item={item} />
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}

function NavButton({ item }) {
  const flexRowBetween = "flex items-center justify-between";

  return (
    <div className={`${flexRowBetween} w-full p-3 rounded`}>
      <div className={`${flexRowBetween} gap-2.5`}>
        <Tag className="size-4" />
        <p>{item}</p>
      </div>
      <ChevronRight />
    </div>
  );
}
