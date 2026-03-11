"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function BenefitB() {
  const containerRef = useRef<HTMLElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const codeLinesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      }
    });

    // Visual slides in from left
    tl.fromTo(visualRef.current, 
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
    // Content slides in from right
    .fromTo(contentRef.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.6"
    );

    // Typewriter effect for code block when in view
    if (codeLinesRef.current) {
      const lines = codeLinesRef.current.children;
      gsap.fromTo(lines, 
        { width: 0, opacity: 0 },
        { 
          width: "100%", 
          opacity: 1, 
          duration: 1, 
          stagger: 0.2, 
          ease: "steps(40)",
          scrollTrigger: {
            trigger: visualRef.current,
            start: "top 60%",
          }
        }
      );
    }

  }, []);

  return (
    <section ref={containerRef} className="py-24 container mx-auto px-6 overflow-hidden">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* VISUAL (LEFT) */}
        <div ref={visualRef} className="w-full">
          <div className="relative w-full aspect-square md:aspect-[4/3] glass-card rounded-lg p-6 overflow-hidden shadow-[0_0_50px_rgba(179,255,0,0.05)] border-t border-acid/30">
            
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div className="font-space text-acid text-xs uppercase tracking-widest">Compiler // Active</div>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-sm bg-acid animate-pulse"></div>
              </div>
            </div>

            {/* Code Block */}
            <div ref={codeLinesRef} className="font-space text-xs md:text-sm text-acid/80 flex flex-col gap-3">
              <div className="whitespace-nowrap overflow-hidden border-r-2 border-transparent">
                <span className="text-[#FF5555]">const</span> <span className="text-[#50FA7B]">buildAgency</span> = <span className="text-[#FF79C6]">async</span> () =&gt; &#123;
              </div>
              <div className="whitespace-nowrap overflow-hidden border-r-2 border-transparent ml-4">
                <span className="text-[#FF79C6]">await</span> System.<span className="text-[#8BE9FD]">initialize</span>(&#123;
              </div>
              <div className="whitespace-nowrap overflow-hidden border-r-2 border-transparent ml-8">
                mode: <span className="text-[#F1FA8C]">&apos;HYPER_SCALE&apos;</span>,
              </div>
              <div className="whitespace-nowrap overflow-hidden border-r-2 border-transparent ml-8">
                framework: <span className="text-[#F1FA8C]">&apos;NEXT_JS&apos;</span>,
              </div>
              <div className="whitespace-nowrap overflow-hidden border-r-2 border-transparent ml-8">
                animations: <span className="text-[#F1FA8C]">&apos;GSAP_CORE&apos;</span>
              </div>
              <div className="whitespace-nowrap overflow-hidden border-r-2 border-transparent ml-4">
                &#125;);
              </div>
              <div className="whitespace-nowrap overflow-hidden border-r-2 border-transparent ml-4 mt-2">
                <span className="text-[#FF79C6]">return</span> <span className="text-[#8BE9FD]">deployToProduction</span>();
              </div>
              <div className="whitespace-nowrap overflow-hidden border-r-2 border-transparent">
                &#125;;
              </div>
              <div className="whitespace-nowrap overflow-hidden border-r-2 border-acid mt-4 animate-ping">
                _
              </div>
            </div>

            {/* Blurred background logo */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
              <span className="font-bebas text-[15rem] text-white">V</span>
            </div>

          </div>
        </div>

        {/* CONTENT (RIGHT) */}
        <div ref={contentRef} className="flex flex-col items-start lg:pl-12">
          
          <div className="flex items-center gap-4 mb-8 overflow-hidden w-full">
            <span className="font-space text-acid text-base uppercase tracking-widest font-bold">02 // Deployment</span>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-acid to-transparent opacity-60"></div>
          </div>

          <h2 className="font-bebas text-5xl md:text-7xl uppercase leading-none mb-8 relative">
            Launch Before They <br/>
            <span className="text-acid text-glow">Blink</span>
          </h2>
          
          <p className="font-rajdhani text-lg text-white/70 max-w-lg mb-8 leading-relaxed">
            Legacy agencies take months to ship a simple landing page. We combine reusable component architecture with AI generation to assemble production-ready sites in a fraction of the time.
          </p>

          <div className="grid grid-cols-2 gap-6 w-full mb-10">
            <div className="border-l border-acid pl-4">
              <div className="font-bebas text-4xl text-white">7 Days</div>
              <div className="font-space text-xs text-white/50 uppercase">Average Build Time</div>
            </div>
            <div className="border-l border-acid pl-4">
              <div className="font-bebas text-4xl text-white">99.9%</div>
              <div className="font-space text-xs text-white/50 uppercase">Uptime Server SLA</div>
            </div>
          </div>

          <button className="glass-card px-8 py-3 font-space uppercase text-sm border-acid/30 text-white hover:text-black hover:bg-acid transition-colors">
            View Infrastructure
          </button>
        </div>

      </div>
    </section>
  );
}
