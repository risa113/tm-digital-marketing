import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyBGAvo_C8NXmKCidsJQI0W7u_kHzyihir8',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'tmdigitaldb.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'tmdigitaldb',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'tmdigitaldb.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '857152535137',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:857152535137:web:41a16b1012016e7f6f4820'
};

export const isFirebaseConfigured = () => {
  return Boolean(firebaseConfig.apiKey && firebaseConfig.projectId);
};

let dbInstance: any = null;

if (isFirebaseConfigured()) {
  try {
    const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    dbInstance = getFirestore(app);
  } catch (err) {
    console.warn('[Firebase Init Warning]:', err);
  }
}

export const db = dbInstance;
export { collection, addDoc, serverTimestamp };
