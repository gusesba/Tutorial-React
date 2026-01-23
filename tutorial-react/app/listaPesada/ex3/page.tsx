"use client";

import React, { useState } from "react";

function expensiveWork(iterations: number) {
  let x = 0;
  for (let i = 0; i < iterations; i++) {
    x += i % 10;
  }
  return x;
}

function BigList() {
  expensiveWork(200_000_000);

  const items = Array.from({ length: 2000 }, (_, i) => `Item ${i + 1}`);

  return (
    <div style={{ border: "1px solid #ccc", padding: 12, borderRadius: 8 }}>
      <p style={{ margin: 0, fontWeight: 700 }}>Lista grande</p>

      <ul style={{ maxHeight: 220, overflow: "auto", marginTop: 12 }}>
        {items.map((item) => (
          <li key={item} style={{ padding: "6px 0", cursor: "pointer" }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ToggleButton() {
  const [ativo, setAtivo] = useState(false);

  return (
    <div style={{ marginBottom: 16 }}>
      <button
        onClick={() => setAtivo((a) => !a)}
        style={{
          padding: "10px 12px",
          borderRadius: 8,
          border: "1px solid #ccc",
        }}
      >
        {ativo ? "Desativar" : "Ativar"}
      </button>
    </div>
  );
}

export default function Page() {
  return (
    <div style={{ maxWidth: 720, margin: "24px auto", padding: 16 }}>
      {/* Estado movido para dentro do componente ToggleButton */}
      <ToggleButton />

      {/* Componente Lento */}
      <BigList />
    </div>
  );
}
