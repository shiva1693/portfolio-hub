import Link from "next/link";
import { FadeUp, Item, Stagger } from "@/components/Motion";
import Image from "next/image";

const cards = [
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

          {/* CI Badge */}
          <div className="mt-6 flex items-center gap-3">
            <Image
              alt="CI Status"
              src="https://github.com/shiva1693/portfolio-hub/actions/workflows/ci.yml/badge.svg"
              width={120}
              height={24}
              unoptimized
            />
            <a
              href="https://github.com/shiva1693/portfolio-hub/actions"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-white/60 hover:text-white transition"
            >
              View CI runs →
            </a>
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

        <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-white/60">
          <span className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
            Next.js
          </span>
          <span className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
            Vercel
          </span>
          <span className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
            Cloudflare
          </span>
          <span className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
            CI/CD
          </span>
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
                    <span className="text-white/40 group-hover:text-white/70 transition">
                      →
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{c.desc}</p>
                </a>
              </Item>
            ))}
          </div>
        </Stagger>
      </div>
    </main>
  );
}