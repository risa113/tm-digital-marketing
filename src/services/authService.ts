// Secure Cryptographic Authentication Service for TM Digital Marketing Admin CMS
// Uses Web Crypto API (PBKDF2 with SHA-256, 100,000 iterations & salt) for zero-dependency high security

export interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: 'SUPER_ADMIN';
  lastLogin: string;
}

export interface AuthSession {
  token: string;
  user: AdminUser;
  expiresAt: number; // Unix timestamp
}

interface RateLimitState {
  failedAttempts: number;
  lockoutUntil: number; // Unix timestamp
}

const STORAGE_KEYS = {
  SESSION: 'tm_admin_auth_session_v1',
  PASSWORD_HASH: 'tm_admin_pwd_hash_v1',
  PASSWORD_SALT: 'tm_admin_pwd_salt_v1',
  RATE_LIMIT: 'tm_admin_rate_limit_v1',
  REMEMBER_EMAIL: 'tm_admin_remember_email'
};

const SUPER_ADMIN_EMAIL = 'mohamedthariq113@gmail.com';
const MAX_FAILED_ATTEMPTS = 5;
const LOCKOUT_DURATION_MS = 5 * 60 * 1000; // 5 minutes lockout
const SESSION_DURATION_DEFAULT = 24 * 60 * 60 * 1000; // 24 hours
const SESSION_DURATION_REMEMBER = 7 * 24 * 60 * 60 * 1000; // 7 days

// Helper: Convert ArrayBuffer to Hex string
function bufferToHex(buffer: ArrayBuffer): string {
  const byteArray = new Uint8Array(buffer);
  const hexCodes = [...byteArray].map((value) => {
    const hexCode = value.toString(16);
    return hexCode.padStart(2, '0');
  });
  return hexCodes.join('');
}

// Helper: Cryptographic PBKDF2 Hash with Salt
async function hashPassword(password: string, salt: string): Promise<string> {
  const enc = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    enc.encode(password),
    { name: 'PBKDF2' },
    false,
    ['deriveBits', 'deriveKey']
  );

  const derivedBits = await crypto.subtle.deriveBits(
    {
      name: 'PBKDF2',
      salt: enc.encode(salt),
      iterations: 100000,
      hash: 'SHA-256'
    },
    keyMaterial,
    256
  );

  return bufferToHex(derivedBits);
}

// Generate secure random token
function generateSecureToken(): string {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return bufferToHex(array.buffer);
}

// Generate random salt
function generateSalt(): string {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  return bufferToHex(array.buffer);
}

