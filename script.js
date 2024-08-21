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
                texto: "Alternativa 1",
                afirmaçao: "Afirmação 1",
            },
            {
                texto: "Alternativa 2",
                afirmaçao: "Afirmação 2",
            },
        ]
        
    },

    {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativa: [
            {
                texto: "Alternativa 3",
                afirmaçao: "Afirmação 3",
            },
            {
                texto: "Alternativa 4",
                afirmaçao: "Afirmação 4",
            },
        ]
        
    },

    {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativa: [
            {
                texto: "Alternativa 5",
                afirmaçao: "Afirmação 5",
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

function mostrarPerguntas () {
    perguntaAtual = alternativas [atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostrarAlternativas();
}


function mostrarAlternativas(){
    for (const opcao of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement('button');
        botaoAlternativa.textContent = opcao.texto;
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

mostrarPerguntas();
