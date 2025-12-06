import { Link, NavLink, useLocation } from "react-router-dom";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { ChevronRight } from "lucide-react";
import { useNotes } from "../context/notes-context";

export function TagsSections() {
  const location = useLocation();
  const { notes } = useNotes();

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden p-0">
      <SidebarGroupLabel>Notes</SidebarGroupLabel>
      <SidebarMenu className={"p-0 gap-0"}>
        {notes.map((item, index) => (
          <SidebarMenuItem key={index}>
            <SidebarMenuButton
              asChild
              //   className={`p-6 ${
              //     location.pathname === item.url && "bg-blue-500 text-white"
              //   } rounded-none`}
            >
              {/* <NavLink to={item.url}> */}
              <NavButton item={item} />
              {/* </NavLink> */}
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}

function NavButton({ item }) {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center justify-between gap-2.5">
        {/* {item.icon} */}
        <span>{item.tags[0]}</span>
      </div>
      <ChevronRight />
    </div>
  );
}
