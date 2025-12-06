import { IconInnerShadowTop } from "@tabler/icons-react";
import { NotesSections } from "../components/notes-sections";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../components/ui/sidebar";
import { Link } from "react-router-dom";
import { ArchiveIcon, HomeIcon } from "lucide-react";
import { TagsSections } from "./tags-sections";
// import { useNotes } from "../context/notes-context";

export function AppSidebar({ ...props }) {
  // const { notes } = useNotes();
  const notesSections = [
    {
      name: "All Notes",
      url: "/all-notes",
      icon: <HomeIcon />,
    },
    {
      name: "Archived Notes",
      url: "/archived-notes",
      icon: <ArchiveIcon />,
    },
  ];

  return (
    <Sidebar collapsible="offcanvas" {...props} className={"p-0 m-0"}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="flex flex-column">
              <Link to="/all-notes">
                <IconInnerShadowTop className="size-5" />
                <span className="text-base font-semibold">
                  Notes Taking App
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NotesSections items={notesSections} />
        <TagsSections />
      </SidebarContent>
    </Sidebar>
  );
}
