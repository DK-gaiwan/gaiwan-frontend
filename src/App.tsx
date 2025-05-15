import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    if (window.Telegram.WebApp) {
      window.Telegram.WebApp.ready();
    }
  }, []);

  return (
    <div>
      <h1>Гайвань кальянщика</h1>
      <p>Добро пожаловать!</p>
    </div>
  );
}

export default App;
