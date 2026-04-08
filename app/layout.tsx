import type { Metadata } from "next";
import { Source_Serif_4, Manrope } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { AppSidebar, NavItem, SocialLink } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { ThemeToggle } from "@/components/theme-toggle";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex Heck",
  description: "Software Engineering Manager at Copeland",
};

const navMain: NavItem[] = [
  { title: "About", url: "/", icon: "user" },
  { title: "Experience", url: "/experience", icon: "briefcase" },
  { title: "Projects", url: "/projects", icon: "folder-open" },
  { title: "Skills", url: "/skills", icon: "wrench" },
];

const socialLinks: SocialLink[] = [
  { label: "GitHub", url: "#", icon: "github" },
  { label: "LinkedIn", url: "#", icon: "linkedin" },
  { label: "Email", url: "#", icon: "mail" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("font-sans", sourceSerif.variable, manrope.variable)}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme:dark)").matches))document.documentElement.classList.add("dark")}catch(e){}})()`,
          }}
        />
      </head>
      <body>
        <SidebarProvider
          style={
            {
              "--sidebar-width": "19rem",
            } as React.CSSProperties
          }
        >
          <TooltipProvider>
            <AppSidebar navMain={navMain} socialLinks={socialLinks} />
            <SidebarInset>
              <header className="flex h-14 shrink-0 items-center gap-2 border-b border-border/40 px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator
                  orientation="vertical"
                  className="mr-2 data-vertical:h-4 data-vertical:self-auto"
                />
                <BreadcrumbNav />
                <div className="ml-auto">
                  <ThemeToggle />
                </div>
              </header>
              <div className="flex flex-1 flex-col gap-4 p-6 pt-6">
                {children}
              </div>
            </SidebarInset>
          </TooltipProvider>
        </SidebarProvider>
      </body>
    </html>
  );
}
