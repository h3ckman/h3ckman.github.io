"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  BriefcaseIcon,
  FolderOpenIcon,
  MailIcon,
  UserIcon,
  WrenchIcon,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import type { NavItem, SocialLink } from "@/lib/types";

const icons: Record<string, LucideIcon> = {
  user: UserIcon,
  briefcase: BriefcaseIcon,
  "folder-open": FolderOpenIcon,
  wrench: WrenchIcon,
};

const socialIcons: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  mail: MailIcon,
};

type AppSidebarProps = React.ComponentProps<typeof Sidebar> & {
  navMain: NavItem[];
  socialLinks: SocialLink[];
};

export function AppSidebar({
  navMain,
  socialLinks,
  ...props
}: AppSidebarProps) {
  const pathname = usePathname();

  return (
    <Sidebar variant="floating" {...props}>
      <SidebarHeader className="items-center gap-4 pt-10 pb-2">
        <div className="relative">
          <Avatar className="relative size-45 ring-2 ring-sidebar-primary/30">
            <AvatarImage src="/profile.jpg" alt="Alex Heck" />
            <AvatarFallback className="bg-sidebar-accent text-2xl font-heading font-bold text-sidebar-primary">
              AH
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col items-center gap-1 leading-none">
          <span className="font-heading text-3xl font-bold tracking-tight text-sidebar-foreground">
            Alex Heck
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-sidebar-primary">
            Engineering Manager
          </span>
        </div>
      </SidebarHeader>

      <SidebarSeparator className="mx-0 my-4 bg-sidebar-border/60" />

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-0.5 px-2">
            {navMain.map((item) => {
              const Icon = icons[item.icon];
              const isActive =
                item.url === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.url);
              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    isActive={isActive}
                    render={<Link href={item.url} />}
                    className={
                      isActive
                        ? "bg-sidebar-primary/10 text-sidebar-primary font-semibold"
                        : ""
                    }
                  >
                    {Icon && (
                      <Icon
                        className={`size-4 ${isActive ? "text-sidebar-primary" : ""}`}
                      />
                    )}
                    <span>{item.title}</span>
                    {isActive && (
                      <span className="ml-auto h-1.5 w-1.5 rounded-full bg-sidebar-primary" />
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarSeparator className="mx-0 bg-sidebar-border/60" />

      <SidebarFooter className="flex-row items-center justify-center gap-1 py-4">
        {socialLinks.map((link) => {
          const Icon = socialIcons[link.icon];
          return (
            <Tooltip key={link.label}>
              <TooltipTrigger
                render={
                  <Button
                    variant="ghost"
                    size="icon"
                    nativeButton={false}
                    className="text-sidebar-foreground/60 hover:text-sidebar-primary hover:bg-sidebar-accent"
                    render={
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    }
                  />
                }
              >
                {Icon && <Icon className="size-4" />}
                <span className="sr-only">{link.label}</span>
              </TooltipTrigger>
              <TooltipContent>{link.label}</TooltipContent>
            </Tooltip>
          );
        })}
      </SidebarFooter>
    </Sidebar>
  );
}
