"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const testimonials = [
  {
    quote: "Working with Vexform was surreal. They delivered a fully functional, breathtaking WebGL site in under 48 hours. Absolute industry disruptors.",
    name: "SARAH JENKINS",
    role: "CMO // NEXUS AI"
  },
  {
    quote: "Our conversion rate jumped 240% the day we launched. The AI-driven copy and fluid layout simply outclassed our competitors instantaneously.",
    name: "MARCUS CHEN",
    role: "FOUNDER // QUANTUM"
  },
  {
    quote: "I thought their 'Launch in Days' claim was a marketing gimmick. It wasn't. They completely re-architected our online presence over a long weekend.",
    name: "ELENA ROSTOVA",
    role: "VP PRODUCT // OMNI"
  }
];

export default function Testimonials() {
  const containerRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(cardsRef.current,
      { 
        y: 100, 
        opacity: 0,
        rotateZ: (i) => [-5, 0, 5][i] // slight fan out initial state
      },
      {
        y: 0,
        opacity: 1,
        rotateZ: 0,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        }
      }
    );
  }, []);

  return (
    <section ref={containerRef} id="testimonials" className="py-32 container mx-auto px-6">
      
      <div className="text-center mb-20">
        <h2 className="font-bebas text-5xl md:text-7xl uppercase mb-6 relative inline-block">
          Don&apos;t Take Our <span className="text-acid text-glow">Word</span>
          <div className="absolute -top-6 -right-16 text-acid font-space text-4xl opacity-50 rotate-[25deg] pointer-events-none">
            //
          </div>
        </h2>
        <p className="font-rajdhani text-white/60 text-lg max-w-xl mx-auto">
          We let the results speak. Join hundreds of hyper-growth startups who chose velocity over legacy process.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {testimonials.map((test, i) => (
          <div 
            key={i}
            ref={(el) => { if (el) cardsRef.current[i] = el; }}
            className="glass-card p-10 relative flex flex-col justify-between h-full"
          >
            {/* Top Neon glowing line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-acid to-transparent opacity-80 shadow-[0_0_20px_#B3FF00]"></div>
            
            <div className="mb-8 relative z-10">
              <div className="absolute -top-12 -left-6 text-acid font-bebas text-9xl opacity-20 pointer-events-none select-none tracking-tighter">
                &quot;
              </div>
              <p className="font-rajdhani text-lg leading-relaxed text-white/90 relative z-20">
                {test.quote}
              </p>
            </div>
            
            <div className="pt-6 border-t border-acid/20 flex flex-col items-start">
              <span className="font-bebas text-2xl tracking-wide">{test.name}</span>
              <span className="font-space text-xs text-acid uppercase tracking-widest">{test.role}</span>
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
}
