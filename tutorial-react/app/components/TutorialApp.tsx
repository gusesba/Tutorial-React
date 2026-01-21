"use client";

import { useMemo, useState } from "react";

const modules = [
  {
    id: "basico",
    title: "Fundamentos",
    description:
      "Entenda JSX, componentes, props, estado e efeitos com exemplos simples.",
    outcomes: [
      "Criar componentes funcionais reutilizáveis",
      "Compreender fluxo unidirecional de dados",
      "Manipular estado e eventos",
    ],
    snippet: `function Saudacao({ nome }) {
  return <h1>Olá, {nome}!</h1>;
}

export default function App() {
  return <Saudacao nome="Equipe" />;
}`,
  },
  {
    id: "intermediario",
    title: "Intermediário",
    description:
      "Organize o app com composição, contexto e padrões de UI previsíveis.",
    outcomes: [
      "Compartilhar estado com Context",
      "Separar container/visual",
      "Criar hooks personalizados",
    ],
    snippet: `const CarrinhoContext = createContext();

function CarrinhoProvider({ children }) {
  const [itens, setItens] = useState([]);
  return (
    <CarrinhoContext.Provider value={{ itens, setItens }}>
      {children}
    </CarrinhoContext.Provider>
  );
}`,
  },
  {
    id: "avancado",
    title: "Avançado",
    description:
      "Escale com performance, rendering e arquitetura de features.",
    outcomes: [
      "Aplicar memoização conscientemente",
      "Separar features e domínios",
      "Entender renderização no cliente/servidor",
    ],
    snippet: `const Lista = React.memo(function Lista({ itens }) {
  return itens.map((item) => <Item key={item.id} {...item} />);
});

const itemFiltrado = useMemo(() => filtrar(itens), [itens]);`,
  },
];

const folderTree = `app/
  components/
    TutorialApp.tsx
    ui/
      Button.tsx
      Card.tsx
  features/
    onboarding/
      components/
      hooks/
      data/
    analytics/
      components/
      hooks/
  layout.tsx
  page.tsx
public/
  images/
styles/
  globals.css`;

const internals = [
  {
    title: "Fase de render",
    description:
      "O React calcula a próxima árvore de UI chamando seus componentes (puro, sem efeitos).",
  },
  {
    title: "Reconciliação",
    description:
      "Compara a árvore nova com a anterior (diff) e decide o mínimo necessário para atualizar.",
  },
  {
    title: "Commit",
    description:
      "Aplica mudanças no DOM e dispara efeitos (useEffect) após pintar a tela.",
  },
  {
    title: "Agendamento",
    description:
      "No React moderno, a renderização pode ser interrompida e retomada (Fiber) para manter fluidez.",
  },
];

const bestPractices = [
  {
    title: "Componentes pequenos",
    description: "Divida a UI por responsabilidade (uma coisa bem feita).",
  },
  {
    title: "Props explícitas",
    description:
      "Use nomes claros e evite passar objetos enormes sem necessidade.",
  },
  {
    title: "Estado local primeiro",
    description:
      "Só eleve o estado quando mais de um componente precisa dele.",
  },
  {
    title: "Efeitos enxutos",
    description: "useEffect deve sincronizar com algo externo, não derivar estado.",
  },
  {
    title: "Chaves estáveis",
    description: "Use IDs reais em listas para evitar re-renderizações confusas.",
  },
  {
    title: "Semântica + acessibilidade",
    description: "Use tags corretas, aria e foco claro para cada interação.",
  },
];

function SectionHeader({ title, description }: { title: string; description?: string }) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-semibold text-slate-100">{title}</h2>
      {description ? (
        <p className="text-sm text-slate-300 max-w-3xl">{description}</p>
      ) : null}
    </div>
  );
}

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="rounded-2xl bg-slate-900/80 p-4 text-sm text-slate-200 shadow-inner">
      <code>{children}</code>
    </pre>
  );
}

