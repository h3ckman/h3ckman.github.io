import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { SparklesIcon } from "lucide-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

const projects = [
  {
    title: "Connect+",
    featured: true,
    accent: "from-amber-500/15 to-amber-500/0",
    badgeColor: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20",
    description:
      "Copeland's enterprise management software, Connect+ seamlessly connects and actively manages multi-site food retail operations for supermarkets, convenience stores, and restaurants. Backed by Copeland's deep domain expertise in refrigeration, IoT, and facility management, the platform provides near real-time access to critical information — helping retailers like Amazon, Walmart, and Target immediately track, triage, and respond to issues across hundreds or thousands of sites from a centralized location.",
    tech: ["Java", "Spring Boot", "React", "Azure", "Kubernetes"],
    highlights: [
      "Lead a team of 6 engineers driving technical strategy and delivery across core platform modules including advisory management, energy optimization, condition-based maintenance, HACCP food quality reporting, and setpoint management",
      "Full-ecosystem integration — Copeland uniquely owns the hardware and software, connecting refrigeration controllers and IoT devices to the cloud for comprehensive data acquisition, analytics, and machine learning-driven insights",
      "Enterprise-scale impact — enabling push updates to thousands of sites in hours instead of days, real-time alarm visibility and triage, and color-coded network maps for at-a-glance multi-site performance evaluation",
    ],
  },
  {
    title: "Sensi Smart Thermostat",
    featured: false,
    accent: "from-emerald-500/15 to-emerald-500/0",
    badgeColor: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20",
    description:
      "Sensi is Copeland's consumer smart thermostat platform, backed by 100+ years of HVAC expertise. The flagship Sensi Touch 2 — the thinnest smart thermostat on the market — serves millions of homeowners with an ENERGY STAR-certified device that saves approximately 23% on HVAC energy costs.",
    tech: ["Swift", "Kotlin", "iOS", "Android"],
    highlights: [
      "Served as a native mobile engineer on the Sensi Touch 2, contributing to the development, release, and deployment of the top-rated Sensi mobile app",
      "Made key architectural and UX decisions that directly impacted the installation flow and daily interactions for millions of users",
      "Delivered across the full product lifecycle — from feature development and release management to App Store deployment",
    ],
  },
  {
    title: "AI/ML Resource Manager",
    featured: false,
    accent: "from-violet-500/15 to-violet-500/0",
    badgeColor: "bg-violet-500/10 text-violet-700 dark:text-violet-400 border-violet-500/20",
    description:
      "A web-based tool built for data scientists to rapidly provision and manage compute resources on an on-premise Kubernetes cluster. The platform streamlined the ML workflow by giving researchers self-service access to GPU instances, Jupyter environments, and training pipelines.",
    tech: ["Node.js", "React", "PostgreSQL", "Kubernetes", "Docker"],
    highlights: [
      "Built the full-stack application enabling data scientists to self-provision compute resources without DevOps intervention",
      "Designed the Kubernetes integration layer for dynamic resource allocation, scaling, and lifecycle management of ML workloads",
      "Worked in agile teams to rapidly prototype and iterate on solutions, incorporating client feedback throughout the development lifecycle",
    ],
  },
  {
    title: "DoorDash Delivery Integration",
    featured: false,
    accent: "from-orange-500/15 to-orange-500/0",
    badgeColor: "bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20",
    description:
      "Led the enterprise-wide integration of DoorDash's mobile delivery platform for Speedway's convenience store network. The project spanned multiple business systems and required coordinating across backoffice inventory management, data warehouse storage, and accounting system payment reconciliation.",
    tech: ["REST APIs", "SQL", "Data Integration", "System Architecture"],
    highlights: [
      "Led the IT organization through the end-to-end integration, coordinating across multiple internal and external teams",
      "Designed the data flow architecture connecting DoorDash's platform to Speedway's inventory, warehouse, and accounting systems",
      "Managed cross-functional stakeholders to align business requirements with technical implementation across all integration points",
    ],
  },
  {
    title: "IoT Prototypes & Speedy Rewards",
    featured: false,
    accent: "from-sky-500/15 to-sky-500/0",
    badgeColor: "bg-sky-500/10 text-sky-700 dark:text-sky-400 border-sky-500/20",
    description:
      "A series of innovative IoT and customer-facing solutions developed as part of Speedway's Emerging Technologies team. Projects ranged from energy management and video analytics devices for store operations to the Speedy Rewards loyalty device.",
    tech: ["WPF", "C#", ".NET", "IoT", "Visual Studio"],
    highlights: [
      "Prototyped various IoT devices for corporate and store environments spanning energy management, video analytics, and inventory management — one solution was submitted for a patent",
      "Designed and implemented the Speedy Rewards customer-facing loyalty device as a self-checkout solution built with WPF",
      "Spearheaded the field-management mobile application, which went on to win Dayton's Technology First award in 2018",
    ],
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <AnimateOnScroll delay={(index + 1) * 100}>
    <Card
      className={`group overflow-hidden transition-all hover:shadow-lg hover:shadow-accent/[0.04] hover:ring-1 hover:ring-accent/10 ${project.featured ? "card-shine" : ""}`}
    >
      {/* Gradient accent bar */}
      <div
        className={`h-1 bg-gradient-to-r ${project.accent}`}
      />
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="font-heading text-lg">
            {project.title}
          </CardTitle>
          {project.featured && (
            <Badge className={`shrink-0 gap-1 ${project.badgeColor} border`}>
              <SparklesIcon className="size-3" />
              Featured
            </Badge>
          )}
        </div>
        <CardDescription className="text-sm leading-relaxed">
          {project.description}
        </CardDescription>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tech.map((t) => (
            <Badge
              key={t}
              variant="outline"
              className="border-border/60 bg-muted/40 text-[0.7rem] font-medium"
            >
              {t}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2.5 text-sm leading-relaxed text-foreground/75">
          {project.highlights.map((highlight, i) => (
            <li key={i} className="flex gap-2.5">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/50" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
    </AnimateOnScroll>
  );
}

export default function ProjectsPage() {
  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <div className="mx-auto max-w-4xl space-y-10 pb-8">
      {/* ── Header ── */}
      <div className="animate-in fade-in slide-in-from-bottom-6 fill-mode-backwards duration-700 space-y-3">
        <h1 className="font-heading text-4xl font-black tracking-tight md:text-5xl">
          Projects
        </h1>
        <p className="max-w-lg text-muted-foreground">
          Notable projects and contributions spanning enterprise platforms,
          consumer IoT, and emerging technologies.
        </p>
      </div>

      <Separator className="bg-border/50" />

      {/* ── Featured Project ── */}
      <ProjectCard project={featured} index={0} />

      {/* ── Other Projects Grid ── */}
      <div className="grid gap-6 md:grid-cols-2">
        {rest.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i + 1} />
        ))}
      </div>
    </div>
  );
}
