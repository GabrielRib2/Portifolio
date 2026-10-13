import { useState } from "react";

const img = (nome) => new URL(`./assets/${nome}`, import.meta.url).href;

const temaInicial = "claro";

const perfil = {
  pt: {
    nome: "Gabriel Ribeiro",
    titulo: "Desenvolvedor e Ui/UX Designer",
    sobre:
      "Sou apaixonado por tecnologia. Aqui você encontra alguns dos projetos que desenvolvi ao longo dos meus estudos.",
    foto: "perfil.jpg",
  },
  en: {
    nome: "Gabriel Ribeiro",
    titulo: "Developer and Ui/UX Designer",
    sobre:
      "I'm passionate about technology. Here you can find some of the projects I developed throughout my studies.",
    foto: "perfil.jpg",
  },
};

const projetos = {
  pt: [
    {
      titulo: "Jogo de Adivinhação",
      descricao:
        "Um jogo em que o usuário tenta adivinhar um número secreto, recebendo dicas de maior ou menor a cada tentativa.",
      imagem: "adivinhacao.png",
      link: "#",
      tags: ["Lógica", "Jogo"],
    },
    {
      titulo: "Calculadora",
      descricao:
        "Calculadora com as operações básicas, interface simples e foco em boa organização do código.",
      imagem: "calculadora.png",
      link: "#",
      tags: ["Interface", "Operações"],
    },
    {
      titulo: "Jogo da Memória",
      descricao:
        "Jogo da memória em que o jogador vira as cartas e precisa encontrar todos os pares.",
      imagem: "memoria.png",
      link: "#",
      tags: ["Jogo", "Interatividade"],
    },
  ],
  en: [
    {
      titulo: "Guessing Game",
      descricao:
        "A game where the user tries to guess a secret number, receiving hints of higher or lower with each attempt.",
      imagem: "adivinhacao.png",
      link: "#",
      tags: ["Logic", "Game"],
    },
    {
      titulo: "Calculator",
      descricao:
        "Calculator with basic operations, simple interface, and focus on organized code.",
      imagem: "calculadora.png",
      link: "#",
      tags: ["Interface", "Operations"],
    },
    {
      titulo: "Memory Game",
      descricao:
        "A memory game where the player flips the cards and needs to find all the pairs.",
      imagem: "memoria.png",
      link: "#",
      tags: ["Game", "Interactivity"],
    },
  ],
};

const redes = [
  { nome: "GitHub", imagem: "GitHub.jpg", link: "https://github.com/GabrielRib2" },
  { nome: "LinkedIn", imagem: "LinkedIn.jpg", link: "https://www.linkedin.com/in/gabrielrib2/" },
  { nome: "Instagram", imagem: "Instagram.jpg", link: "https://www.instagram.com/allan_gaeb/?hl=pt-br" },
];

