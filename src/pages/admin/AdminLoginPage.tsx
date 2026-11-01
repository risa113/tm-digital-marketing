import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Lock, Mail, Eye, EyeOff, ShieldCheck, ArrowRight, AlertCircle, Loader2 } from 'lucide-react';
import Logo from '../../components/Logo';
import { authService } from '../../services/authService';

export default function AdminLoginPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [cooldownSeconds, setCooldownSeconds] = useState(0);

  // If already authenticated, redirect to dashboard
  useEffect(() => {
    if (authService.isAuthenticated()) {
      navigate('/admin/dashboard', { replace: true });
    }
    const rem = authService.getRememberedEmail();
    if (rem) {
      setEmail(rem);
    } else {
      setEmail('mohamedthariq113@gmail.com');
    }

    // Check rate limit status
    const status = authService.getRateLimitStatus();
    if (status.isLocked) {
      setCooldownSeconds(status.remainingSeconds);
    }
  }, [navigate]);

  // Cooldown countdown timer
  useEffect(() => {
    if (cooldownSeconds <= 0) return;
    const timer = setInterval(() => {
      setCooldownSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setErrorMessage('');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [cooldownSeconds]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email.trim() || !password) {
      setErrorMessage('Please enter both email and password.');
      return;
    }

    setLoading(true);

    try {
      const res = await authService.login(email, password, rememberMe);
      if (res.success) {
        // Redirect to intended path or default dashboard
        const from = (location.state as any)?.from?.pathname || '/admin/dashboard';
        navigate(from, { replace: true });
      } else {
        setErrorMessage(res.error || 'Authentication failed. Please verify credentials.');
        const status = authService.getRateLimitStatus();
        if (status.isLocked) {
          setCooldownSeconds(status.remainingSeconds);
        }
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'An unexpected error occurred during login.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#F8FAFC] dark:bg-[#0B101D] flex flex-col justify-center items-center p-4 sm:p-6 font-poppins relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-200/50 dark:bg-blue-900/30 blur-[130px] rounded-full" />
      </div>

      <div className="w-full max-w-md relative z-10 space-y-6">
        
        {/* Logo and Header */}
        <div className="text-center space-y-3">
          <div className="flex justify-center">
            <Logo size="md" showTagline={false} />
          </div>
          <div className="space-y-1">
            <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">
              Administrator Portal
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Sign in to manage TM Digital Marketing CMS & Public Portfolio
            </p>
          </div>
        </div>

        {/* Login Card */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 shadow-xl shadow-slate-200/50 dark:shadow-none space-y-6">
          
          {/* Error Message */}
          {errorMessage && (
            <div className="p-3.5 rounded-2xl bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-800/80 text-red-600 dark:text-red-400 text-xs flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Cooldown Alert */}
          {cooldownSeconds > 0 && (
            <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300 text-xs flex items-center gap-2">
              <Lock className="w-4 h-4 shrink-0" />
              <span>Security lockout active. Try again in <strong>{cooldownSeconds}s</strong></span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Email Field */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                Administrator Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@tmdigitalgrow.com"
                  disabled={loading || cooldownSeconds > 0}
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-all"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                Master Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  disabled={loading || cooldownSeconds > 0}
                  required
                  className="w-full pl-10 pr-10 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 cursor-pointer select-none text-slate-600 dark:text-slate-400">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded text-[#2563EB] focus:ring-[#2563EB] border-slate-300 dark:border-slate-700"
                />
                <span>Remember this workstation</span>
              </label>

              <span className="text-[11px] font-semibold text-slate-400">
                Super Admin Only
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || cooldownSeconds > 0}
              className="w-full py-3.5 px-4 rounded-2xl bg-[#2563EB] hover:bg-[#1D4ED8] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-xs shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer pt-3"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Verifying Credentials...</span>
                </>
              ) : (
                <>
                  <span>Sign In to Dashboard</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Security Notice */}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-center">
            <p className="text-[10px] text-slate-400 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Protected by PBKDF2 100K-Iteration Cryptographic Salting</span>
            </p>
          </div>
        </div>

        {/* Back Link */}
        <div className="text-center">
          <Link
            to="/"
            className="text-xs font-semibold text-slate-500 hover:text-[#2563EB] transition-colors"
          >
            &larr; Back to Public TM Digital Marketing Website
          </Link>
        </div>

      </div>

    </div>
  );
}
