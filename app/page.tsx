import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BriefcaseIcon,
  MessageSquareIcon,
  ArrowRightIcon,
  FolderOpenIcon,
  WrenchIcon,
} from "lucide-react";

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "3", label: "Companies" },
  { value: "6", label: "Engineers Managed" },
  { value: "5+", label: "Major Products" },
];

const navCards = [
  {
    title: "Experience",
    href: "/experience",
    icon: BriefcaseIcon,
    desc: "Professional journey",
  },
  {
    title: "Projects",
    href: "/projects",
    icon: FolderOpenIcon,
    desc: "Notable work",
  },
  {
    title: "Skills",
    href: "/skills",
    icon: WrenchIcon,
    desc: "Technical toolkit",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-12 pb-8">
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden pt-4">
        {/* Decorative elements */}
        <div className="pointer-events-none absolute -right-20 -top-10 h-72 w-72 rounded-full bg-accent/[0.06] blur-2xl" />
        <div className="animate-float pointer-events-none absolute right-4 top-8 h-32 w-32 rounded-full border border-accent/[0.12]" />
        <div
          className="animate-float pointer-events-none absolute right-20 top-28 h-20 w-20 rounded-full border border-accent/[0.08]"
          style={{ animationDelay: "2s" }}
        />

        <div className="relative animate-in fade-in slide-in-from-bottom-6 fill-mode-backwards duration-700 space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            Hello, I&apos;m
          </p>
          <h1 className="font-heading text-6xl font-black leading-[0.88] tracking-tight md:text-8xl">
            <span className="animate-gradient-x bg-gradient-to-r from-foreground via-accent to-foreground bg-[length:200%_auto] bg-clip-text text-transparent">
              Alex
            </span>
            <br />
            <span>Heck</span>
          </h1>
          <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
            Software Engineering Manager at{" "}
            <span className="font-semibold text-foreground">Copeland LP</span>
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {[
              "10+ Years",
              "Engineering Leader",
              "Full Stack to Management",
              "IoT & Enterprise",
            ].map((label) => (
              <Badge
                key={label}
                variant="outline"
                className="border-accent/25 bg-accent/[0.06] px-3 py-1 text-xs font-medium"
              >
                {label}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Row ── */}
      <section
        className="animate-in fade-in slide-in-from-bottom-6 fill-mode-backwards duration-700"
        style={{ animationDelay: "150ms" }}
      >
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border/60 bg-card/60 p-5 text-center backdrop-blur-sm transition-colors hover:border-accent/20"
            >
              <div className="font-heading text-3xl font-bold text-accent">
                {stat.value}
              </div>
              <div className="mt-1.5 text-[0.7rem] font-medium uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Separator className="bg-border/50" />

      {/* ── Content Cards ── */}
      <section
        className="animate-in fade-in slide-in-from-bottom-6 fill-mode-backwards duration-700 grid gap-6 sm:grid-cols-2"
        style={{ animationDelay: "250ms" }}
      >
        <Card className="border-t-2 border-t-accent/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-heading text-base">
              <div className="flex size-7 items-center justify-center rounded-md bg-accent/10">
                <BriefcaseIcon className="size-3.5 text-accent" />
              </div>
              Background
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-relaxed text-foreground/75">
            <p>
              I&apos;m a Software Engineering Manager at Copeland LP with over a
              decade of experience building software and leading engineering
              teams. Throughout my career, I&apos;ve had the privilege of
              working with talented people across a handful of companies, and
              I&apos;ve consistently gravitated toward environments that reward
              strong collaboration, creative problem-solving, and a genuine
              appetite for learning.
            </p>
            <p>
              Whether it&apos;s architecting a new system, mentoring engineers,
              or diving into a tricky debugging session, I find the most
              fulfillment in work that pushes me to grow alongside the people
              around me. I believe the best software comes from teams that
              communicate well, challenge each other&apos;s ideas, and stay
              curious.
            </p>
          </CardContent>
        </Card>
        <Card className="border-t-2 border-t-accent/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-heading text-base">
              <div className="flex size-7 items-center justify-center rounded-md bg-accent/10">
                <MessageSquareIcon className="size-3.5 text-accent" />
              </div>
              Let&apos;s Connect
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-relaxed text-foreground/75">
            <p>
              This site is a living snapshot of my professional journey — feel
              free to explore the sections below or use the sidebar to navigate.
              I had a lot of fun putting this together, and I hope you enjoy
              browsing it as much as I enjoyed building it.
            </p>
            <p>
              While I am not actively seeking new opportunities at the moment,
              I&apos;m always open to connecting with fellow engineers,
              discussing potential collaborations, or just chatting about all
              things software. If you&apos;d like to reach out, feel free to
              connect with me through the links in the sidebar.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* ── Navigation Cards ── */}
      <section
        className="animate-in fade-in slide-in-from-bottom-6 fill-mode-backwards duration-700"
        style={{ animationDelay: "400ms" }}
      >
        <div className="grid gap-3 sm:grid-cols-3">
          {navCards.map((nav) => (
            <a
              key={nav.title}
              href={nav.href}
              className="group flex items-center gap-4 rounded-xl border border-border/60 bg-card/40 p-4 transition-all duration-200 hover:border-accent/30 hover:bg-card hover:shadow-lg hover:shadow-accent/[0.04]"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent/[0.08] transition-colors group-hover:bg-accent/15">
                <nav.icon className="size-5 text-muted-foreground transition-colors group-hover:text-accent" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-heading text-sm font-semibold">
                  {nav.title}
                </div>
                <div className="text-xs text-muted-foreground">{nav.desc}</div>
              </div>
              <ArrowRightIcon className="size-4 shrink-0 text-muted-foreground/40 transition-all group-hover:translate-x-0.5 group-hover:text-accent" />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
