const caixaPrincipal = document.querySelector ('.caixa-principal');
const caixaPerguntas = document.querySelector ('.caixa-perguntas');
const caixaAlternativas = document.querySelector ('.caixa-alternativas');
const caixaResultado = document.querySelector ('.caixa-resultado');
const textoResultado = document.querySelector ('.texto-resultado');

const alternativas = [
    {
        enunciado: "No âmbito social, você prefere:",
        alternativa: [
            {
                texto: "Você terá uma vida feliz e com paz, onde todos os seus sonhos se realizam, porém terá mais um ano de vida",
                afirmaçao: "Parabéns!!! Deixou todos os que você ama para trás por ganância",
            },
            {
                texto: "Você terá uma vida longa, mas viverá sem alcançar a sua verdadeira felicidade",
                afirmaçao: "Parabéns!!! Você terá uma vida infeliz só por conta do seu medo bobo de morrer :)",
            },
        ]
        
    },

    {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativa: [
            {
                texto: "Você pode optar por converter todas as fontes de energia do mundo em renováveis, garantindo um futuro sustentável, mas isso exigirá que vastas áreas naturais sejam sacrificadas para construir as infraestruturas necessárias ",
                afirmaçao: "Como se sente sabendo que vários animais morreram por sua culpa?",
            },
            {
                texto: "Você pode preservar todos os ecossistemas intocados, mas o mundo continuará dependente de fontes de energia poluentes, acelerando os impactos das mudanças climáticas.",
                afirmaçao: "Parabéns!!! Você estragou o meio ambiente por conta de alguns ecossistemas inúteis",
            },
        ]
        
    },

    {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativa: [
            {
                texto: "Você pode implantar um chip em seu cérebro que lhe concederá acesso instantâneo a todo o conhecimento da humanidade, permitindo que você se torne a pessoa mais inteligente e informada do planeta, mas perderá gradualmente a capacidade de sonhar, imaginar e criar algo novo por conta própria. ",
                afirmaçao: "Parabéns inteligentão!!! Está com todos os conhecimentos do mundo ao seu dispor ",
            },
            {
                texto: "Alternativa 6",
                afirmaçao: "Afirmação 6",
            },
        ]
        
    },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPerguntas (){
    if(atual>= alternativas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = alternativas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent= "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const opcao of perguntaAtual.alternativa) {
        const botaoAlternativa = document.createElement('button');
        botaoAlternativa.textContent = opcao.texto;
        botaoAlternativa.addEventListener("click", ()=> respostaSelecionada(opcao));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcao){
    const afirmacoes = opcao.afirmaçao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPerguntas();
}

function mostraResultado (){
    caixaPerguntas.textContent = "Em resumo você escolheu...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPerguntas();
