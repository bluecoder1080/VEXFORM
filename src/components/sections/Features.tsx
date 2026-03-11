"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Maximize2, Zap, LayoutTemplate, Cpu } from "lucide-react";

const featureData = [
  {
    icon: <Cpu className="w-8 h-8 text-acid" />,
    title: "AI Automation",
    desc: "Smart layout generation and intelligent content placement designed to maximize immediate user engagement and reduce drop-off."
  },
  {
    icon: <Zap className="w-8 h-8 text-acid" />,
    title: "Blazing Performance",
    desc: "Next.js server-side rendering combined with strict asset optimization guarantees a sub-second time to interactive metric."
  },
  {
    icon: <LayoutTemplate className="w-8 h-8 text-acid" />,
    title: "Modular Systems",
    desc: "We build isolated, scalable React components that evolve with your business without needing an entire codebase rewrite."
  },
  {
    icon: <Maximize2 className="w-8 h-8 text-acid" />,
    title: "Fluid Animations",
    desc: "Hardware-accelerated GSAP timelines and WebGL particle backgrounds create an unforgettable browser experience."
  }
];

export default function Features() {
  const containerRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(cardsRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        }
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="py-24 container mx-auto px-6">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 border-b border-white/10 pb-8">
        <h2 className="font-bebas text-5xl md:text-7xl uppercase mb-4 md:mb-0 text-white relative">
          Core <span className="text-acid text-glow">Capabilities</span>
        </h2>
        <div className="font-space text-acid text-sm uppercase tracking-widest">
          03 // Systems
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featureData.map((feature, i) => (
          <div 
            key={i}
            ref={(el) => { if (el) cardsRef.current[i] = el; }}
            className="glass-card glass-card-hover p-10 min-h-[320px] flex flex-col justify-center relative overflow-hidden group rounded-lg"
          >
            {/* Background glowing orb on hover */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-acid/20 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Top Right Number */}
            <div className="absolute top-6 right-8 font-space text-white/20 text-xl font-bold transition-colors group-hover:text-acid/40">
              0{i + 1}
            </div>

            <div className="mb-8 relative z-10 drop-shadow-[0_0_15px_rgba(179,255,0,0.5)] transform group-hover:scale-110 transition-transform duration-300 origin-left">
              <div className="text-acid [&>svg]:w-14 [&>svg]:h-14">
                {feature.icon}
              </div>
            </div>
            
            <h3 className="font-bebas text-3xl mb-4 relative z-10 text-white group-hover:text-acid transition-colors leading-none tracking-wide">
              {feature.title}
            </h3>
            
            <p className="font-rajdhani text-white/60 text-[17px] leading-relaxed relative z-10">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}
