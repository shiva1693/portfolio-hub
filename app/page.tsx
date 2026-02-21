import Link from "next/link";
import { FadeUp, Item, Stagger } from "@/components/Motion";

const cards: Array<{
  title: string;
  desc: string;
  href: string;
  tag: string;
  external?: boolean;
}> = [
  {
    title: "Projects",
    desc: "Frontend demos, data tools, automation and more.",
    href: "/projects",
    tag: "Showcase",
  },
  {
    title: "DevOps Lab",
    desc: "CI/CD, IaC, deployments, monitoring — documented as case studies.",
    href: "https://lab.thezxcvbnm.online",
    tag: "Lab",
    external: true,
  },
  {
    title: "API",
    desc: "Backend services and integrations (Render/Railway).",
    href: "https://api.thezxcvbnm.online",
    tag: "Backend",
    external: true,
  },
];


export default function Home() {
  return (
    <main>
      <FadeUp>
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
          <span className="h-2 w-2 rounded-full bg-emerald-400/90" />
          Live • Building in public
        </div>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
          DevOps & Cloud Projects,
          <span className="block text-white/60">beautifully shipped.</span>
        </h1>

        <p className="mt-5 max-w-2xl text-base text-white/70 md:text-lg">
          A central hub for my projects, labs, and case studies. Built with Next.js, deployed on
          Vercel, protected by Cloudflare.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:opacity-90 transition"
          >
            View Projects
          </Link>

          <Link
            href="/about"
            className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
          >
            About Me
          </Link>
        </div>
      </FadeUp>

      <div className="mt-12">
        <Stagger>
          <div className="grid gap-6 md:grid-cols-3">
            {cards.map((c) => (
              <Item key={c.title}>
                <a
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noreferrer" : undefined}
                  className="group block rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:bg-white/8 hover:border-white/15"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/60">{c.tag}</span>
                    <span className="text-white/40 group-hover:text-white/70 transition">→</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{c.desc}</p>
                </a>
              </Item>
            ))}
          </div>
        </Stagger>
      </div>

      {/* Core Tech Stack (simple + compact) */}
      <section className="mt-14">
        <h2 className="text-xl font-semibold">Core Tech Stack</h2>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {/* Cloud & Infra */}
          <div>
            <h3 className="text-sm font-semibold text-white/70">Cloud & Infrastructure</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {["AWS", "EC2", "VPC", "ALB", "S3", "IAM", "CloudWatch"].map((item) => (
                <span
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/70"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* DevOps & Automation */}
          <div>
            <h3 className="text-sm font-semibold text-white/70">DevOps & Automation</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Terraform", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Ansible"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/70"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Programming & Data */}
          <div>
            <h3 className="text-sm font-semibold text-white/70">Programming & Data</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Python", "Bash", "MySQL", "MongoDB", "DynamoDB"].map((item) => (
                <span
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/70"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}