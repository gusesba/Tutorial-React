import Contador from "../components/Contador";
export default function App() {
  return (
    <div className="container">
      <h1>Demo React</h1>

      <p>
        Este é um exemplo simples de um componente React. O contador abaixo
        possui estado próprio e reage a eventos.
      </p>

      <Contador />

      <p style={{ marginTop: "32px", color: "#555" }}>
        Cada clique atualiza o state e o React cuida da renderização.
      </p>
    </div>
  );
}
