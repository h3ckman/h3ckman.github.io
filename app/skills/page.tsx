import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const skillGroups = [
  {
    title: "Languages",
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
    skills: [
      "MSSQL / PostgreSQL / MySQL / Redis",
      "REST APIs / GraphQL",
      "Entity Framework / Prisma / TypeORM",
      "Data modeling & query optimization",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Visual Studio / VS Code",
      "Xcode / Android Studio",
      "Jira / Confluence",
      "Figma",
    ],
  },
  {
    title: "Soft Skills",
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
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Skills</h1>
        <p className="text-muted-foreground">
          Technical skills and competencies
        </p>
      </div>
      <Separator />
      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <Card key={group.title}>
            <CardHeader>
              <CardTitle className="text-base">{group.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
