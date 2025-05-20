import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready();
    }
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Гайвань кальянщика</h1>
      <p>Добро пожаловать в приложение для подбора кальяна и чая!</p>
    </div>
  );
}

export default App;
