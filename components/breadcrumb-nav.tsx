"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const labels: Record<string, string> = {
  "/": "About",
  "/experience": "Experience",
  "/projects": "Projects",
  "/skills": "Skills",
};

export function BreadcrumbNav() {
  const pathname = usePathname();
  const label = labels[pathname] ?? pathname.replace("/", "");
  const isHome = pathname === "/";

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {!isHome && (
          <>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
          </>
        )}
        <BreadcrumbItem>
          <BreadcrumbPage>{label}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
