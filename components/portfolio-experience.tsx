"use client";

import { AnimatePresence, motion } from "framer-motion";
import { startTransition, useEffect, useState } from "react";

import { SceneShell } from "@/components/canvas/scene-shell";
import { SectionOverlay } from "@/components/ui/section-overlay";
import { SystemChrome } from "@/components/ui/system-chrome";
import { defaultSectionId, getSectionIndex, sections, type SectionId } from "@/data/site";

export function PortfolioExperience() {
  const [focusedSectionId, setFocusedSectionId] = useState<SectionId>(defaultSectionId);
  const [openSectionId, setOpenSectionId] = useState<SectionId | null>(defaultSectionId);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        startTransition(() => {
          setOpenSectionId(null);
        });
        return;
      }

      if (
        event.key !== "ArrowRight" &&
        event.key !== "ArrowDown" &&
        event.key !== "ArrowLeft" &&
        event.key !== "ArrowUp" &&
        event.key !== "Enter" &&
        event.key !== " "
      ) {
        return;
      }

      event.preventDefault();

      if (event.key === "Enter" || event.key === " ") {
        startTransition(() => {
          setOpenSectionId(focusedSectionId);
        });
        return;
      }

      const currentIndex = getSectionIndex(focusedSectionId);
      const direction =
        event.key === "ArrowRight" || event.key === "ArrowDown" ? 1 : -1;
      const nextIndex = (currentIndex + direction + sections.length) % sections.length;
      const nextSectionId = sections[nextIndex].id;

      startTransition(() => {
        setFocusedSectionId(nextSectionId);
        setOpenSectionId(nextSectionId);
      });
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [focusedSectionId]);

  const activeSection =
    sections.find((section) => section.id === openSectionId) ?? null;

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="technical-grid absolute inset-0" />
      <div className="radial-vignette pointer-events-none absolute inset-0" />

      <motion.div
        aria-hidden
        animate={{ opacity: 1 }}
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-40 bg-black"
        initial={{ opacity: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      />

      <SceneShell
        focusedSectionId={focusedSectionId}
        onNodeClick={(sectionId) => {
          startTransition(() => {
            setFocusedSectionId(sectionId);
            setOpenSectionId(sectionId);
          });
        }}
        onNodeFocus={(sectionId) => {
          startTransition(() => {
            setFocusedSectionId(sectionId);
          });
        }}
      />

      <div className="pointer-events-none absolute inset-0 z-20">
        <SystemChrome
          focusedSectionId={focusedSectionId}
          onSelectSection={(sectionId) => {
            startTransition(() => {
              setFocusedSectionId(sectionId);
              setOpenSectionId(sectionId);
            });
          }}
        />

        <AnimatePresence mode="wait">
          {activeSection ? (
            <SectionOverlay
              key={activeSection.id}
              activeSection={activeSection}
              focusedSectionId={focusedSectionId}
              onClose={() => {
                startTransition(() => {
                  setOpenSectionId(null);
                });
              }}
              onSelectSection={(sectionId) => {
                startTransition(() => {
                  setFocusedSectionId(sectionId);
                  setOpenSectionId(sectionId);
                });
              }}
            />
          ) : null}
        </AnimatePresence>
      </div>
    </main>
  );
}
