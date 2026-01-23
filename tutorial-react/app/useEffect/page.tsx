"use client";
import { useEffect, useState } from "react";

export default function ExemploEffect() {
  const [contador, setContador] = useState(0);
  const [ativo, setAtivo] = useState(true);

  useEffect(() => {
    console.log("Componente foi renderizado");
  });

  useEffect(() => {
    console.log("Rodou apenas uma vez (montagem)");
  }, []);

  useEffect(() => {
    console.log("Contador mudou:", contador);
  }, [contador]);

  useEffect(() => {
    if (ativo) {
      console.log("Ativo foi setado como true");
    } else {
      console.log("Ativo foi setado como false");
    }
  }, [ativo]);

  return (
    <div className="contador">
      <p className="contador-valor">{contador}</p>

      <button
        className="contador-botao"
        onClick={() => setContador(contador + 1)}
      >
        Incrementar
      </button>

      <button className="contador-botao" onClick={() => setAtivo(!ativo)}>
        Ativar/Desativar
      </button>
    </div>
  );
}
