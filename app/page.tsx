import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BriefcaseIcon,
  MessageSquareIcon,
  ArrowRightIcon,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div className="animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards animation-duration-500 space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">About Me</h1>
        <p className="text-muted-foreground">
          Software Engineering Manager at Copeland LP
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">10+ Years Experience</Badge>
          <Badge variant="secondary">Team Lead</Badge>
          <Badge variant="secondary">Full Stack to Management</Badge>
          <Badge variant="secondary">IoT &amp; Enterprise</Badge>
        </div>
      </div>
      <Separator />
      <div className="animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards animation-duration-500 delay-150 grid gap-6 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <BriefcaseIcon className="size-4 text-muted-foreground" />
              Background
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-relaxed text-foreground/80">
            <p>
              I&apos;m a Software Engineering Manager at Copeland LP with over a
              decade of experience building software and leading engineering
              teams. Throughout my career, I&apos;ve had the privilege of working
              with talented people across a handful of companies, and I&apos;ve
              consistently gravitated toward environments that reward strong
              collaboration, creative problem-solving, and a genuine appetite for
              learning.
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
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <MessageSquareIcon className="size-4 text-muted-foreground" />
              Let&apos;s Connect
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-relaxed text-foreground/80">
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
      </div>
      <div className="animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards animation-duration-500 delay-300 flex flex-wrap gap-3">
        <Button variant="outline" render={<a href="/experience" />}>
          Experience
          <ArrowRightIcon className="size-4" />
        </Button>
        <Button variant="outline" render={<a href="/projects" />}>
          Projects
          <ArrowRightIcon className="size-4" />
        </Button>
        <Button variant="outline" render={<a href="/skills" />}>
          Skills
          <ArrowRightIcon className="size-4" />
        </Button>
      </div>
    </div>
  );
}
