"use client";

import { useState } from "react";

const tabs = [
  "All",
  "Programming Languages",
  "Frameworks & Libraries",
  "Databases",
  "Tools & Platforms",
] as const;

const skillData = [
  { category: "Programming Languages", label: "Python" },
  { category: "Programming Languages", label: "JavaScript" },
  { category: "Programming Languages", label: "SQL" },
  { category: "Programming Languages", label: "Java" },
  { category: "Frameworks & Libraries", label: "Django" },
  { category: "Frameworks & Libraries", label: "FastAPI" },
  { category: "Frameworks & Libraries", label: "REST APIs" },
  { category: "Frameworks & Libraries", label: "OOP" },
  { category: "Frameworks & Libraries", label: "Async I/O" },
  { category: "Frameworks & Libraries", label: "React" },
  { category: "Frameworks & Libraries", label: "Next.js" },
  { category: "Frameworks & Libraries", label: "Tailwind CSS" },
  { category: "Databases", label: "PostgreSQL" },
  { category: "Databases", label: "MySQL" },
  { category: "Databases", label: "MongoDB" },
  { category: "Databases", label: "Redis" },
  { category: "Tools & Platforms", label: "Docker" },
  { category: "Tools & Platforms", label: "GitHub Actions" },
  { category: "Tools & Platforms", label: "AWS" },
];

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("All");

  const filteredSkills =
    activeTab === "All"
      ? skillData
      : skillData.filter((skill) => skill.category === activeTab);

  return (
    <section id="skills" className="section-divider py-16 lg:py-24">
      <div className="container-shell">
        <p className="section-label">Skills</p>
        <h2 className="mt-4 font-heading text-[56px] font-bold text-[#f0f0f0]">The Stack</h2>

        <div className="mt-8 flex flex-wrap gap-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;

            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`hoverable border px-4 py-2 font-mono text-xs uppercase transition duration-300 ease-out ${
                  isActive
                    ? "border-[#e8ff00] bg-[#e8ff00] text-black"
                    : "border-[#222222] text-[#666666] hover:border-[#c8dd28] hover:text-[#e8ff00]"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        <div className="mt-8 flex flex-wrap gap-3 transition-opacity duration-300 ease-out">
          {filteredSkills.map((skill) => (
            <div
              key={`${skill.category}-${skill.label}`}
              className="hoverable border border-[#1e1e1e] bg-[#121212] px-4 py-2 font-mono text-xs text-[#f0f0f0] transition duration-300 ease-out hover:bg-[#111109] hover:text-[#e8ff00] hover:border-[#c8dd28]"
            >
              {skill.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
