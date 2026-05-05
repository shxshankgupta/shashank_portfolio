import { Cloud, Code2, Trophy, Zap } from "lucide-react";

const achievementCards = [
  {
    title: "AWS Certified Cloud Practitioner",
    description: "Certified in IAM, EC2, S3, VPC, and the Well-Architected Framework.",
    icon: Cloud,
  },
  {
    title: "LeetCode — Top 10.4% Globally",
    description: "330+ problems solved (149 Medium, 37 Hard). Contest Rating: 1,745.",
    icon: Code2,
  },
  {
    title: "Bobble AI Hackathon — 1st Prize",
    description:
      "Automated a manual QA pipeline. Solution adopted by 20+ engineers internally.",
    icon: Trophy,
  },
  {
    title: "MUJ HACKX 2.0 — Winner",
    description:
      "Built AI productivity tool (FastAPI + React + HuggingFace). 50+ pilot users onboarded.",
    icon: Zap,
  },
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="section-divider py-16 lg:py-24">
      <div className="container-shell">
        <p className="section-label">Achievements</p>
        <h2 className="mt-4 font-heading text-[56px] font-bold text-[#f0f0f0]">
          Wins &amp; Certs
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {achievementCards.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="hoverable border border-[#1a1a1a] bg-[#121212] p-8 transition duration-300 ease-out hover:border-[#333333] hover:bg-[#141414]"
            >
              <Icon className="h-10 w-10 text-[#d9eb4c]" />
              <h3 className="mt-6 font-heading text-[18px] font-bold text-[#f0f0f0]">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-[#919191]">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
