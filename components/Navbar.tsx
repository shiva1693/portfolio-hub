import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="thezxcvbnm.online logo"
            width={50}
            height={50}
            className="rounded-lg"
            priority
          />
          <span className="font-semibold tracking-tight text-white">
            thezxcvbnm<span className="text-white/50">.online</span>
          </span>
        </Link>

        <nav className="flex items-center gap-4 text-sm text-white/80">
          <Link href="/about" className="hover:text-white transition">
            About
          </Link>
          <Link href="/projects" className="hover:text-white transition">
            Projects
          </Link>
        </nav>
      </div>
    </header>
  );
}