function Projeto({ projeto, labelBotao, labelAlt }) {
  const [erro, setErro] = useState(false);
  return (
    <article className="card">
      <div className="card-img">
        {erro ? (
          <span>{projeto.imagem}</span>
        ) : (
          <img
            src={img(projeto.imagem)}
            alt={`${labelAlt} ${projeto.titulo}`}
            onError={() => setErro(true)}
          />
        )}
      </div>
      <div className="card-body">
        <h3>{projeto.titulo}</h3>
        <p>{projeto.descricao}</p>
        <ul className="tags">
          {projeto.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <a className="botao" href={projeto.link} target="_blank" rel="noreferrer">
          {labelBotao}
        </a>
      </div>
    </article>
  );
}

function IconeRede({ nome }) {
  if (nome === "LinkedIn") {
    return (
      <svg
        className="rede-icon"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M6.94 8.5A1.5 1.5 0 1 1 6.94 5.5a1.5 1.5 0 0 1 0 3Zm-1.37 1.16h2.72v8.34H5.57V9.66Zm4.2 0h2.62v1.14h.04c.36-.69 1.25-1.42 2.57-1.42 2.75 0 3.26 1.8 3.26 4.15v4.47h-2.76v-4.18c0-1-.02-2.28-1.39-2.28-1.4 0-1.61 1.08-1.61 2.2v4.26h-2.73V9.66Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (nome === "Instagram") {
    return (
      <svg
        className="rede-icon"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm8.98 2.2a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 6.4A5.6 5.6 0 1 1 12 17.6 5.6 5.6 0 0 1 12 6.4Zm0 1.8A3.8 3.8 0 1 0 12 16 3.8 3.8 0 0 0 12 8.2Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (nome === "GitHub") {
    return (
      <svg
        className="rede-icon"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M12 2.2A9.8 9.8 0 0 0 2.2 12c0 4.34 2.82 8.01 6.72 9.31.49.09.67-.21.67-.47v-1.68c-2.73.59-3.3-1.17-3.3-1.17-.45-1.14-1.1-1.45-1.1-1.45-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.82.09-.65.35-1.09.63-1.34-2.18-.25-4.48-1.1-4.48-4.89 0-1.08.38-1.96 1.02-2.65-.1-.25-.44-1.27.1-2.64 0 0 .83-.27 2.72 1.02A9.4 9.4 0 0 1 12 6.9c.84 0 1.68.11 2.47.33 1.88-1.29 2.7-1.02 2.7-1.02.54 1.37.2 2.39.1 2.64.64.69 1.02 1.57 1.02 2.65 0 3.8-2.31 4.63-4.5 4.88.36.31.67.93.67 1.87v2.77c0 .26.18.57.68.47A9.8 9.8 0 0 0 21.8 12 9.8 9.8 0 0 0 12 2.2Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return null;
}

export default function App() {
  const [tema, setTema] = useState(temaInicial);
  const [idioma, setIdioma] = useState("pt");
  const [habilidadesVisivel, setHabilidadesVisivel] = useState(false);
  const temaEscuro = tema === "escuro";
  const perfilAtual = perfil[idioma];
  const projetosAtuais = projetos[idioma];

  const habilidades = ["HTML", "CSS", "JavaScript", "REACT", "FIGMA"];

  const textos = {
    pt: {
      sobre: "Sobre",
      projetos: "Projetos",
      contato: "Contato",
      habilidades: "Habilidades",
      ola: "Olá, eu sou",
      verProjetos: "Projetos",
      voltarTopo: "Voltar ao topo",
      ariaTema: temaEscuro ? "Ativar modo claro" : "Ativar modo escuro",
      footer: "Feito com React",
      projeto: "Ver projeto",
      projetoAlt: "Captura de tela do projeto",
      idioma: "EN",
      ariaIdioma: "Switch to English",
      habilidadesDescricao: "Tecnologias e ferramentas que uso no dia a dia.",
    },
    en: {
      sobre: "About",
      projetos: "Projects",
      contato: "Contact",
      habilidades: "Skills",
      ola: "Hello, I'm",
      verProjetos: "Projects",
      voltarTopo: "Back to top",
      ariaTema: temaEscuro ? "Switch to light mode" : "Switch to dark mode",
      footer: "Made with React",
      projeto: "View project",
      projetoAlt: "Screenshot of the project",
      idioma: "PT",
      ariaIdioma: "Alternar para português",
      habilidadesDescricao: "Technologies and tools I use day to day.",
    },
  };

  const textoAtual = textos[idioma];

  return (
    <div className="app-shell" data-theme={tema}>
      <header className="topo" id="topo">
        <span className="logo">{perfilAtual.nome}</span>

        <div className="topo-direita">
          <nav>
            <a href="#sobre">{textoAtual.sobre}</a>
            <a href="#projetos">{textoAtual.projetos}</a>
            <a href="#contato">{textoAtual.contato}</a>
          </nav>

          <div className="toggle-group">
            <button
              type="button"
              className={`lang-toggle ${idioma === "en" ? "is-en" : "is-pt"}`}
              onClick={() => setIdioma((atual) => (atual === "pt" ? "en" : "pt"))}
              aria-label={textoAtual.ariaIdioma}
            >
              <span className="toggle-track">
                <span className="toggle-label toggle-label-pt">PT</span>
                <span className="toggle-label toggle-label-en">EN</span>
                <span className="toggle-thumb">{idioma === "en" ? "EN" : "PT"}</span>
              </span>
            </button>

            <button
              type="button"
              className={`theme-toggle ${temaEscuro ? "is-dark" : "is-light"}`}
              onClick={() => setTema((atual) => (atual === "claro" ? "escuro" : "claro"))}
              aria-label={textoAtual.ariaTema}
            >
              <span className="toggle-track">
                <span className="toggle-thumb">{temaEscuro ? "🌙" : "☀️"}</span>
              </span>
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="sobre">
          <img
            className="foto"
            src={img(perfilAtual.foto)}
            alt={`Foto de ${perfilAtual.nome}`}
          />
          <div>
            <p className="ola">{textoAtual.ola}</p>
            <h1>{perfilAtual.nome}</h1>
            <h2>{perfilAtual.titulo}</h2>
            <p className="sobre">{perfilAtual.sobre}</p>
            <div className="hero-actions">
              <a className="botao" href="#projetos">
                {textoAtual.verProjetos}
              </a>
              <button
                type="button"
                className="botao"
                onClick={() => setHabilidadesVisivel((atual) => !atual)}
              >
                {textoAtual.habilidades}
              </button>
            </div>
          </div>
        </section>

        <section
          id="habilidades"
          className={`skills-section ${habilidadesVisivel ? "is-visible" : ""}`}
        >
          <div className="skills-header">
            <h2 className="secao">{textoAtual.habilidades}</h2>
          </div>
          <p className="skills-description">{textoAtual.habilidadesDescricao}</p>
          <div className="skills-grid">
            {habilidades.map((habilidade) => (
              <span key={habilidade} className="skill-pill">
                {habilidade}
              </span>
            ))}
          </div>
        </section>

        <section id="projetos">
          <h2 className="secao">{textoAtual.projetos}</h2>
          <div className="grade">
            {projetosAtuais.map((p) => (
              <Projeto
                key={p.titulo}
                projeto={p}
                labelBotao={textoAtual.projeto}
                labelAlt={textoAtual.projetoAlt}
              />
            ))}
          </div>
        </section>

        <section id="contato">
          <h2 className="secao">{textoAtual.contato}</h2>
          <div className="redes">
            {redes.map((r) => (
              <a key={r.nome} href={r.link} target="_blank" rel="noreferrer">
                {r.nome === "GitHub" || r.nome === "LinkedIn" || r.nome === "Instagram" ? (
                  <IconeRede nome={r.nome} />
                ) : (
                  <img src={img(r.imagem)} alt={`Ícone do ${r.nome}`} />
                )}
                <span>{r.nome}</span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="rodape">
        <a className="botao voltar-topo" href="#topo">
          <svg
            className="voltar-topo-icone"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M12 19V5m0 0L6 11m6-6 6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {textoAtual.voltarTopo}
        </a>
        © {new Date().getFullYear()} {perfilAtual.nome}. {textoAtual.footer}.
      </footer>
    </div>
  );
}