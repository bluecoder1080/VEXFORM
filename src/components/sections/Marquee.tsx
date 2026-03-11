"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Marquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;
    
    // Duplicate the content to create a seamless loop
    const textWidth = textRef.current.offsetWidth;
    
    gsap.to(textRef.current, {
      x: -textWidth / 2,
      duration: 10,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <section 
      ref={containerRef}
      className="py-10 border-y border-acid/20 w-full overflow-hidden flex whitespace-nowrap bg-black rotate-[-1deg] scale-105 my-20 mix-blend-screen relative z-10"
      style={{ boxShadow: "0 0 50px rgba(179,255,0,0.05)" }}
    >
      <div 
        ref={textRef}
        className="flex gap-16 font-space text-3xl font-bold tracking-widest text-acid uppercase"
      >
        <span>AI DESIGN</span>
        <span>—</span>
        <span>BUILT TO CONVERT</span>
        <span>—</span>
        <span>LAUNCH IN DAYS</span>
        <span>—</span>
        <span>WEB THAT WORKS</span>
        <span>—</span>
        
        {/* DUPLICATE FOR LOOP */}
        <span>AI DESIGN</span>
        <span>—</span>
        <span>BUILT TO CONVERT</span>
        <span>—</span>
        <span>LAUNCH IN DAYS</span>
        <span>—</span>
        <span>WEB THAT WORKS</span>
        <span>—</span>
      </div>
    </section>
  );
}
