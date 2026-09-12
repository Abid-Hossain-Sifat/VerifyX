'use client';

import React from 'react';
import Link from 'next/link';
import { User, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavbarProps {
  username?: string;
}

const Navbar: React.FC<NavbarProps> = ({ username = 'Alex Mercer' }) => {
  return (
    <motion.header 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="w-full border-b border-white/[0.08] bg-white/[0.02] backdrop-blur-2xl backdrop-saturate-150 sticky top-0 z-50 shadow-[0_4px_30px_rgba(0,0,0,0.3),inset_0_-1px_0_rgba(255,255,255,0.05)]"
    >
      <div className="max-w-[80%] mx-auto py-3.5 flex items-center justify-between gap-4">
        
        {/* Left: Brand / Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <ShieldCheck className="w-5 h-5 text-[#00F5D4] drop-shadow-[0_0_8px_rgba(0,245,212,0.6)] group-hover:scale-110 transition-transform duration-200" />
          <h2 className="text-base font-extrabold tracking-wider text-white font-mono">
            VERIFY<span className="text-[#00F5D4]">X</span>
          </h2>
          <p className="text-[10px] font-mono tracking-wider text-cyan-300 border border-cyan-500/30 rounded-md px-1.5 py-0.5 bg-cyan-950/30 uppercase">
            VERIFY
          </p>
        </Link>

        {/* Right: Username Profile Display */}
        <div className="flex items-center gap-3">
          <motion.div 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md hover:bg-white/[0.08] hover:border-white/20 transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] cursor-pointer"
          >
            <div className="relative flex items-center justify-center w-7 h-7 rounded-full bg-white/[0.08] border border-white/15 text-[#00F5D4]">
              <User className="w-4 h-4" />
              <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-[#00F5D4] ring-2 ring-[#07090E] animate-pulse" />
            </div>

            <div className="flex flex-col text-left">
              <p className="text-xs font-semibold text-gray-200 tracking-wide font-mono">
                {username}
              </p>
              <p className="text-[10px] font-mono text-cyan-400/80 -mt-0.5">
                Authenticated
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </motion.header>
  );
};

export default Navbar;
