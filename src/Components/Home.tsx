'use client';

import React from 'react';
import { ShieldCheck, Mail, LogOut, CheckCircle2, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

interface HomeProps {
  user?: {
    name?: string;
    email?: string;
  };
  onLogout?: () => void;
}

// Apple iOS silk easing curve: ultra-smooth deceleration tail with zero abrupt finish
const SMOOTH_EASE = [0.16, 1, 0.3, 1] as const;

const Home: React.FC<HomeProps> = ({
  user = { name: 'Alex Mercer', email: 'alex@cod3x.dev' },
  onLogout,
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.65, ease: SMOOTH_EASE }}
      className="w-full max-w-lg mx-auto"
    >
      {/* Apple iOS Frosted Acrylic Glass Card */}
      <div className="relative rounded-3xl bg-white/[0.03] border border-white/[0.12] p-8 sm:p-10 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_25px_60px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.2)] text-center">
        
        {/* Top subtle cyan specular light */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-44 h-[1px] bg-gradient-to-r from-transparent via-[#00F5D4]/80 to-transparent" />

        {/* iOS Frosted Icon Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: SMOOTH_EASE, delay: 0.08 }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/[0.05] border border-white/[0.15] text-[#00F5D4] mb-5 shadow-[0_0_25px_rgba(0,245,212,0.25),inset_0_1px_1px_rgba(255,255,255,0.2)]"
        >
          <CheckCircle2 className="w-8 h-8 drop-shadow-[0_0_8px_rgba(0,245,212,0.6)]" />
        </motion.div>

        {/* Greeting & Title */}
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: SMOOTH_EASE, delay: 0.12 }}
          className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide font-mono"
        >
          Welcome, {user.name}!
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: SMOOTH_EASE, delay: 0.16 }}
          className="text-xs sm:text-sm text-cyan-400 font-mono mt-1.5 flex items-center justify-center gap-1.5"
        >
          <span className="w-2 h-2 rounded-full bg-[#00F5D4] shadow-[0_0_6px_#00F5D4] animate-pulse" />
          OTP Verification Successful
        </motion.p>

        {/* Status & Account Info Glass Box */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: SMOOTH_EASE, delay: 0.2 }}
          className="mt-6 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] text-left space-y-3"
        >
          <div className="flex items-center justify-between text-xs font-mono">
            <p className="text-slate-400 flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#00F5D4]" />
              Account Email
            </p>
            <p className="text-slate-200 font-medium">
              {user.email}
            </p>
          </div>

          <div className="w-full h-px bg-white/[0.06]" />

          <div className="flex items-center justify-between text-xs font-mono">
            <p className="text-slate-400 flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00F5D4]" />
              Security Method
            </p>
            <p className="text-[#00F5D4] font-semibold flex items-center gap-1">
              Email OTP Verified ✓
            </p>
          </div>

          <div className="w-full h-px bg-white/[0.06]" />

          <div className="flex items-center justify-between text-xs font-mono">
            <p className="text-slate-400 flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-[#00F5D4]" />
              Session State
            </p>
            <p className="text-slate-300">
              Authenticated & Secure
            </p>
          </div>
        </motion.div>

        {/* Sign Out Action Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: SMOOTH_EASE, delay: 0.24 }}
          className="mt-8"
        >
          <motion.button
            onClick={onLogout}
            type="button"
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
            transition={{ duration: 0.2, ease: SMOOTH_EASE }}
            className="w-full py-3 px-4 rounded-2xl border border-red-500/30 bg-red-950/20 backdrop-blur-md text-red-400 font-mono font-bold text-xs uppercase tracking-wider hover:bg-red-950/40 hover:border-red-500/60 transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
          >
            <LogOut className="w-4 h-4" />
            Terminate Session & Sign Out
          </motion.button>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default Home;
