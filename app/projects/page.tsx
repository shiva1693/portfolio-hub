const projects = [
  {
    name: "Project 1",
    desc: "Coming soon — add your first app link here.",
    link: "https://p1.thezxcvbnm.online",
    status: "Planned",
  },
  {
    name: "DevOps Lab",
    desc: "CI/CD + infrastructure demos documented as case studies.",
    link: "https://lab.thezxcvbnm.online",
    status: "In progress",
  },
];

export default function Projects() {
  return (
    <main>
      <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Projects</h1>
      <p className="mt-3 text-white/70 max-w-2xl">
        Each project is deployed independently (subdomains) with its own build and release flow.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="block rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:bg-white/8 transition"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <span className="text-xs rounded-full border border-white/10 bg-black/20 px-3 py-1 text-white/70">
                {p.status}
              </span>
            </div>
            <p className="mt-2 text-sm text-white/70">{p.desc}</p>
            <div className="mt-4 text-sm text-white/60">{p.link}</div>
          </a>
        ))}
      </div>
    </main>
  );
}