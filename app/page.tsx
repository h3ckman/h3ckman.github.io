import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">About Me</h1>
        <p className="text-muted-foreground">
          Software Engineering Manager at Copeland LP
        </p>
      </div>
      <Separator />
      <div className="space-y-4 text-[15px] leading-relaxed text-foreground/90">
        <p>
          I&apos;m a Software Engineering Manager at Copeland LP with over a
          decade of experience building software and leading engineering teams.
          Throughout my career, I&apos;ve had the privilege of working with
          talented people across a handful of companies, and I&apos;ve
          consistently gravitated toward environments that reward strong
          collaboration, creative problem-solving, and a genuine appetite for
          learning.
        </p>
        <p>
          Whether it&apos;s architecting a new system, mentoring engineers, or
          diving into a tricky debugging session, I find the most fulfillment in
          work that pushes me to grow alongside the people around me. I believe
          the best software comes from teams that communicate well, challenge
          each other&apos;s ideas, and stay curious.
        </p>
        <p>
          This site is a living snapshot of my professional journey — feel free
          to explore the sections below or use the sidebar to navigate. I had a
          lot of fun putting this together, and I hope you enjoy browsing it as
          much as I enjoyed building it.
        </p>
        <p>
          While I am not actively seeking new opportunities at the moment,
          I&apos;m always open to connecting with fellow engineers, discussing
          potential collaborations, or just chatting about all things software.
          If you&apos;d like to reach out, feel free to connect with me through
          any of the channels listed at the bottom of this page.
        </p>
      </div>
    </div>
  );
}
