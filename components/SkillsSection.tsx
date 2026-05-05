"use client";

import { useState } from "react";

const tabs = ["All", "Backend", "Databases", "DevOps", "Frontend"] as const;

const skillData = [
  { category: "Backend", label: "Python" },
  { category: "Backend", label: "Django" },
  { category: "Backend", label: "FastAPI" },
  { category: "Backend", label: "REST APIs" },
  { category: "Backend", label: "OOP" },
  { category: "Backend", label: "Async I/O" },
  { category: "Backend", label: "Celery" },
  { category: "Databases", label: "PostgreSQL" },
  { category: "Databases", label: "MySQL" },
  { category: "Databases", label: "MongoDB" },
  { category: "Databases", label: "Redis" },
  { category: "DevOps", label: "Docker" },
  { category: "DevOps", label: "GitHub Actions" },
  { category: "DevOps", label: "AWS EC2" },
  { category: "DevOps", label: "AWS S3" },
  { category: "DevOps", label: "AWS IAM" },
  { category: "DevOps", label: "AWS VPC" },
  { category: "DevOps", label: "CI/CD" },
  { category: "Frontend", label: "React" },
  { category: "Frontend", label: "Next.js" },
  { category: "Frontend", label: "Tailwind CSS" },
  { category: "Languages", label: "JavaScript" },
  { category: "Languages", label: "SQL" },
  { category: "Languages", label: "Java" },
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
