import React from 'react';
import Link from 'next/link';
import { ShieldCheck, MailCheck } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-auto border-t border-white/[0.08] bg-white/[0.02] backdrop-blur-2xl backdrop-saturate-150 py-6 text-slate-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
      <div className="max-w-[80%] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
        
        {/* Left: Brand & Context */}
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <span className="font-extrabold tracking-wider text-white font-mono">
            VERIFY<span className="text-[#00F5D4]">X</span>
          </span>
          <span className="hidden sm:inline text-slate-600">•</span>
          <span className="text-slate-400">
            Secure OTP Verification & Authentication System
          </span>
        </div>

        {/* Center/Right: Feature indicator & Links */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-1.5 text-cyan-400/90 font-mono text-[11px]">
            <MailCheck className="w-3.5 h-3.5 text-[#00F5D4]" />
            <span>Email OTP & 2FA Protected</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <Link 
              href="#" 
              className="hover:text-[#00F5D4] transition-colors duration-200"
            >
              Privacy
            </Link>
            <Link 
              href="#" 
              className="hover:text-[#00F5D4] transition-colors duration-200"
            >
              Terms
            </Link>
            <Link 
              href="#" 
              className="hover:text-[#00F5D4] transition-colors duration-200"
            >
              Support
            </Link>
          </div>
        </div>

        {/* Far Right: Copyright */}
        <div className="text-slate-500 font-mono text-[11px]">
          © {currentYear} VerifyX. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