export const authService = {
  // Check if admin is currently initialized
  async ensureAdminInitialized(): Promise<void> {
    const existingHash = localStorage.getItem(STORAGE_KEYS.PASSWORD_HASH);
    if (!existingHash) {
      // Initialize with secure initial password
      // Default initial password: TMDM@Growth2026!
      const initialSalt = generateSalt();
      const initialHash = await hashPassword('TMDM@Growth2026!', initialSalt);
      localStorage.setItem(STORAGE_KEYS.PASSWORD_SALT, initialSalt);
      localStorage.setItem(STORAGE_KEYS.PASSWORD_HASH, initialHash);
    }
  },

  // Check rate limiting
  getRateLimitStatus(): { isLocked: boolean; remainingSeconds: number } {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.RATE_LIMIT);
      if (!raw) return { isLocked: false, remainingSeconds: 0 };
      const state: RateLimitState = JSON.parse(raw);
      const now = Date.now();
      if (state.lockoutUntil > now) {
        const remainingSeconds = Math.ceil((state.lockoutUntil - now) / 1000);
        return { isLocked: true, remainingSeconds };
      }
      return { isLocked: false, remainingSeconds: 0 };
    } catch {
      return { isLocked: false, remainingSeconds: 0 };
    }
  },

  recordFailedAttempt(): { isLocked: boolean; remainingSeconds: number } {
    const raw = localStorage.getItem(STORAGE_KEYS.RATE_LIMIT);
    let state: RateLimitState = { failedAttempts: 0, lockoutUntil: 0 };
    if (raw) {
      try {
        state = JSON.parse(raw);
      } catch {}
    }

    state.failedAttempts += 1;
    const now = Date.now();

    if (state.failedAttempts >= MAX_FAILED_ATTEMPTS) {
      state.lockoutUntil = now + LOCKOUT_DURATION_MS;
      state.failedAttempts = 0; // Reset after setting lockout
      localStorage.setItem(STORAGE_KEYS.RATE_LIMIT, JSON.stringify(state));
      return { isLocked: true, remainingSeconds: Math.ceil(LOCKOUT_DURATION_MS / 1000) };
    }

    localStorage.setItem(STORAGE_KEYS.RATE_LIMIT, JSON.stringify(state));
    return { isLocked: false, remainingSeconds: 0 };
  },

  resetRateLimit(): void {
    localStorage.removeItem(STORAGE_KEYS.RATE_LIMIT);
  },

  // Login Method
  async login(email: string, password: string, rememberMe = false): Promise<{ success: boolean; error?: string }> {
    await this.ensureAdminInitialized();

    // Check rate limit
    const rateCheck = this.getRateLimitStatus();
    if (rateCheck.isLocked) {
      return {
        success: false,
        error: `Too many failed attempts. Security cooldown active. Please wait ${rateCheck.remainingSeconds} seconds.`
      };
    }

    const cleanEmail = email.trim().toLowerCase();
    if (cleanEmail !== SUPER_ADMIN_EMAIL.toLowerCase()) {
      const limit = this.recordFailedAttempt();
      if (limit.isLocked) {
        return {
          success: false,
          error: `Too many failed attempts. Security cooldown active for ${limit.remainingSeconds} seconds.`
        };
      }
      return { success: false, error: 'Invalid administrator credentials.' };
    }

    const storedHash = localStorage.getItem(STORAGE_KEYS.PASSWORD_HASH);
    const storedSalt = localStorage.getItem(STORAGE_KEYS.PASSWORD_SALT);

    if (!storedHash || !storedSalt) {
      return { success: false, error: 'Administrator security state error. Please refresh.' };
    }

    const computedHash = await hashPassword(password, storedSalt);
    if (computedHash !== storedHash) {
      const limit = this.recordFailedAttempt();
      if (limit.isLocked) {
        return {
          success: false,
          error: `Too many failed attempts. Security cooldown active for ${limit.remainingSeconds} seconds.`
        };
      }
      return { success: false, error: 'Invalid administrator credentials.' };
    }

    // Success: Reset rate limit
    this.resetRateLimit();

    // Create session
    const duration = rememberMe ? SESSION_DURATION_REMEMBER : SESSION_DURATION_DEFAULT;
    const user: AdminUser = {
      id: 'admin-super-1',
      email: SUPER_ADMIN_EMAIL,
      name: 'Mohamed Thariq',
      role: 'SUPER_ADMIN',
      lastLogin: new Date().toISOString()
    };

    const session: AuthSession = {
      token: generateSecureToken(),
      user,
      expiresAt: Date.now() + duration
    };

    localStorage.setItem(STORAGE_KEYS.SESSION, JSON.stringify(session));
    localStorage.setItem('tm_admin_user_email', SUPER_ADMIN_EMAIL);

    if (rememberMe) {
      localStorage.setItem(STORAGE_KEYS.REMEMBER_EMAIL, SUPER_ADMIN_EMAIL);
    } else {
      localStorage.removeItem(STORAGE_KEYS.REMEMBER_EMAIL);
    }

    return { success: true };
  },

  // Check if session is valid
  isAuthenticated(): boolean {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.SESSION);
      if (!raw) return false;
      const session: AuthSession = JSON.parse(raw);
      if (!session.token || !session.expiresAt) return false;
      if (Date.now() > session.expiresAt) {
        this.logout();
        return false;
      }
      return true;
    } catch {
      this.logout();
      return false;
    }
  },

  // Get current logged-in admin
  getCurrentUser(): AdminUser | null {
    if (!this.isAuthenticated()) return null;
    try {
      const session: AuthSession = JSON.parse(localStorage.getItem(STORAGE_KEYS.SESSION) || '{}');
      return session.user || null;
    } catch {
      return null;
    }
  },

  // Logout
  logout(): void {
    localStorage.removeItem(STORAGE_KEYS.SESSION);
  },

  // Change password
  async changePassword(currentPassword: string, newPassword: string): Promise<{ success: boolean; error?: string }> {
    if (!this.isAuthenticated()) {
      return { success: false, error: 'Unauthorized.' };
    }

    if (newPassword.length < 8) {
      return { success: false, error: 'New password must be at least 8 characters long.' };
    }

    const storedHash = localStorage.getItem(STORAGE_KEYS.PASSWORD_HASH);
    const storedSalt = localStorage.getItem(STORAGE_KEYS.PASSWORD_SALT);

    if (!storedHash || !storedSalt) {
      return { success: false, error: 'Security state error.' };
    }

    const currentComputed = await hashPassword(currentPassword, storedSalt);
    if (currentComputed !== storedHash) {
      return { success: false, error: 'Current password is incorrect.' };
    }

    // Set new salt & hash
    const newSalt = generateSalt();
    const newHash = await hashPassword(newPassword, newSalt);

    localStorage.setItem(STORAGE_KEYS.PASSWORD_SALT, newSalt);
    localStorage.setItem(STORAGE_KEYS.PASSWORD_HASH, newHash);

    return { success: true };
  },

  getRememberedEmail(): string {
    return localStorage.getItem(STORAGE_KEYS.REMEMBER_EMAIL) || '';
  }
};
