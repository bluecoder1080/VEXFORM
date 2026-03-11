"use client";

import Link from "next/link";
import { Twitter, Instagram, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black pt-20 pb-10">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="font-bebas text-4xl tracking-wider text-white">
                VEX<span className="text-acid">FORM</span>
              </span>
            </Link>
            <p className="font-rajdhani text-white/50 max-w-sm mb-8 leading-relaxed">
              The premier AI-powered web design agency building the digital presence of tomorrow, today. Fast, fluid, and fiercely focused on conversion.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-acid hover:border-acid transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-acid hover:border-acid transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-acid hover:border-acid transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-acid hover:border-acid transition-colors">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-space text-acid text-sm uppercase tracking-widest mb-6">Navigation</h4>
            <ul className="flex flex-col gap-3 font-rajdhani text-white/70">
              <li><Link href="#services" className="hover:text-acid transition-colors">Services</Link></li>
              <li><Link href="#work" className="hover:text-acid transition-colors">Work</Link></li>
              <li><Link href="#approach" className="hover:text-acid transition-colors">Approach</Link></li>
              <li><Link href="#testimonials" className="hover:text-acid transition-colors">Testimonials</Link></li>
              <li><Link href="#contact" className="hover:text-acid transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-space text-acid text-sm uppercase tracking-widest mb-6">Legal</h4>
            <ul className="flex flex-col gap-3 font-rajdhani text-white/70">
              <li><Link href="#" className="hover:text-acid transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-acid transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-acid transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 font-space text-xs text-white/40 uppercase">
          <p>© {new Date().getFullYear()} VEXFORM AGENCY. ALL RIGHTS RESERVED.</p>
          <p className="mt-4 md:mt-0 flex items-center gap-2">
            OPERATING OUT OF <span className="text-acid">THE ETHER</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
