
import React from "react";
import { Calendar, Home, Map, Save, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const items = [
  { title: "Home", url: "#", icon: Home },
  { title: "Map", url: "#", icon: Map },
  { title: "Calendar", url: "#", icon: Calendar },
  { title: "Saved Location", url: "#", icon: Save },
  { title: "Settings", url: "#", icon: Settings },
];

export default function AppSidebar() {
  return (
    <Sidebar className="h-screen border-r border-gray-300">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="mt-4 mb-4 text-blue-700 text-xl font-bold">
            Weather-App
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-4">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-2 text-gray-700 hover:text-blue-500">
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
