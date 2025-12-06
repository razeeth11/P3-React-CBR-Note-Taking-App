import { Link, NavLink, useLocation } from "react-router-dom";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { ChevronRight } from "lucide-react";

export function NotesSections({ items }) {
  const location = useLocation();

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Notes</SidebarGroupLabel>
      <SidebarMenu className={"gap-0"}>
        {items.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton
              asChild
              className={`p-6 ${
                location.pathname === item.url && "bg-gray-600 text-white"
              } rounded`}
            >
              <NavLink to={item.url}>
                <NavButton item={item} />
              </NavLink>
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
        {item.icon}
        <span>{item.name}</span>
      </div>
      <ChevronRight />
    </div>
  );
}
