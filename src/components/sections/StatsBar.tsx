"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function StatsBar() {
  const containerRef = useRef<HTMLElement>(null);
  
  const stats = [
    { target: 45, suffix: "M+", label: "Venture Raised", id: "stat1" },
    { target: 120, suffix: "ms", label: "Avg Load Time", id: "stat2" },
    { target: 4, suffix: "x", label: "Conversion Lift", id: "stat3" },
    { target: 24, suffix: "h", label: "Support SLA", id: "stat4" },
  ];

  const countersRef = useRef<{ val: number }[]>([
    { val: 0 }, { val: 0 }, { val: 0 }, { val: 0 }
  ]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 80%",
      onEnter: () => {
        stats.forEach((stat, i) => {
          gsap.to(countersRef.current[i], {
            val: stat.target,
            duration: 2.5,
            ease: "power3.out",
            onUpdate: () => {
              const el = document.getElementById(stat.id);
              if (el) {
                // Round depending on the stat
                el.innerText = Math.floor(countersRef.current[i].val) + stat.suffix;
              }
            }
          });
        });
      },
      once: true
    });
  }, []);

  return (
    <section 
      ref={containerRef}
      className="w-full py-16 border-y border-acid/20 bg-black shadow-[0_0_50px_rgba(179,255,0,0.03)] relative overflow-hidden"
    >
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-white/5 w-full"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-transparent md:divide-white/10">
          
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center text-center px-4 relative group">
              {/* Hover glow effect behind number */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-acid/0 group-hover:bg-acid/10 rounded-full blur-[20px] transition-colors duration-500"></div>
              
              <div 
                id={stat.id} 
                className="font-bebas text-5xl md:text-7xl text-acid mb-2 relative z-10"
                style={{ textShadow: "0 0 20px rgba(179,255,0,0.3)" }}
              >
                0{stat.suffix}
              </div>
              <div className="font-space text-xs md:text-sm text-white/50 uppercase tracking-widest relative z-10 transition-colors group-hover:text-white">
                {stat.label}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
