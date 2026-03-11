"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function BenefitA() {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      }
    });

    // Content slides in from left
    tl.fromTo(contentRef.current, 
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
    // Visual slides in from right
    .fromTo(visualRef.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.6"
    );

  }, []);

  return (
    <section ref={containerRef} id="services" className="py-24 container mx-auto px-6 overflow-hidden">
      
      {/* Section Label */}
      <div className="flex items-center gap-4 mb-16 overflow-hidden">
        <span className="font-space text-acid text-base uppercase tracking-widest font-bold">01 // Approach</span>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-acid to-transparent opacity-60"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* CONTENT (LEFT) */}
        <div ref={contentRef} className="order-2 md:order-1 flex flex-col items-start">
          <h2 
            ref={titleRef}
            className="font-bebas text-5xl md:text-7xl uppercase leading-none mb-8 relative"
          >
            Design at the Speed of <br/>
            <span className="text-acid text-glow">Thought</span>
            <div className="absolute -left-12 top-4 text-acid font-space opacity-80 text-4xl rotate-90 hidden md:block select-none">
              //
            </div>
          </h2>
          
          <p className="font-rajdhani text-lg text-white/70 max-w-lg mb-8 leading-relaxed">
            By leveraging advanced AI workflows, we bridge the gap between imagination and execution. 
            Prototypes are generated in hours, full sites in days. No more endless revision cycles.
          </p>

          <ul className="space-y-4 mb-12 font-space text-sm tracking-wide text-white/80">
            <li className="flex items-center gap-3">
              <span className="text-acid">►</span> Generative AI Wireframing
            </li>
            <li className="flex items-center gap-3">
              <span className="text-acid">►</span> Automated Responsive Scaling
            </li>
            <li className="flex items-center gap-3">
              <span className="text-acid">►</span> Algorithmic Color Grading
            </li>
          </ul>

          <button className="glass-card px-8 py-3 font-space uppercase text-sm border-acid/30 text-white hover:text-black hover:bg-acid transition-colors">
            Discover Process
          </button>
        </div>

        {/* VISUAL (RIGHT) */}
        <div ref={visualRef} className="order-1 md:order-2 w-full">
          <div className="relative w-full aspect-[4/3] glass-card rounded-lg p-2 overflow-hidden shadow-[0_0_50px_rgba(179,255,0,0.1)] group">
            
            {/* Top Bar for Browser Chrome feel */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 mb-2">
              <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
              <div className="w-2 h-2 rounded-full bg-acid/50"></div>
            </div>

            {/* Content Media */}
            <div className="relative w-full h-[calc(100%-48px)] bg-black/50 rounded overflow-hidden">
               <img 
                 src="/media/Whisk_cd2afb3706133329f8348b40532f979fdr.png" 
                 alt="Generative Layout"
                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
               />
               
               {/* Overlay elements */}
               <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="font-space text-acid text-xs uppercase mb-1">Generated Output</div>
                  <div className="font-bebas text-3xl">Fluid Interface</div>
               </div>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}
