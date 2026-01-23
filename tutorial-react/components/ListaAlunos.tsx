export default function ListaAlunos() {
  const alunos = [
    { id: 1, nome: "Ana", curso: "Engenharia" },
    { id: 2, nome: "Bruno", curso: "Sistemas de Informação" },
    { id: 3, nome: "Carlos", curso: "Ciência da Computação" },
  ];

  return (
    <div className="lista">
      <h2>Lista de alunos</h2>

      <ul className="lista-itens">
        {alunos.map((aluno) => (
          <li key={aluno.id} className="lista-item">
            <strong>{aluno.nome}</strong>
            <span>{aluno.curso}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
