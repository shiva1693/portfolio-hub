import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="thezxcvbnm.online logo"
            width={32}
            height={32}
            className="rounded-lg"
            priority
          />
          <span className="font-semibold tracking-tight text-white">
            thezxcvbnm<span className="text-white/50">.online</span>
          </span>
        </Link>

        {/* Nav */}
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
            className="ml-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:opacity-90 transition"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}