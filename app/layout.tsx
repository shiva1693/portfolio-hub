import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "thezxcvbnm.online",
  description: "DevOps | Cloud | Projects",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#05060a] text-white antialiased">
        {/* Background glow */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute left-1/2 top-[-120px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-white/10 blur-[120px]" />
          <div className="absolute right-[-120px] top-[30%] h-[420px] w-[420px] rounded-full bg-indigo-500/20 blur-[140px]" />
          <div className="absolute left-[-160px] bottom-[-160px] h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[160px]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_55%)]" />
          <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:48px_48px]" />
        </div>

        <Navbar />
        <div className="mx-auto max-w-6xl px-6 py-10">{children}</div>

        <footer className="mx-auto max-w-6xl px-6 pb-10 text-sm text-white/50">
          <div className="border-t border-white/10 pt-6">
            © {new Date().getFullYear()} thezxcvbnm.online • Built with Next.js + Vercel
          </div>
        </footer>
      </body>
    </html>
  );
}