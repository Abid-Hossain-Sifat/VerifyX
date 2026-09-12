'use client';

import React from 'react';
import { ShieldCheck, Mail, LogOut, CheckCircle2, Lock } from 'lucide-react';

interface HomeProps {
  user?: {
    name?: string;
    email?: string;
  };
  onLogout?: () => void;
}

const Home: React.FC<HomeProps> = ({
  user = { name: 'Alex Mercer', email: 'alex@cod3x.dev' },
  onLogout,
}) => {
  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Apple iOS Frosted Acrylic Glass Card */}
      <div className="relative rounded-3xl bg-white/[0.03] border border-white/[0.12] p-8 sm:p-10 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_25px_60px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.2)] text-center">
        
        {/* Top subtle cyan specular light */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-44 h-[1px] bg-gradient-to-r from-transparent via-[#00F5D4]/80 to-transparent" />

        {/* iOS Frosted Icon Badge */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/[0.05] border border-white/[0.15] text-[#00F5D4] mb-5 shadow-[0_0_25px_rgba(0,245,212,0.25),inset_0_1px_1px_rgba(255,255,255,0.2)]">
          <CheckCircle2 className="w-8 h-8 drop-shadow-[0_0_8px_rgba(0,245,212,0.6)]" />
        </div>

        {/* Greeting & Title */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide font-mono">
          Welcome, {user.name}!
        </h1>
        <p className="text-xs sm:text-sm text-cyan-400 font-mono mt-1.5 flex items-center justify-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#00F5D4] shadow-[0_0_6px_#00F5D4] animate-pulse" />
          OTP Verification Successful
        </p>

        {/* Status & Account Info Glass Box */}
        <div className="mt-6 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] text-left space-y-3">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400 flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#00F5D4]" />
              Account Email
            </span>
            <span className="text-slate-200 font-medium">
              {user.email}
            </span>
          </div>

          <div className="w-full h-px bg-white/[0.06]" />

          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400 flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00F5D4]" />
              Security Method
            </span>
            <span className="text-[#00F5D4] font-semibold flex items-center gap-1">
              Email OTP Verified ✓
            </span>
          </div>

          <div className="w-full h-px bg-white/[0.06]" />

          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400 flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-[#00F5D4]" />
              Session State
            </span>
            <span className="text-slate-300">
              Authenticated & Secure
            </span>
          </div>
        </div>

        {/* Sign Out Action Button */}
        <div className="mt-8">
          <button
            onClick={onLogout}
            type="button"
            className="w-full py-3 px-4 rounded-2xl border border-red-500/30 bg-red-950/20 backdrop-blur-md text-red-400 font-mono font-bold text-xs uppercase tracking-wider hover:bg-red-950/40 hover:border-red-500/60 active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
          >
            <LogOut className="w-4 h-4" />
            <span>Terminate Session & Sign Out</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default Home;
