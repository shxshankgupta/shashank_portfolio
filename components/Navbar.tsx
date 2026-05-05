"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ease-out ${
        scrolled
          ? "border-[#222222] bg-[rgba(10,10,10,0.9)] backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="container-shell flex h-16 items-center justify-between">
        <a
          href="#top"
          className="hoverable font-heading text-xl font-bold text-[#e8ff00] transition-colors duration-300 ease-out hover:text-white"
        >
          SG
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hoverable link-underline text-[13px] uppercase tracking-[0.1em] text-[#888888] transition-colors duration-300 ease-out hover:text-[#f0f0f0]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((value) => !value)}
          className="hoverable flex h-10 w-10 items-center justify-center border border-[#222222] text-[#f0f0f0] transition-colors duration-300 ease-out hover:border-[#e8ff00] hover:text-[#e8ff00] lg:hidden"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-[#222222] bg-[#0a0a0a] transition-[max-height,opacity] duration-300 ease-out lg:hidden ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-shell flex flex-col py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="hoverable border-b border-[#161616] py-4 text-[13px] uppercase tracking-[0.1em] text-[#888888] transition-colors duration-300 ease-out hover:text-[#e8ff00]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
