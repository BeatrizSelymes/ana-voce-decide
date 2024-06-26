const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas =[
  {
    enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele tambem gera imagens e audios hiper-realistas. Qual o seu primeiro pensamento?",
 alternativas: [
      "Isso é assustador!",
      "Isso é maravilhoso!"
    ]
  },

  {
    enunciado: "Com a descoberta dessa tecnologia, chamada inteligencia artificial (IA), uma professora de tecnologia de uma escola decidiu fazer uma sequência de aulas sobre essa ferramenta. No fimde uma aula ela oede que você escreva um trabalho sobre o uso da IA em sala de aula. Qual atitude você toma?",
    alternativas: [
      "Utiliza uma ferramenta da busca na internet que utiliza IA para que ela ajude a encontrar informções",
      "Jason",
    ]
  },

  {
    enunciado: "Pergunta 3",
    alternativas: [
      "Resposta 1",
      "Resposta 2"
    ]
  },

  {
    enunciado: "Pergunta 4",
    alternativas: [
      "Resposta 1",
      "Resposta 2"
    ]
  },

  {
    enunciado: "Pergunta 5",
    alternativas: [
      "Resposta 1",
      "Resposta 2"
    ]
  }
];

let atual = 0;
let perguntaAtual;

function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa;
    caixaAlternativas.appendChild(botaoAlternativas);
  }
}


function mostraPergunta() {
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  mostraAlternativas();

}

mostraPergunta();