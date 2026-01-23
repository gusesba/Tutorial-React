"use client";

import React, { useState } from "react";

// Simula custo de render (NÃO faça isso em produção)
function expensiveWork(iterations: number) {
  let x = 0;
  for (let i = 0; i < iterations; i++) {
    x += i % 10;
  }
  return x;
}

type BigListProps = {
  onItemClick: (item: string) => void;
};

function BigListBase({ onItemClick }: BigListProps) {
  // custo por render da lista
  expensiveWork(200_000_000);

  const items = Array.from({ length: 2000 }, (_, i) => `Item ${i + 1}`);

  return (
    <div style={{ border: "1px solid #ccc", padding: 12, borderRadius: 8 }}>
      <p style={{ margin: 0, fontWeight: 700 }}>Lista grande</p>

      <ul style={{ maxHeight: 220, overflow: "auto", marginTop: 12 }}>
        {items.map((item) => (
          <li
            key={item}
            style={{ padding: "6px 0", cursor: "pointer" }}
            onClick={() => onItemClick(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

const BigList = React.memo(BigListBase);

export default function Page() {
  const [ativo, setAtivo] = useState(false);

  const handleItemClick = (item: string) => {
    console.log("Clicou:", item);
  };

  return (
    <div style={{ maxWidth: 720, margin: "24px auto", padding: 16 }}>
      <button
        onClick={() => setAtivo((a) => !a)}
        style={{
          padding: "10px 12px",
          borderRadius: 8,
          border: "1px solid #ccc",
          marginBottom: 16,
        }}
      >
        {ativo ? "Desativar" : "Ativar"}
      </button>

      <BigList onItemClick={handleItemClick} />
    </div>
  );
}
