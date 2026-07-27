import { Link } from 'react-router-dom';
import { Home, ArrowLeft, AlertCircle } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="w-full pt-32 pb-24 bg-[#F8FAFC] dark:bg-[#0F172A] min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-blue-50 dark:bg-blue-950 text-[#2563EB] flex items-center justify-center mx-auto shadow-xl">
          <AlertCircle className="w-10 h-10" />
        </div>

        <span className="text-xs font-black uppercase tracking-widest text-[#2563EB]">404 Error - Page Not Found</span>

        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#111827] dark:text-white">
          Oops! That Page Doesn't Exist.
        </h1>

        <p className="text-xs sm:text-sm text-[#64748B] dark:text-slate-300">
          The link you followed may be broken or the page has been moved. Explore our core pages below:
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-[#2563EB] text-white font-btn font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            to="/services"
            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-white font-btn font-bold text-xs flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>View Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
