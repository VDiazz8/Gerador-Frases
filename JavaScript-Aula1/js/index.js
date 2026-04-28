let frases = [
    "Luke, eu sou seu Pai! - Star Wars",
    "Que a força esteja com você. - Star Wars",
    "Vingadores, Avante! - Vingadores Ultimato",
    "Porque tão sério? - Coringa",
    "Meu precioso! - O Senhor dos Anéis: As duas torres",
    "A vida é como uma caixa de chocolates. - Forrest Gump",
    "Ao infinito e além! - Toy Story",
    "Eu sou o rei do mundo - Titanic",
    "Eu vejo gente morta. - O Sexto Sentido",
    "O sistema é foda, parceiro. - Tropa de Elite"
    
];

let cliques = 0; //variável que conta o número de cliques

function gerarFrases(){

    let indice = Math.floor(Math.random() * frases.length);
   
    let fraseEscolhida = frases[indice]; 

    cliques = cliques + 1;

    document.getElementById("Frase").innerText = fraseEscolhida;

    document.getElementById("Contador").innerText = "Frases Geradas: " + cliques;

}