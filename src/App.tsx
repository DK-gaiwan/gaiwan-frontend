
import React, { useState } from "react";
import "./App.css";

function App() {
  const [flavor, setFlavor] = useState("");
  const [mix, setMix] = useState("");

  const handleGenerate = async () => {
    const response = await fetch("https://gaiwan-backend.onrender.com/generate_mix", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ flavor })
    });
    const data = await response.json();
    setMix(data.mix || "Ошибка генерации микса");
  };

  return (
    <div className="App">
      <h1>Гайвань кальянщика</h1>
      <input
        value={flavor}
        onChange={(e) => setFlavor(e.target.value)}
        placeholder="Введите вкус (например, черника)"
      />
      <button onClick={handleGenerate}>Создать микс</button>
      {mix && <p><strong>Микс:</strong> {mix}</p>}
    </div>
  );
}

export default App;
