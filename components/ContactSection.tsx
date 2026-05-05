const socialLinks = [
  {
    href: "https://linkedin.com/in/shxshankgupta",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/shxshankgupta",
    label: "GitHub",
  },
  {
    href: "https://leetcode.com/u/shxshank/",
    label: "LeetCode",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="section-divider py-16 lg:py-24">
      <div className="container-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-label">Contact</p>
          <h2 className="mt-4 font-heading text-[56px] font-bold leading-[0.95] text-[#f0f0f0] md:text-[64px]">
            Let&apos;s Work Together
          </h2>
          <p className="mt-4 text-lg text-[#9a9a9a]">
            Available for Backend Engineering roles and interesting projects.
          </p>

          <div className="mt-10">
            <a
              href="mailto:shxshankgupta@gmail.com"
              className="hoverable border-b-2 border-[#e8ff00] font-heading text-xl text-[#f0f0f0] transition-colors duration-300 ease-out hover:text-[#e8ff00]"
            >
              shxshankgupta@gmail.com
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-center font-mono text-[13px] uppercase text-[#676767]">
            {socialLinks.map((link, index) => (
              <div key={link.href} className="flex items-center gap-4">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hoverable transition-colors duration-300 ease-out hover:text-[#e8ff00]"
                >
                  {link.label}
                </a>
                {index < socialLinks.length - 1 ? <span className="text-[#333333]">|</span> : null}
              </div>
            ))}
          </div>

          <p className="mt-4 text-sm text-[#565656]">+91 9084215819</p>
        </div>

        <footer className="mt-16 flex flex-col gap-3 border-t border-[#1c1c1c] py-8 text-xs text-[#444444] sm:flex-row sm:items-center sm:justify-between">
          <span>© 2025 Shashank Gupta</span>
          <span>Built with Next.js &amp; Tailwind</span>
        </footer>
      </div>
    </section>
  );
}
