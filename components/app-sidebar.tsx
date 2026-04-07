"use client";

import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export type NavItem = {
  title: string;
  url: string;
  items?: { title: string; url: string }[];
};

type AppSidebarProps = React.ComponentProps<typeof Sidebar> & {
  navMain: NavItem[];
};

export function AppSidebar({ navMain, ...props }: AppSidebarProps) {
  return (
    <Sidebar variant="floating" {...props}>
      <SidebarHeader className="items-center gap-3 pt-8">
        <Avatar className="size-40">
          <AvatarImage src="/profile.jpg" alt="Alex Heck" />
          <AvatarFallback className="text-3xl">AH</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-center gap-0.5 leading-none">
          <span className="text-3xl font-bold">Alex Heck</span>
          <span className="text-sm text-muted-foreground">
            Software Engineering Manager
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-2">
            {navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  render={<a href={item.url} className="font-medium" />}
                >
                  {item.title}
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton render={<a href={item.url} />}>
                          {item.title}
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
