import React, { useState } from 'react';
import { ShieldCheck, Lock, CheckCircle2, AlertCircle, Key, User } from 'lucide-react';
import { authService } from '../../services/authService';
import { CMSService } from '../../services/cmsService';

export default function AdminProfilePage() {
  const currentUser = authService.getCurrentUser();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (newPassword.length < 8) {
      setMessage({ type: 'error', text: 'New password must be at least 8 characters long.' });
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage({ type: 'error', text: 'New password and confirmation do not match.' });
      return;
    }

    setLoading(true);

    try {
      const res = await authService.changePassword(currentPassword, newPassword);
      if (res.success) {
        setMessage({ type: 'success', text: 'Master administrator password updated successfully!' });
        CMSService.logActivity('Changed Master Password', 'Admin Security', 'auth');
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
      } else {
        setMessage({ type: 'error', text: res.error || 'Failed to update password.' });
      }
    } catch (err: any) {
      setMessage({ type: 'error', text: err.message || 'Error updating password.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 max-w-4xl">
      
      {/* Header */}
      <div>
        <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">
          Administrator Security Profile
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          Manage super administrator credentials, cryptographic master keys, and workstation sessions.
        </p>
      </div>

      {/* Profile Overview Card */}
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-4 shadow-xs">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-xl shadow-md">
            MT
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h2 className="font-heading font-extrabold text-lg text-slate-900 dark:text-white">
                {currentUser?.name || 'Mohamed Thariq'}
              </h2>
              <span className="px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950 text-[#2563EB] text-[10px] font-black border border-blue-200 dark:border-blue-800">
                SUPER_ADMIN
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {currentUser?.email || 'mohamedthariq113@gmail.com'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 space-y-0.5">
            <span className="text-[10px] text-slate-400 uppercase font-bold">Access Level</span>
            <div className="font-bold text-slate-900 dark:text-white">Full CMS Read/Write</div>
          </div>
          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 space-y-0.5">
            <span className="text-[10px] text-slate-400 uppercase font-bold">Public Registration</span>
            <div className="font-bold text-slate-900 dark:text-white">Disabled (Strict)</div>
          </div>
          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 space-y-0.5">
            <span className="text-[10px] text-slate-400 uppercase font-bold">Brute-Force Protection</span>
            <div className="font-bold text-emerald-600 dark:text-emerald-400">Active (5 Attempts)</div>
          </div>
        </div>
      </div>

      {/* Password Change Form */}
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-4 shadow-xs text-xs">
        <div className="flex items-center gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
          <Key className="w-4 h-4 text-[#2563EB]" />
          <h2 className="font-heading font-extrabold text-base text-slate-900 dark:text-white">
            Change Master Password
          </h2>
        </div>

        {message && (
          <div className={`p-3.5 rounded-2xl border flex items-center gap-2 ${
            message.type === 'success'
              ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400'
              : 'bg-red-50 dark:bg-red-950/60 border-red-200 dark:border-red-800 text-red-600 dark:text-red-400'
          }`}>
            {message.type === 'success' ? <CheckCircle2 className="w-4 h-4 shrink-0" /> : <AlertCircle className="w-4 h-4 shrink-0" />}
            <span>{message.text}</span>
          </div>
        )}

        <form onSubmit={handlePasswordChange} className="space-y-4">
          <div className="space-y-1">
            <label className="font-bold text-slate-700 dark:text-slate-300">Current Password *</label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="••••••••••••"
              required
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-[#2563EB]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="font-bold text-slate-700 dark:text-slate-300">New Master Password *</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="At least 8 characters"
                required
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-[#2563EB]"
              />
            </div>

            <div className="space-y-1">
              <label className="font-bold text-slate-700 dark:text-slate-300">Confirm New Password *</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Repeat new password"
                required
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-[#2563EB]"
              />
            </div>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] disabled:opacity-50 text-white font-bold shadow-md shadow-blue-600/30 transition-all cursor-pointer"
            >
              {loading ? 'Encrypting & Saving...' : 'Update Password'}
            </button>
          </div>
        </form>
      </div>

    </div>
  );
}
