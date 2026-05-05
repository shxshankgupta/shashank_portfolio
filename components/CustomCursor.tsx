"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const target = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const frameRef = useRef<number>();
  const [enabled, setEnabled] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    const updateEnabled = () => setEnabled(mediaQuery.matches);

    updateEnabled();
    mediaQuery.addEventListener("change", updateEnabled);

    return () => mediaQuery.removeEventListener("change", updateEnabled);
  }, []);

  useEffect(() => {
    if (!enabled) {
      return undefined;
    }

    const moveCursor = (event: MouseEvent) => {
      target.current = { x: event.clientX, y: event.clientY };

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${event.clientX - 4}px, ${event.clientY - 4}px, 0)`;
      }
    };

    const animateRing = () => {
      ring.current.x += (target.current.x - ring.current.x) * 0.18;
      ring.current.y += (target.current.y - ring.current.y) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x - 20}px, ${ring.current.y - 20}px, 0)`;
      }

      frameRef.current = window.requestAnimationFrame(animateRing);
    };

    const handleHoverIn = (event: Event) => {
      const targetElement = event.target as HTMLElement | null;

      if (targetElement?.closest("a, button, .hoverable")) {
        setHovered(true);
      }
    };

    const handleHoverOut = (event: Event) => {
      const relatedTarget = (event as MouseEvent).relatedTarget as HTMLElement | null;

      if (!relatedTarget?.closest("a, button, .hoverable")) {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleHoverIn);
    document.addEventListener("mouseout", handleHoverOut);
    frameRef.current = window.requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleHoverIn);
      document.removeEventListener("mouseout", handleHoverOut);

      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-white"
      />
      <div
        ref={ringRef}
        className={`pointer-events-none fixed left-0 top-0 z-[9998] rounded-full border border-white transition-[width,height,background-color,border-color] duration-300 ease-out ${
          hovered
            ? "h-[60px] w-[60px] border-[#e8ff00] bg-[rgba(232,255,0,0.1)]"
            : "h-10 w-10 border-white bg-transparent"
        }`}
      />
    </>
  );
}
