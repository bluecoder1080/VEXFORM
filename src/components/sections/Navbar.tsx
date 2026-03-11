"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    // Reveal animation
    gsap.fromTo(navRef.current, 
      { y: -100, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 }
    );
  }, []);

  return (
    <header 
      ref={navRef}
      className="fixed top-0 left-0 w-full z-[100] border-b border-acid/10 bg-black/50 backdrop-blur-xl"
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <Link href="/">
            <span className="font-bebas text-3xl tracking-wider text-white logo-glitch">
              VEX<span className="text-acid">FORM</span>
            </span>
          </Link>
        </div>

        {/* LINKS */}
        <nav className="hidden md:flex items-center gap-8 font-space text-sm tracking-widest uppercase">
          {["Services", "Work", "Approach", "Testimonials"].map((link) => (
            <Link key={link} href={`#${link.toLowerCase()}`} className="group relative">
              <span className="text-white/70 transition-colors group-hover:text-acid">{link}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-acid transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link 
          href="#contact" 
          className="relative px-6 py-2 border border-acid text-acid font-space text-sm uppercase group overflow-hidden"
        >
          <span className="relative z-10 transition-colors group-hover:text-black">Start Project</span>
          <div className="absolute inset-0 bg-acid translate-y-full transition-transform duration-300 group-hover:translate-y-0"></div>
        </Link>
      </div>
    </header>
  );
}
