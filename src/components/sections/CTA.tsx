"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CTA() {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(headlineRef.current,
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        }
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="py-32 container mx-auto px-6 relative">
      
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-full bg-acid/10 blur-[100px] pointer-events-none rounded-full"></div>
      
      <div className="flex flex-col items-center justify-center text-center relative z-10 max-w-4xl mx-auto">
        
        <h2 
          ref={headlineRef}
          className="font-bebas text-6xl md:text-8xl uppercase mb-8 leading-[0.9]"
        >
          Ready to Scale <span className="text-acid text-glow block md:inline">Instantly?</span>
        </h2>
        
        <p className="font-rajdhani text-xl text-white/70 mb-12 max-w-2xl">
          Stop waiting months for a redesign. Get a stunning, AI-generated, conversion-optimized web experience launched this week. We only take 4 new clients per month.
        </p>

        <form className="w-full max-w-lg flex flex-col md:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
          <div className="relative flex-1 group">
            <div className="absolute inset-0 bg-acid/20 blur-md group-hover:bg-acid/40 transition-colors opacity-0 group-focus-within:opacity-100 rounded"></div>
            <input 
              type="email" 
              placeholder="ENTER YOUR EMAIL CAREFULLY..." 
              required
              className="w-full bg-black/50 border border-acid/50 text-white font-space px-6 py-4 outline-none focus:border-acid focus:shadow-[0_0_20px_rgba(179,255,0,0.5)] transition-all relative z-10 placeholder:text-white/30"
            />
          </div>
          <button 
            type="submit" 
            className="bg-acid border border-acid text-black font-space px-10 py-4 uppercase tracking-widest hover:bg-white hover:border-white hover:shadow-[0_0_30px_rgba(179,255,0,0.8)] transition-all relative z-10"
          >
            Engage
          </button>
        </form>

        <div className="mt-16 font-space text-sm text-acid/80 uppercase tracking-widest flex items-center justify-center gap-3">
          <div className="w-2 h-2 rounded-full bg-acid animate-pulse"></div>
          — 5 SPOTS REMAINING —
        </div>
        
      </div>

    </section>
  );
}
