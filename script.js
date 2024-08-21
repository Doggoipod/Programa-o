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
                textp: "Alternativa 1",
                afirmaçao: "Afirmação 1",
            },
            {
                textp: "Alternativa 2",
                afirmaçao: "Afirmação 2",
            },
        ]
        
    },

    {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativa: [
            {
                textp: "Alternativa 3",
                afirmaçao: "Afirmação 3",
            },
            {
                textp: "Alternativa 4",
                afirmaçao: "Afirmação 4",
            },
        ]
        
    },

    {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativa: [
            {
                textp: "Alternativa 5",
                afirmaçao: "Afirmação 5",
            },
            {
                textp: "Alternativa 6",
                afirmaçao: "Afirmação 6",
            },
        ]
        
    },
]