export default function Lista({
  titulo,
  itens,
}: {
  titulo: string;
  itens: { id: number; nome: string; descricao: string }[];
}) {
  return (
    <div className="lista">
      <h2>{titulo}</h2>

      <ul className="lista-itens">
        {itens.map((item) => (
          <li key={item.id} className="lista-item">
            <strong>{item.nome}</strong>
            <span>{item.descricao}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
