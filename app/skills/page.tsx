import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  CodeIcon,
  LayersIcon,
  CloudIcon,
  GitBranchIcon,
  DatabaseIcon,
  WrenchIcon,
  UsersIcon,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

type SkillGroup = {
  title: string;
  icon: LucideIcon;
  color: string;
  iconBg: string;
  skills: string[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    icon: CodeIcon,
    color: "border-l-blue-500",
    iconBg: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    skills: [
      "TypeScript / JavaScript",
      "Kotlin",
      "Swift",
      "Java",
      "Python",
      "SQL",
      "HTML / CSS / SCSS / Tailwind CSS",
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: LayersIcon,
    color: "border-l-violet-500",
    iconBg: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "shadcn/ui",
      "Material UI",
      "Radix UI",
      "React Native",
      "Spring / Spring Boot",
      "Jetpack Compose",
      "SwiftUI / UIKit",
      "WPF / .NET / ASP.NET",
      "Express / Fastify / NestJS",
      "Jest / Vitest / JUnit / XCTest",
      "Webpack / Vite / Turborepo",
      "Storybook",
      "Redux / React Query",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    icon: CloudIcon,
    color: "border-l-sky-500",
    iconBg: "bg-sky-500/10 text-sky-600 dark:text-sky-400",
    skills: [
      "Microsoft Azure",
      "App Services / Functions",
      "Blob Storage / Service Bus",
      "Key Vault / Application Insights",
      "Docker",
      "Kubernetes",
      "Nginx",
      "Linux",
    ],
  },
  {
    title: "DevOps & CI/CD",
    icon: GitBranchIcon,
    color: "border-l-emerald-500",
    iconBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    skills: [
      "Azure DevOps",
      "Jenkins",
      "GitHub Actions",
      "Git / GitFlow",
      "Automated testing & deployment",
    ],
  },
  {
    title: "Data & APIs",
    icon: DatabaseIcon,
    color: "border-l-orange-500",
    iconBg: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
    skills: [
      "MSSQL / PostgreSQL / MySQL / Redis",
      "REST APIs / GraphQL",
      "Entity Framework / Prisma / TypeORM",
      "Data modeling & query optimization",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: WrenchIcon,
    color: "border-l-rose-500",
    iconBg: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
    skills: [
      "Visual Studio / VS Code",
      "Xcode / Android Studio",
      "Jira / Confluence",
      "Figma",
    ],
  },
  {
    title: "Soft Skills",
    icon: UsersIcon,
    color: "border-l-amber-500",
    iconBg: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    skills: [
      "Engineering management & mentorship",
      "Technical leadership & architecture",
      "Cross-team collaboration",
      "Agile / Scrum methodology",
      "Stakeholder communication & roadmap planning",
    ],
  },
];

export default function SkillsPage() {
  // Languages and Frameworks get full-width treatment
  const featured = skillGroups.slice(0, 2);
  const grid = skillGroups.slice(2);

  return (
    <div className="mx-auto max-w-4xl space-y-10 pb-8">
      {/* ── Header ── */}
      <div className="animate-in fade-in slide-in-from-bottom-6 fill-mode-backwards duration-700 space-y-3">
        <h1 className="font-heading text-4xl font-black tracking-tight md:text-5xl">
          Skills & Expertise
        </h1>
        <p className="max-w-lg text-muted-foreground">
          A technical toolkit refined over a decade of building across mobile,
          web, cloud, and IoT platforms.
        </p>
      </div>

      <Separator className="bg-border/50" />

      {/* ── Featured Categories (full-width) ── */}
      <div className="space-y-5">
        {featured.map((group, i) => {
          const Icon = group.icon;
          return (
            <AnimateOnScroll key={group.title} delay={(i + 1) * 80}>
              <Card
                className={`border-l-[3px] ${group.color} transition-shadow hover:shadow-md`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2.5 font-heading text-base">
                      <div
                        className={`flex size-7 items-center justify-center rounded-md ${group.iconBg}`}
                      >
                        <Icon className="size-3.5" />
                      </div>
                      {group.title}
                    </CardTitle>
                    <span className="text-xs font-medium text-muted-foreground">
                      {group.skills.length} skills
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="px-2.5 py-0.5 text-xs font-medium transition-all duration-150 hover:bg-accent/20 hover:scale-105 active:scale-95"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          );
        })}
      </div>

      {/* ── Grid Categories ── */}
      <div className="grid gap-5 sm:grid-cols-2">
        {grid.map((group, i) => {
          const Icon = group.icon;
          return (
            <AnimateOnScroll key={group.title} delay={(i + 3) * 80}>
              <Card
                className={`border-l-[3px] ${group.color} transition-shadow hover:shadow-md`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2.5 font-heading text-base">
                      <div
                        className={`flex size-7 items-center justify-center rounded-md ${group.iconBg}`}
                      >
                        <Icon className="size-3.5" />
                      </div>
                      {group.title}
                    </CardTitle>
                    <span className="text-xs font-medium text-muted-foreground">
                      {group.skills.length}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="px-2.5 py-0.5 text-xs font-medium transition-all duration-150 hover:bg-accent/10 hover:text-accent-foreground hover:scale-105 active:scale-95"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          );
        })}
      </div>
    </div>
  );
}
