"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
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

const icons: Record<string, LucideIcon> = {
  user: UserIcon,
  briefcase: BriefcaseIcon,
  "folder-open": FolderOpenIcon,
  wrench: WrenchIcon,
};

export type NavItem = {
  title: string;
  url: string;
  icon: string;
};

export type SocialLink = {
  label: string;
  url: string;
  icon: string;
};

function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

type SocialIconComponent = React.FC<React.SVGProps<SVGSVGElement>> | LucideIcon;

const socialIcons: Record<string, SocialIconComponent> = {
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
          <Avatar className="relative size-34 ring-2 ring-sidebar-primary/30">
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
                    render={<a href={item.url} />}
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
