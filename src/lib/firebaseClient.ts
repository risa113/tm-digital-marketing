import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, query, orderBy } from 'firebase/firestore';

// Firebase configuration parameters
export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || localStorage.getItem('tm_firebase_api_key') || '',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || localStorage.getItem('tm_firebase_auth_domain') || '',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || localStorage.getItem('tm_firebase_project_id') || '',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || localStorage.getItem('tm_firebase_storage_bucket') || '',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || localStorage.getItem('tm_firebase_sender_id') || '',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || localStorage.getItem('tm_firebase_app_id') || ''
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
    console.warn('[Firebase Init Error]:', err);
  }
}

export const db = dbInstance;
export { collection, addDoc, getDocs, query, orderBy };
