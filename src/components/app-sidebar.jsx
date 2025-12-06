import { IconInnerShadowTop } from "@tabler/icons-react";
import { NavDocuments } from "../components/nav-documents";
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

const data = {
  documents: [
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
  ],
};

export function AppSidebar({ ...props }) {
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
        <NavDocuments items={data.documents} />
      </SidebarContent>
    </Sidebar>
  );
}
