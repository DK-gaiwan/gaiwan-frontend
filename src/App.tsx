import React, { useEffect, useState } from "react";

const App: React.FC = () => {
  const [mix, setMix] = useState("Чай: Те Гуань Инь + Табак: Дыня");

  useEffect(() => {
    if (window.Telegram.WebApp) {
      window.Telegram.WebApp.ready();
    }
  }, []);

  const sendMix = () => {
    fetch("https://gaiwan-backend.onrender.com/send-mix", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: mix, telegram_id: window.Telegram.WebApp.initDataUnsafe.user?.id })
    }).then(() => {
      alert("Микс отправлен!");
    }).catch(() => {
      alert("Ошибка отправки");
    });
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Гайвань кальянщика</h1>
      <p>{mix}</p>
      <button onClick={sendMix}>Отправить микс</button>
    </div>
  );
};

export default App;
