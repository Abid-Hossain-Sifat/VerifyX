'use client';

import React from 'react';
import Link from 'next/link';
import { User } from 'lucide-react';

interface NavbarProps {
  username?: string;
}

const Navbar: React.FC<NavbarProps> = ({ username = 'Alex Mercer' }) => {
  return (
    <header className="w-full border-b border-[#1E293B]/60 bg-[#07090E]/90 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-[80%] mx-auto py-3.5 flex items-center justify-between gap-4">
        
        {/* Left: Brand / Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-[#00F5D4] font-mono text-sm tracking-tighter">—</span>
          <span className="text-base font-extrabold tracking-wider text-white font-mono">
            VERIFY<span className="text-[#00F5D4]">X</span>
          </span>
          <span className="text-[10px] font-mono tracking-wider text-cyan-300 border border-cyan-500/40 rounded px-1.5 py-0.5 bg-cyan-950/40 uppercase">
            VERIFY
          </span>
        </Link>

        {/* Center: System Status Pill */}
        <div className="hidden md:flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0C111C] border border-[#1E2A3C] shadow-inner text-[11px] font-mono tracking-wider text-slate-300">
          <span className="w-2 h-2 rounded-full bg-[#00F5D4] shadow-[0_0_8px_#00F5D4] animate-pulse" />
          <span className="text-slate-400">SYSTEM STATUS:</span>
          <span className="text-cyan-400 font-semibold">OPERATIONAL</span>
          <span className="text-slate-600">—</span>
          <span className="text-slate-400">E2E ENCRYPTED</span>
        </div>

        {/* Right: Username Profile Display */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0C121F] border border-cyan-500/30 hover:border-cyan-400/60 transition-all shadow-[0_0_12px_rgba(0,245,212,0.1)] cursor-pointer">
            <div className="relative flex items-center justify-center w-7 h-7 rounded-full bg-cyan-950/60 border border-cyan-400/40 text-[#00F5D4]">
              <User className="w-4 h-4" />
              <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-[#00F5D4] ring-2 ring-[#07090E] animate-pulse" />
            </div>

            <div className="flex flex-col text-left">
              <span className="text-xs font-semibold text-gray-200 tracking-wide font-mono">
                {username}
              </span>
              <span className="text-[10px] font-mono text-cyan-400/80 -mt-0.5">
                Authenticated
              </span>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
