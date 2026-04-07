import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const projects = [
  {
    title: "Connect+",
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
    description:
      "Sensi is Copeland's consumer smart thermostat platform, backed by 100+ years of HVAC expertise. The flagship Sensi Touch 2 — the thinnest smart thermostat on the market — serves millions of homeowners with an ENERGY STAR-certified device that saves approximately 23% on HVAC energy costs. The platform features geofencing, flexible weekly scheduling, smart alerts for temperature and humidity anomalies, usage reports, and maintenance reminders. Compatible with room and outdoor sensors via Sensi Connect, and integrated with Alexa, Google Home, and Samsung SmartThings for voice control and automated routines.",
    tech: ["Swift", "Kotlin", "iOS", "Android"],
    highlights: [
      "Served as a native mobile engineer on the Sensi Touch 2, contributing to the development, release, and deployment of the top-rated Sensi mobile app — the primary interface for step-by-step device installation, remote climate programming, geofencing, and energy usage analytics",
      "Made key architectural and UX decisions that directly impacted the installation flow and daily interactions for millions of users — most installations complete in under 30 minutes with the app's guided setup, fitting a traditional thermostat footprint with no wall modifications required",
      "Delivered across the full product lifecycle — from feature development and release management to App Store deployment, coordinating with firmware and cloud service teams to ensure reliable end-to-end thermostat connectivity across single-stage, multi-stage, and heat pump systems",
    ],
  },
  {
    title: "AI/ML Resource Manager",
    description:
      "A web-based tool built for data scientists to rapidly provision and manage compute resources on an on-premise Kubernetes cluster. The platform streamlined the ML workflow by giving researchers self-service access to GPU instances, Jupyter environments, and training pipelines — eliminating weeks of manual infrastructure setup and enabling faster experimentation cycles.",
    tech: ["Node.js", "React", "PostgreSQL", "Kubernetes", "Docker"],
    highlights: [
      "Built the full-stack application enabling data scientists to self-provision compute resources without DevOps intervention",
      "Designed the Kubernetes integration layer for dynamic resource allocation, scaling, and lifecycle management of ML workloads",
      "Worked in agile teams to rapidly prototype and iterate on solutions, incorporating client feedback throughout the development lifecycle",
    ],
  },
  {
    title: "DoorDash Delivery Integration",
    description:
      "Led the enterprise-wide integration of DoorDash's mobile delivery platform for Speedway's convenience store network. The project spanned multiple business systems and required coordinating across backoffice inventory management, data warehouse storage, and accounting system payment reconciliation to enable seamless on-demand delivery for customers.",
    tech: ["REST APIs", "SQL", "Data Integration", "System Architecture"],
    highlights: [
      "Led the IT organization through the end-to-end integration, coordinating across multiple internal and external teams",
      "Designed the data flow architecture connecting DoorDash's platform to Speedway's inventory, warehouse, and accounting systems",
      "Managed cross-functional stakeholders to align business requirements with technical implementation across all integration points",
    ],
  },
  {
    title: "IoT Prototypes & Speedy Rewards",
    description:
      "A series of innovative IoT and customer-facing solutions developed as part of Speedway's Emerging Technologies team. Projects ranged from energy management and video analytics devices for store operations to the Speedy Rewards loyalty device — a customer-facing self-checkout terminal used across the convenience store chain.",
    tech: ["WPF", "C#", ".NET", "IoT", "Visual Studio"],
    highlights: [
      "Prototyped various IoT devices for corporate and store environments spanning energy management, video analytics, and inventory management — one solution was submitted for a patent",
      "Designed and implemented the Speedy Rewards customer-facing loyalty device as a self-checkout solution built with WPF",
      "Spearheaded the field-management mobile application, which went on to win Dayton's Technology First award in 2018",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div className="animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards animation-duration-500 space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <p className="text-muted-foreground">
          Notable projects and contributions
        </p>
      </div>
      <Separator />
      <div className="space-y-6">
        {projects.map((project, i) => (
          <Card
            key={project.title}
            className="animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards animation-duration-500"
            style={{ animationDelay: `${(i + 1) * 100}ms` }}
          >
            <CardHeader>
              <CardTitle className="text-lg">{project.title}</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                {project.description}
              </CardDescription>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.tech.map((t) => (
                  <Badge key={t} variant="outline" className="text-xs">
                    {t}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-foreground/80">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/50" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
