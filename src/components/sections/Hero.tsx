"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import ThreeBackground from "@/components/ThreeBackground";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaref = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  // Stats raw values for counting up
  const reviewsCount = useRef({ val: 0 });
  const retentionCount = useRef({ val: 0 });
  
  useEffect(() => {
    if (!headlineRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    // Setup splitting (require inside useEffect to avoid SSR document is not defined error)
    const Splitting = require("splitting");
    Splitting({ target: headlineRef.current, by: "chars" });
    
    const chars = headlineRef.current.querySelectorAll('.char');
    
    // 6. GSAP VIDEO ENTRANCE ANIMATION
    gsap.from(".hero-video", {
      clipPath: "inset(0 100% 0 0)",
      duration: 1.4,
      ease: "power4.inOut",
      delay: 0.3
    });

    // Subtle parallax — video moves opposite to scroll
    gsap.to(".hero-video", {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    // Character subtle float loop
    gsap.to(".hero-video", {
      y: -12,
      duration: 4,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1
    });

    // 7. GSAP GLITCH FLASH on hero load — ties video to headline
    const glitchTl = gsap.timeline({ delay: 0.2 });

    glitchTl
      .to(".hero-video", { opacity: 0, duration: 0.05 })
      .to(".hero-video", { opacity: 0.8, duration: 0.05 })
      .to(".hero-video", { opacity: 0.3, duration: 0.03 })
      .to(".hero-video", { opacity: 0.75, duration: 0.1 })
      // Then headline chars stagger in simultaneously
      .from(chars, {
        y: 100,
        opacity: 0,
        stagger: 0.04,
        duration: 0.7,
        ease: "power4.out"
      }, "-=0.05")
      .fromTo(subtextRef.current, 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.4"
      )
      .fromTo(ctaref.current?.children ? Array.from(ctaref.current.children) : [], 
        { x: (i) => i === 0 ? -50 : 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power2.out", stagger: 0.1 },
        "-=0.4"
      )
      .fromTo(statsRef.current, 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.2"
      );

    // 8. NEON X MARKS — animate in synced with video
    gsap.from(".graffiti-x", {
      scale: 0,
      opacity: 0,
      rotation: -20,
      stagger: 0.15,
      duration: 0.6,
      ease: "back.out(1.7)",
      delay: 1.2
    });

    // Subtle pulse loop on X marks
    gsap.to(".graffiti-x", {
      opacity: 0.7,
      duration: 2,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.3
    });

    // Number counters
    gsap.to(reviewsCount.current, {
      val: 200,
      duration: 2,
      ease: "power2.out",
      delay: 1.5,
      onUpdate: () => {
        const el = document.getElementById("stat-sites");
        if (el) el.innerText = Math.floor(reviewsCount.current.val) + "+";
      }
    });

    gsap.to(retentionCount.current, {
      val: 98,
      duration: 2,
      ease: "power2.out",
      delay: 1.5,
      onUpdate: () => {
        const el = document.getElementById("stat-retention");
        if (el) el.innerText = Math.floor(retentionCount.current.val) + "%";
      }
    });

  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      
      {/* Massive Cinematic Video Background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        {/* Layer gradients to fade edges into the black background ensuring readability */}
        <div className="hero-overlay"></div>
        <div className="hero-scanlines"></div>
        
        <video 
          src="/media/Gentle_breeze_moves_through_scene_delpmaspu_.mp4" 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="hero-video absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover object-[75%_top] md:object-[center_top] pointer-events-none"
        />
      </div>

      {/* Vertical neon divider */}
      <div className="hero-divider hidden md:block"></div>

      {/* Three Background Context */}
      <ThreeBackground />
      
      {/* Content wrapper on top of canvas */}
      <div className="container relative z-10 mx-auto px-6 w-full h-full flex flex-col justify-center min-h-screen pt-32 pb-20">
        
        <div className="hero-content">
          {/* Sublabel */}
          <div className="hero-sub font-space text-acid text-sm uppercase tracking-[0.3em] mb-6 overflow-hidden">
            <span className="inline-block relative">
              <span className="absolute -left-8 top-1/2 -translate-y-1/2 w-4 h-[1px] bg-acid"></span>
              AI-POWERED DESIGN AGENCY
            </span>
          </div>

          {/* Massive Headline */}
          <h1 
            ref={headlineRef} 
            className="hero-title font-bebas leading-[0.85] tracking-tighter uppercase relative drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
          >
            Web That <br/> <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]">Transforms</span>
            
            {/* Graffiti X overlay */}
            <div className="graffiti-x absolute -top-10 -right-10 md:-right-20 text-acid font-space opacity-40 rotate-[15deg] select-none pointer-events-none text-6xl">
              ×
            </div>
            <div className="graffiti-x absolute bottom-10 -left-12 text-acid font-space opacity-30 rotate-[-15deg] select-none pointer-events-none text-5xl hidden md:block">
              ×
            </div>
          </h1>

          <p ref={subtextRef} className="hero-sub mt-8 text-lg md:text-xl text-white/70 font-rajdhani">
            We build stunning, conversion-optimized, high-performance web experiences powered by artificial intelligence. Launch in days, not months.
          </p>

          {/* CTAs */}
          <div ref={ctaref} className="hero-buttons flex flex-col sm:flex-row gap-6 mt-12 w-full relative z-20">
            <button className="bg-acid text-black font-space py-4 px-8 uppercase hover:bg-white transition-colors shadow-[0_0_30px_rgba(179,255,0,0.3)] hover:shadow-[0_0_40px_rgba(179,255,0,0.8)]">
              Explore Work
            </button>
            <button className="border border-acid text-acid font-space py-4 px-8 uppercase hover:bg-acid hover:text-black transition-colors backdrop-blur-md bg-black/20">
              Book Call
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div ref={statsRef} className="mt-20 flex flex-wrap gap-6 md:gap-12 border-t border-white/10 pt-10 w-full max-w-3xl backdrop-blur-[2px]">
          <div className="flex flex-col items-center">
            <span id="stat-sites" className="font-bebas text-5xl text-acid">0+</span>
            <span className="font-space text-xs text-white/50 uppercase mt-2">Sites Launched</span>
          </div>
          <div className="flex flex-col items-center">
            <span id="stat-retention" className="font-bebas text-5xl text-acid">0%</span>
            <span className="font-space text-xs text-white/50 uppercase mt-2">Retention Rate</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bebas text-5xl text-acid">4.9★</span>
            <span className="font-space text-xs text-white/50 uppercase mt-2">Average Rating</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bebas text-5xl text-acid">$0</span>
            <span className="font-space text-xs text-white/50 uppercase mt-2">Setup Fee</span>
          </div>
        </div>

      </div>
    </section>
  );
}
