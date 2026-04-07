import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const roles = [
  {
    title: "Software Engineering Manager",
    company: "Copeland",
    period: "2024 – Present",
    bullets: [
      "Lead a team of 6 engineers building Copeland Connect+, an enterprise management platform that helps major retailers like Amazon, Walmart, and Target remotely monitor, manage, and optimize their multi-site HVACR operations in near real-time",
      "Drive technical strategy and delivery for a product that sits at the intersection of software and hardware — Copeland uniquely owns the full ecosystem, from refrigeration and facility management components to the cloud-connected software layer providing data acquisition, analytics, and actionable insights",
      "Oversee development of core platform capabilities including advisory management and alarm triage, energy optimization, condition-based maintenance, food quality compliance reporting, and setpoint management across thousands of connected sites",
      "Foster a culture of collaboration, code quality, and continuous improvement through regular 1:1s, sprint retrospectives, and knowledge-sharing sessions",
      "Partner with product management and stakeholders to define roadmaps, prioritize features, and align engineering efforts with business objectives",
      "Mentor and grow engineers across multiple levels, supporting career development and building a high-performing team",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Copeland",
    period: "2022 – 2024",
    bullets: [
      "Served as a native mobile engineer on the Sensi smart thermostat team, supporting the development, release, and deployment of the Sensi Touch 2 — an ENERGY STAR-certified smart thermostat used by millions of homeowners for remote climate control, energy optimization, and smart home integration",
      "Made key architectural and UX decisions that directly impacted the installation flow and daily interactions for the entire Sensi user base, ensuring a seamless experience across device setup, scheduling, and system monitoring",
      "Contributed to the Verdant smart thermostat platform, an AI-powered energy management system for the hospitality industry that uses embedded deep learning to reduce HVAC runtime by up to 45% in unoccupied hotel rooms",
      "Led technical design discussions and code reviews, establishing best practices and coding standards across both product teams",
      "Collaborated cross-functionally with product, QA, and firmware teams to coordinate releases spanning mobile apps, thermostat firmware, and cloud services",
    ],
  },
  {
    title: "Software Engineer",
    company: "Mile Two",
    period: "2020 – 2022",
    bullets: [
      "Developed software and DevOps solutions as a government contractor using Node, React, Postgres, and Kubernetes",
      "Built an AI/ML web tool enabling data scientists to rapidly provision and manage compute resources on an on-premise Kubernetes cluster",
      "Worked in agile teams to rapidly prototype and iterate on solutions, incorporating client feedback throughout the development lifecycle",
    ],
  },
  {
    title: "Solutions Architect",
    company: "Speedway",
    period: "2020",
    bullets: [
      "Provided technical leadership and strategy while tailoring software processes to meet specific business needs",
      "Led the IT organization in integrating the DoorDash mobile delivery solution, coordinating across multiple integration points including backoffice inventory management, data warehouse storage, and accounting system payment reconciliation",
    ],
  },
  {
    title: "Full Stack Engineer",
    company: "Speedway",
    period: "2017 – 2020",
    bullets: [
      "Designed and developed front-end and back-end solutions for numerous web applications, mobile apps, and IoT solutions as part of the Emerging Technologies team",
      "Prototyped various IoT devices for corporate and store environments spanning energy management, video analytics, and inventory management — one solution gained company-wide recognition and was submitted for a patent",
      "Worked on the Speedy Rewards customer-facing loyalty device, designing and implementing a self-checkout solution built with WPF in Visual Studio",
    ],
  },
  {
    title: "iOS Developer",
    company: "Speedway",
    period: "2015 – 2017",
    bullets: [
      "Designed, developed, and released Speedway's internal and customer-facing mobile applications",
      "Spearheaded the development team that built the company's field-management mobile application, enabling employees to better manage their stores — this application went on to win Dayton's Technology First award in 2018",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Experience</h1>
        <p className="text-muted-foreground">
          Professional work history and accomplishments
        </p>
      </div>
      <Separator />
      <div className="space-y-6">
        {roles.map((role) => (
          <Card key={`${role.company}-${role.title}`}>
            <CardHeader>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <CardTitle className="text-lg">{role.title}</CardTitle>
                <Badge variant="secondary">{role.period}</Badge>
              </div>
              <CardDescription>{role.company}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-foreground/80">
                {role.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/50" />
                    <span>{bullet}</span>
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
