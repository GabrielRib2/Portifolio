import { useState } from "react";

const img = (nome) => new URL(`./assets/${nome}`, import.meta.url).href;

const perfil = {
  nome: "Gabriel Ribeiro",
  titulo: "Desenvolvedor e Ui/UX Designer",
  sobre:
    "Sou apaixonado por tecnologia. Aqui você encontra alguns dos projetos que desenvolvi ao longo dos meus estudos.",
  foto: "perfil.jpg",
};

const projetos = [
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
];

const redes = [
  { nome: "GitHub", imagem: "GitHub.jpg", link: "https://github.com/" },
  { nome: "LinkedIn", imagem: "LinkedIn.jpg", link: "https://www.linkedin.com/" },
  { nome: "Instagram", imagem: "Instagram.jpg", link: "https://www.instagram.com/" },
];

function Projeto({ projeto }) {
  const [erro, setErro] = useState(false);
  return (
    <article className="card">
      <div className="card-img">
        {erro ? (
          <span>{projeto.imagem}</span>
        ) : (
          <img
            src={img(projeto.imagem)}
            alt={`Captura de tela do projeto ${projeto.titulo}`}
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
          Ver projeto
        </a>
      </div>
    </article>
  );
}

export default function App() {
  return (
    <>
      <header className="topo">
        <span className="logo">{perfil.nome}</span>
        <nav>
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="sobre">
          <img
            className="foto"
            src={img(perfil.foto)}
            alt={`Foto de ${perfil.nome}`}
          />
          <div>
            <p className="ola">Olá, eu sou</p>
            <h1>{perfil.nome}</h1>
            <h2>{perfil.titulo}</h2>
            <p className="sobre">{perfil.sobre}</p>
            <a className="botao" href="#projetos">
              Ver meus projetos
            </a>
          </div>
        </section>

        <section id="projetos">
          <h2 className="secao">Projetos</h2>
          <div className="grade">
            {projetos.map((p) => (
              <Projeto key={p.titulo} projeto={p} />
            ))}
          </div>
        </section>

        <section id="contato">
          <h2 className="secao">Contato</h2>
          <div className="redes">
            {redes.map((r) => (
              <a key={r.nome} href={r.link} target="_blank" rel="noreferrer">
                <img src={img(r.imagem)} alt={`Ícone do ${r.nome}`} />
                <span>{r.nome}</span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="rodape">
        © {new Date().getFullYear()} {perfil.nome}. Feito com React.
      </footer>
    </>
  );
}