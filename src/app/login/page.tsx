'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  KeyRound, 
  ArrowRight, 
  ShieldCheck, 
  X, 
  RefreshCw 
} from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();

  // Login Form States
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // OTP Modal States
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [otpTimer, setOtpTimer] = useState(60);
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);
  const [otpError, setOtpError] = useState('');
  const otpInputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Timer countdown effect for OTP Modal
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (showOtpModal && otpTimer > 0) {
      interval = setInterval(() => {
        setOtpTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [showOtpModal, otpTimer]);

  // Focus the first OTP box when modal opens
  useEffect(() => {
    if (showOtpModal) {
      setTimeout(() => {
        otpInputRefs.current[0]?.focus();
      }, 100);
    }
  }, [showOtpModal]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setError('');
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError('Please fill in both email and password');
      return;
    }

    setIsLoading(true);

    // Simulate credentials verification -> trigger OTP Modal
    setTimeout(() => {
      setIsLoading(false);
      setOtp(['', '', '', '', '', '']);
      setOtpTimer(60);
      setOtpError('');
      setShowOtpModal(true);
    }, 600);
  };

  // OTP Input Logic: Auto-advance, backspace, paste
  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    setOtpError('');

    // Advance to next box
    if (value && index < 5) {
      otpInputRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpInputRefs.current[index - 1]?.focus();
    }
  };

  const handleOtpPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').trim();
    if (/^\d{6}$/.test(pasted)) {
      const digits = pasted.split('');
      setOtp(digits);
      otpInputRefs.current[5]?.focus();
    }
  };

  const handleResendOtp = () => {
    setOtpTimer(60);
    setOtp(['', '', '', '', '', '']);
    setOtpError('');
    otpInputRefs.current[0]?.focus();
    console.log('Resending OTP to:', formData.email);
  };

  const handleVerifyOtp = () => {
    const code = otp.join('');
    if (code.length < 6) {
      setOtpError('Please enter all 6 digits of the OTP');
      return;
    }

    setIsVerifyingOtp(true);
    // Simulate successful OTP verification -> Navigate to Home
    setTimeout(() => {
      setIsVerifyingOtp(false);
      setShowOtpModal(false);
      router.push('/home');
    }, 800);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative">
      {/* Brand Header */}
      <Link href="/" className="flex items-center gap-2.5 mb-6 group">
        <ShieldCheck className="w-6 h-6 text-[#00F5D4] drop-shadow-[0_0_10px_rgba(0,245,212,0.6)] group-hover:scale-110 transition-transform duration-200" />
        <span className="text-xl font-extrabold tracking-widest text-white font-mono">
          VERIFY<span className="text-[#00F5D4]">X</span>
        </span>
      </Link>

      {/* Login Card (Apple iOS Glass) */}
      <div className="w-full max-w-md mx-auto">
        <div className="relative rounded-3xl bg-white/[0.03] border border-white/[0.12] p-7 sm:p-8 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_25px_60px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.2)]">
          
          {/* Top subtle cyan specular light */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-44 h-[1px] bg-gradient-to-r from-transparent via-[#00F5D4]/80 to-transparent" />

          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/[0.15] text-[#00F5D4] mb-3 shadow-[0_0_20px_rgba(0,245,212,0.2),inset_0_1px_1px_rgba(255,255,255,0.2)]">
              <KeyRound className="w-6 h-6 drop-shadow-[0_0_6px_rgba(0,245,212,0.6)]" />
            </div>
            <h2 className="text-2xl font-bold text-white tracking-wide font-mono">
              Welcome Back
            </h2>
            <p className="text-xs text-slate-400 mt-1 font-mono">
              Enter your credentials to initiate OTP verification
            </p>
          </div>

          {/* Error Alert */}
          {error && (
            <div className="mb-4 px-3.5 py-2 rounded-xl bg-red-950/40 border border-red-500/30 text-red-400 text-xs font-mono">
              {error}
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            
            {/* Email Address */}
            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-slate-100 placeholder-slate-600 text-xs sm:text-sm focus:outline-none focus:border-[#00F5D4] focus:ring-1 focus:ring-[#00F5D4] transition-all"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  Password
                </label>
                <Link 
                  href="#" 
                  className="text-[10px] font-mono text-[#00F5D4]/80 hover:text-[#00F5D4] transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-black/40 border border-white/10 text-slate-100 placeholder-slate-600 text-xs sm:text-sm focus:outline-none focus:border-[#00F5D4] focus:ring-1 focus:ring-[#00F5D4] transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-500 hover:text-slate-300 cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Confirm & Sign In Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 px-4 rounded-xl bg-[#00F5D4] text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-[#00d8bc] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,245,212,0.3)] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                <span>{isLoading ? 'Verifying Credentials...' : 'Confirm & Sign In'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </form>

          {/* Link to Sign-up */}
          <div className="mt-6 pt-5 border-t border-white/[0.08] text-center">
            <p className="text-xs text-slate-400">
              Don&apos;t have an account?{' '}
              <Link
                href="/sign-up"
                className="text-[#00F5D4] font-semibold hover:underline underline-offset-4 transition-colors inline-flex items-center gap-1"
              >
                Sign up
              </Link>
            </p>
          </div>

        </div>
      </div>

      {/* Minimal Bottom Security Footnote */}
      <p className="mt-8 text-center text-[11px] font-mono text-slate-500">
        © {new Date().getFullYear()} VerifyX • End-to-End Encrypted OTP Auth
      </p>

      {/* ========================================================================= */}
      {/* APPLE iOS GLASS OTP VERIFICATION MODAL                                    */}
      {/* ========================================================================= */}
      {showOtpModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-md p-7 sm:p-8 rounded-3xl bg-white/[0.04] border border-white/[0.14] backdrop-blur-2xl backdrop-saturate-150 shadow-[0_30px_70px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.2)] text-center">
            
            {/* Top specular cyan highlight line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-[1px] bg-gradient-to-r from-transparent via-[#00F5D4] to-transparent" />

            {/* Close Button */}
            <button
              onClick={() => setShowOtpModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Shield Icon Badge */}
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/[0.15] text-[#00F5D4] mb-4 shadow-[0_0_25px_rgba(0,245,212,0.25),inset_0_1px_1px_rgba(255,255,255,0.2)]">
              <ShieldCheck className="w-7 h-7 drop-shadow-[0_0_8px_rgba(0,245,212,0.6)]" />
            </div>

            {/* Modal Title */}
            <h3 className="text-xl font-bold text-white tracking-wide font-mono">
              Two-Factor Authentication
            </h3>
            <p className="text-xs text-slate-400 mt-1 font-mono">
              Enter the 6-digit security code sent to <br />
              <span className="text-[#00F5D4] font-medium">{formData.email}</span>
            </p>

            {/* OTP Error Message */}
            {otpError && (
              <div className="mt-3 px-3 py-1.5 rounded-xl bg-red-950/50 border border-red-500/30 text-red-400 text-xs font-mono">
                {otpError}
              </div>
            )}

            {/* 6 Split OTP Digit Boxes */}
            <div className="flex items-center justify-center gap-2 sm:gap-2.5 my-6">
              {otp.map((digit, idx) => (
                <input
                  key={idx}
                  ref={(el) => {
                    otpInputRefs.current[idx] = el;
                  }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(idx, e.target.value)}
                  onKeyDown={(e) => handleOtpKeyDown(idx, e)}
                  onPaste={handleOtpPaste}
                  className="w-10 sm:w-11 h-12 sm:h-13 text-center text-lg sm:text-xl font-bold font-mono text-white bg-black/40 border border-white/15 rounded-xl focus:outline-none focus:border-[#00F5D4] focus:ring-1 focus:ring-[#00F5D4] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] transition-all"
                />
              ))}
            </div>

            {/* Resend Countdown Timer */}
            <div className="text-xs font-mono text-slate-400 mb-6">
              {otpTimer > 0 ? (
                <span>
                  Resend code in{' '}
                  <strong className="text-[#00F5D4] font-semibold">
                    00:{otpTimer < 10 ? `0${otpTimer}` : otpTimer}
                  </strong>
                </span>
              ) : (
                <button
                  type="button"
                  onClick={handleResendOtp}
                  className="text-[#00F5D4] hover:underline font-medium inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Resend Security Code</span>
                </button>
              )}
            </div>

            {/* Modal Action Buttons */}
            <div className="space-y-2.5">
              <button
                type="button"
                onClick={handleVerifyOtp}
                disabled={isVerifyingOtp || otp.join('').length < 6}
                className="w-full py-3 px-4 rounded-xl bg-[#00F5D4] text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-[#00d8bc] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,245,212,0.3)] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                <span>{isVerifyingOtp ? 'Verifying OTP...' : 'Verify Code & Proceed →'}</span>
              </button>

              <button
                type="button"
                onClick={() => setShowOtpModal(false)}
                className="w-full py-2 text-xs font-mono text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Cancel & Return
              </button>
            </div>

          </div>
        </div>
      )}
    </main>
  );
}