import { NavLink, useLocation } from "react-router-dom";
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
    <SidebarGroup>
      <SidebarGroupLabel>Notes</SidebarGroupLabel>
      <SidebarMenu className={"gap-0"}>
        {items.map((item) => (
          <SidebarMenuItem
            key={item.name}
            className={`${
              location.pathname === item.url && "bg-gray-200"
            } rounded`}
          >
            <NavLink to={item.url}>
              <NavButton item={item} />
            </NavLink>
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
        <item.icon className="size-5" />
        <p>{item.name}</p>
      </div>
      <ChevronRight />
    </div>
  );
}
