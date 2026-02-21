import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/10">
            ⚡
          </span>
          <span className="font-semibold tracking-tight">
            thezxcvbnm<span className="text-white/60">.online</span>
          </span>
        </Link>

        <nav className="flex items-center gap-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-xl px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white transition"
            >
              {l.label}
            </Link>
          ))}

          <a
            href="https://github.com/shiva1693"
            target="_blank"
            rel="noreferrer"
            className="ml-2 rounded-xl bg-white text-black px-4 py-2 text-sm font-semibold hover:opacity-90 transition"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}