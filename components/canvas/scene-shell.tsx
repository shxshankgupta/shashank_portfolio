"use client";

import dynamic from "next/dynamic";

import type { SectionId } from "@/data/site";

const DeveloperUniverseScene = dynamic(
  () => import("@/components/canvas/developer-universe-scene"),
  {
    ssr: false,
  },
);

type SceneShellProps = {
  focusedSectionId: SectionId;
  onNodeClick: (sectionId: SectionId) => void;
  onNodeFocus: (sectionId: SectionId) => void;
};

export function SceneShell(props: SceneShellProps) {
  return <DeveloperUniverseScene {...props} />;
}
