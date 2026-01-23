import Lista from "@/components/ListaGenerica";

export default function App() {
  const alunos = [
    { id: 1, nome: "Ana", descricao: "Engenharia" },
    { id: 2, nome: "Bruno", descricao: "Sistemas de Informação" },
    { id: 3, nome: "Carlos", descricao: "Ciência da Computação" },
  ];

  const tarefas = [
    { id: 1, nome: "Estudar React", descricao: "Componentes e Props" },
    { id: 2, nome: "Criar demo", descricao: "Apresentação interna" },
  ];

  return (
    <div className="container">
      <Lista titulo="Alunos" itens={alunos} />

      <Lista titulo="Tarefas" itens={tarefas} />
    </div>
  );
}
