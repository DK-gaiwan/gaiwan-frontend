import React, { useEffect } from 'react';

declare global {
  interface Window {
    Telegram?: {
      WebApp?: {
        initData?: string;
        initDataUnsafe?: any;
        ready: () => void;
        sendData?: (data: string) => void;
        close?: () => void;
      };
    };
  }
}

function App() {
  useEffect(() => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready();
    }
  }, []);

  return <div>Hello from Gaiwan Frontend WebApp</div>;
}

export default App;
