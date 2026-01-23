"use client";

import { useState } from "react";

export default function App() {
  const [valor, setValor] = useState(0);
  const [valorAdicional, setValorAdicional] = useState(1);
  const [aumentarValor, setAumentarValor] = useState(2);

  return (
    <div className="container">
      <h1>Demo React</h1>

      <p>
        Este é um exemplo simples de um componente React. O contador abaixo
        possui estado próprio e reage a eventos.
      </p>

      <div className="contador">
        <p className="contador-valor">{valor}</p>

        <button
          className="contador-botao"
          onClick={() => setValor(valor + valorAdicional)}
        >
          Incrementar
        </button>
      </div>

      <div className="contador">
        Custo do aumento: {aumentarValor}
        <button
          className="contador-botao"
          onClick={() => {
            setValorAdicional(valorAdicional + 1);
            setValor(valor - aumentarValor);
            setAumentarValor(Math.floor(aumentarValor * 1.5));
          }}
          disabled={valor < aumentarValor}
        >
          Upgrade
        </button>
      </div>
    </div>
  );
}
