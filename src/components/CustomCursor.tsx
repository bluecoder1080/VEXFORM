"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cursorRef.current) return;

    // Center the cursor initially (off-screen)
    gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 });

    const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.2, ease: "power3" });
    const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.2, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, input')) {
        gsap.to(cursorRef.current, {
          scale: 4,
          opacity: 0.3,
          border: '1px solid #B3FF00',
          background: 'transparent',
          duration: 0.3
        });
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, input')) {
        gsap.to(cursorRef.current, {
          scale: 1,
          opacity: 1,
          border: 'none',
          background: '#B3FF00',
          duration: 0.3
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 rounded-full bg-acid pointer-events-none z-[9999] mix-blend-difference"
      style={{
        boxShadow: "0 0 15px #B3FF00, 0 0 30px #b3ff0066",
      }}
    />
  );
}
