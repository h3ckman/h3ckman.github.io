import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

const companies = [
  {
    name: "Copeland",
    borderColor: "border-l-amber-500",
    dotColor: "bg-amber-500",
    labelColor: "text-amber-600 dark:text-amber-400",
    roles: [
      {
        title: "Software Engineering Manager",
        period: "2024 – Present",
        current: true,
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
        period: "2022 – 2024",
        current: false,
        bullets: [
          "Served as a native mobile engineer on the Sensi smart thermostat team, supporting the development, release, and deployment of the Sensi Touch 2 — an ENERGY STAR-certified smart thermostat used by millions of homeowners for remote climate control, energy optimization, and smart home integration",
          "Made key architectural and UX decisions that directly impacted the installation flow and daily interactions for the entire Sensi user base, ensuring a seamless experience across device setup, scheduling, and system monitoring",
          "Contributed to the Verdant smart thermostat platform, an AI-powered energy management system for the hospitality industry that uses embedded deep learning to reduce HVAC runtime by up to 45% in unoccupied hotel rooms",
          "Led technical design discussions and code reviews, establishing best practices and coding standards across both product teams",
          "Collaborated cross-functionally with product, QA, and firmware teams to coordinate releases spanning mobile apps, thermostat firmware, and cloud services",
        ],
      },
    ],
  },
  {
    name: "Mile Two",
    borderColor: "border-l-emerald-500",
    dotColor: "bg-emerald-500",
    labelColor: "text-emerald-600 dark:text-emerald-400",
    roles: [
      {
        title: "Software Engineer",
        period: "2020 – 2022",
        current: false,
        bullets: [
          "Developed software and DevOps solutions as a government contractor using Node, React, Postgres, and Kubernetes",
          "Built an AI/ML web tool enabling data scientists to rapidly provision and manage compute resources on an on-premise Kubernetes cluster",
          "Worked in agile teams to rapidly prototype and iterate on solutions, incorporating client feedback throughout the development lifecycle",
        ],
      },
    ],
  },
  {
    name: "Speedway",
    borderColor: "border-l-sky-500",
    dotColor: "bg-sky-500",
    labelColor: "text-sky-600 dark:text-sky-400",
    roles: [
      {
        title: "Solutions Architect",
        period: "2020",
        current: false,
        bullets: [
          "Provided technical leadership and strategy while tailoring software processes to meet specific business needs",
          "Led the IT organization in integrating the DoorDash mobile delivery solution, coordinating across multiple integration points including backoffice inventory management, data warehouse storage, and accounting system payment reconciliation",
        ],
      },
      {
        title: "Full Stack Engineer",
        period: "2017 – 2020",
        current: false,
        bullets: [
          "Designed and developed front-end and back-end solutions for numerous web applications, mobile apps, and IoT solutions as part of the Emerging Technologies team",
          "Prototyped various IoT devices for corporate and store environments spanning energy management, video analytics, and inventory management — one solution gained company-wide recognition and was submitted for a patent",
          "Worked on the Speedy Rewards customer-facing loyalty device, designing and implementing a self-checkout solution built with WPF in Visual Studio",
        ],
      },
      {
        title: "iOS Developer",
        period: "2015 – 2017",
        current: false,
        bullets: [
          "Designed, developed, and released Speedway's internal and customer-facing mobile applications",
          "Spearheaded the development team that built the company's field-management mobile application, enabling employees to better manage their stores — this application went on to win Dayton's Technology First award in 2018",
        ],
      },
    ],
  },
];

export default function ExperiencePage() {
  let animIndex = 0;

  return (
    <div className="mx-auto max-w-4xl space-y-10 pb-8">
      {/* ── Header ── */}
      <div className="animate-in fade-in slide-in-from-bottom-6 fill-mode-backwards duration-700 space-y-3">
        <h1 className="font-heading text-4xl font-black tracking-tight md:text-5xl">
          Experience
        </h1>
        <p className="max-w-lg text-muted-foreground">
          A decade of building software and leading engineering teams across
          enterprise platforms, consumer products, and government contracts.
        </p>
      </div>

      <Separator className="bg-border/50" />

      {/* ── Timeline ── */}
      <div className="relative space-y-10">
        {/* Background decorative dots */}
        <div className="dot-pattern pointer-events-none absolute -left-4 top-0 h-full w-8 opacity-40" />

        {companies.map((company) => {
          const companyIndex = animIndex;
          return (
            <div key={company.name} className="relative space-y-4">
              {/* Company Label */}
              <AnimateOnScroll delay={companyIndex * 80}>
                <div
                  className={`flex items-center gap-3 ${company.labelColor}`}
                >
                  <div
                    className={`h-px flex-1 max-w-8 ${company.dotColor} opacity-20`}
                  />
                  <span className="text-xs font-bold uppercase tracking-[0.2em]">
                    {company.name}
                  </span>
                  <div
                    className={`h-px flex-1 ${company.dotColor} opacity-20 mask-r-from-50%`}
                  />
                </div>
              </AnimateOnScroll>

              {/* Roles */}
              <div className="space-y-4 pl-4">
                {company.roles.map((role) => {
                  const idx = animIndex++;
                  return (
                    <AnimateOnScroll
                      key={`${company.name}-${role.title}`}
                      delay={idx * 80 + 40}
                    >
                      <Card
                        className={`border-l-[3px] ${company.borderColor} transition-shadow hover:shadow-md`}
                      >
                        <CardHeader>
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <CardTitle className="font-heading text-lg">
                              {role.title}
                            </CardTitle>
                            <div className="flex items-center gap-2">
                              {role.current && (
                                <span className="relative flex size-2">
                                  <span className="animate-ping absolute inline-flex size-full rounded-full bg-emerald-400 opacity-75 shadow-[0_0_6px_2px] shadow-emerald-400/30" />
                                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                                </span>
                              )}
                              <Badge
                                variant="secondary"
                                className={
                                  role.current
                                    ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"
                                    : ""
                                }
                              >
                                {role.period}
                              </Badge>
                            </div>
                          </div>
                          <CardDescription>{company.name}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2.5 text-sm leading-relaxed text-foreground/75">
                            {role.bullets.map((bullet, j) => (
                              <li key={j} className="flex gap-2.5">
                                <span
                                  className={`mt-2 h-1 w-1 shrink-0 rounded-full ${company.dotColor} opacity-50`}
                                />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </AnimateOnScroll>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
