import React from 'react';
import { ShieldCheck, Award, KeyRound, Database, Lock } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-auto border-t border-[#1E293B]/60 bg-[#07090E] text-slate-400 py-6">
      <div className="max-w-[80%] mx-auto space-y-6">
        
        {/* Top Badges Row matching reference image */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2 text-[11px] font-mono tracking-wider uppercase text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#00F5D4] shrink-0" />
            <span className="hover:text-slate-200 transition-colors">SOC2 TYPE II CERTIFIED</span>
          </div>

          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#00F5D4] shrink-0" />
            <span className="hover:text-slate-200 transition-colors">ISO 27001 INFRASTRUCTURE</span>
          </div>

          <div className="flex items-center gap-2">
            <KeyRound className="w-4 h-4 text-[#00F5D4] shrink-0" />
            <span className="hover:text-slate-200 transition-colors">WEBAUTHN COMPLIANT</span>
          </div>

          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-[#00F5D4] shrink-0" />
            <span className="hover:text-slate-200 transition-colors">ZERO KNOWLEDGE VAULTING</span>
          </div>
        </div>

        {/* Subtle Divider */}
        <div className="w-full h-px bg-[#162032]" />

        {/* Bottom Bar matching reference image */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-slate-500">
          <div>
            © {currentYear} VERIFYX. Secure authentication system.
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-cyan-400">
              <Lock className="w-3.5 h-3.5 text-[#00F5D4]" />
              <span className="tracking-wider uppercase">ZERO TRUST SESSION</span>
            </div>

            <div className="flex items-center gap-1.5 text-violet-400">
              <span className="w-2 h-2 rounded-full bg-violet-400 shadow-[0_0_6px_#a78bfa]" />
              <span className="tracking-wider uppercase">FIDO2 / PASSKEY CORE</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
