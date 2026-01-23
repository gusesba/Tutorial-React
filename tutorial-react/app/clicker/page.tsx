"use client";

import Link from "next/link";
import { useState } from "react";

export default function App() {
  const [valor, setValor] = useState(0);
  const [valorAdicional, setValorAdicional] = useState(1);
  const [aumentarValor, setAumentarValor] = useState(2);

  return (
    <div className="clicker-layout">
      <aside className="menu-lateral">
        <h2 className="menu-lateral-titulo">Menu</h2>
        <nav className="menu-lateral-links">
          <Link className="menu-lateral-link" href="/">
            Home
          </Link>
          <button className="menu-lateral-link" type="button">
            Ajuda
          </button>
          <button className="menu-lateral-link" type="button">
            Sair
          </button>
        </nav>
      </aside>

      <main className="container">
        <h1>Tela do Clicker</h1>

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
      </main>
    </div>
  );
}
