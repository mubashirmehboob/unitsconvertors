import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Global resilience handlers to catch and suppress read-only fetch getter/setter collision errors
if (typeof window !== 'undefined') {
  const handleFetchError = (msg: string) => {
    return msg && (
      msg.includes('Cannot set property fetch') || 
      msg.includes('fetch of #<Window>') || 
      msg.includes('read-only')
    );
  };

  window.addEventListener('error', (event) => {
    if (event.message && handleFetchError(event.message)) {
      event.preventDefault();
      event.stopPropagation();
      console.warn('Suppressed fetch property assignment collision error:', event.message);
    }
  }, true);

  window.addEventListener('unhandledrejection', (event) => {
    const reasonMsg = event.reason?.message || String(event.reason);
    if (reasonMsg && handleFetchError(reasonMsg)) {
      event.preventDefault();
      event.stopPropagation();
      console.warn('Suppressed fetch property assignment rejection:', reasonMsg);
    }
  }, true);
}

// Active unregistration of any stale service worker to prevent clashes with platform secure fetch proxying
if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    for (const registration of registrations) {
      registration.unregister().then((success) => {
        if (success) {
          console.log('Stale service worker unregistered successfully.');
        }
      });
    }
  }).catch((err) => {
    console.warn('Failed to get service worker registrations:', err);
  });
}

// Clear any stale caches to ensure fresh assets are loaded
if (typeof window !== 'undefined' && 'caches' in window) {
  caches.keys().then((keys) => {
    keys.forEach((key) => {
      caches.delete(key).catch(() => {});
    });
  }).catch(() => {});
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