export default function TutorialApp() {
  const [activeModule, setActiveModule] = useState(modules[0].id);
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("Equipe");
  const [showDetails, setShowDetails] = useState(true);

  const currentModule = useMemo(
    () => modules.find((module) => module.id === activeModule),
    [activeModule],
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 pb-12 pt-16">
          <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Tutorial interativo de React
          </span>
          <h1 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
            Do básico ao avançado: React explicado para o time inteiro
          </h1>
          <p className="max-w-3xl text-base text-slate-300 md:text-lg">
            Use este guia para conduzir workshops, talks ou autoestudo. Cada seção tem
            objetivos claros, prática guiada e uma visão de como o React funciona por baixo dos
            panos.
          </p>
          <div className="flex flex-wrap gap-3">
            {modules.map((module) => (
              <button
                key={module.id}
                type="button"
                onClick={() => setActiveModule(module.id)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  module.id === activeModule
                    ? "border-emerald-400 bg-emerald-400/10 text-emerald-200"
                    : "border-slate-700 text-slate-300 hover:border-slate-500"
                }`}
              >
                {module.title}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 pb-20 pt-10">
        <section className="grid gap-8 rounded-3xl border border-slate-800 bg-slate-900/60 p-8 shadow-lg md:grid-cols-[1.2fr,0.8fr]">
          <div className="flex flex-col gap-6">
            <SectionHeader title={currentModule?.title ?? ""} description={currentModule?.description} />
            <div className="grid gap-4 text-sm text-slate-300">
              <p className="text-base text-slate-200">Objetivos desta etapa:</p>
              <ul className="grid gap-2">
                {currentModule?.outcomes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-sm text-slate-300">Snippet de referência</p>
            <CodeBlock>{currentModule?.snippet ?? ""}</CodeBlock>
          </div>
        </section>

        <section className="grid gap-10 md:grid-cols-[1fr,1fr]">
          <div className="flex flex-col gap-4">
            <SectionHeader
              title="Prática guiada: estado e eventos"
              description="Use este bloco ao vivo para mostrar re-render, estado controlado e eventos em React."
            />
            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg">
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Contador</p>
                    <p className="text-3xl font-semibold text-white">{counter}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setCounter((prev) => prev - 1)}
                      className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:border-slate-500"
                    >
                      -1
                    </button>
                    <button
                      type="button"
                      onClick={() => setCounter(0)}
                      className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:border-slate-500"
                    >
                      Reset
                    </button>
                    <button
                      type="button"
                      onClick={() => setCounter((prev) => prev + 1)}
                      className="rounded-full bg-emerald-400/20 px-4 py-2 text-sm text-emerald-100 hover:bg-emerald-400/30"
                    >
                      +1
                    </button>
                  </div>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="nome" className="text-sm text-slate-400">
                    Campo controlado
                  </label>
                  <input
                    id="nome"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100"
                    placeholder="Digite um nome"
                  />
                  <p className="text-sm text-slate-300">
                    Olá, <span className="font-semibold text-white">{name || "visitante"}</span>!
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-xs text-slate-300">
                  Dica: cada clique altera o estado, o React recalcula a UI e faz o menor
                  número possível de mudanças no DOM.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <SectionHeader
              title="Como o React funciona por baixo dos panos"
              description="Use esta narrativa para explicar o ciclo de renderização e a Fiber architecture."
            />
            <div className="grid gap-4">
              {internals.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-400/20 text-xs text-emerald-100">
                      {index + 1}
                    </span>
                    <h3 className="text-base font-semibold text-slate-100">{item.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-8 rounded-3xl border border-slate-800 bg-slate-900/60 p-8 shadow-lg">
          <div className="flex items-center justify-between">
            <SectionHeader
              title="Boas práticas de criação de componentes"
              description="Checklist rápido para manter o código limpo, testável e previsível."
            />
            <button
              type="button"
              onClick={() => setShowDetails((prev) => !prev)}
              className="rounded-full border border-slate-700 px-4 py-2 text-xs text-slate-300 hover:border-slate-500"
            >
              {showDetails ? "Ocultar detalhes" : "Mostrar detalhes"}
            </button>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {bestPractices.map((practice) => (
              <div
                key={practice.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4"
              >
                <h3 className="text-base font-semibold text-slate-100">{practice.title}</h3>
                {showDetails ? (
                  <p className="mt-2 text-sm text-slate-300">{practice.description}</p>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-[1.1fr,0.9fr]">
          <div className="flex flex-col gap-4">
            <SectionHeader
              title="Estrutura de pastas recomendada"
              description="Um exemplo para organizar features, UI compartilhada e páginas."
            />
            <CodeBlock>{folderTree}</CodeBlock>
          </div>
          <div className="flex flex-col gap-4">
            <SectionHeader
              title="Checklist para fechar o treinamento"
              description="Sugestões para reforçar o aprendizado no time."
            />
            <ul className="grid gap-3 text-sm text-slate-300">
              <li className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4">
                Monte um mini-projeto real e revise cada PR com base nas boas práticas.
              </li>
              <li className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4">
                Crie um diagrama de dados (props, contextos, stores) antes de codar.
              </li>
              <li className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4">
                Adote uma checklist de performance (memo, lazy, suspense).
              </li>
              <li className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4">
                Documente o raciocínio em README ou storybook interno.
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
