"use client";
import { useState } from "react";

export default function Contador() {
  const [valor, setValor] = useState(0);

  return (
    <div className="contador">
      <p className="contador-valor">{valor}</p>

      <button className="contador-botao" onClick={() => setValor(valor + 1)}>
        Incrementar
      </button>
    </div>
  );
}
