// 1 - INSCRIÇÃO NO FÃ-CLUBE
const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", function (event) {
    // impede que a página recarregue
    event.preventDefault();

    // captura os valores preenchidos em NOME e EMAIL
    const nome = document.querySelector("#nome").value;
    const email = document.querySelector("#email").value;

    // captura a seleção do bias
    const selectBias = document.querySelector("#bias");
    const biasNome = selectBias.options[selectBias.selectedIndex].text;

    // exibe uma mensagem de confirmação de envio
    alert(`Parabéns, ${nome}!\nEnviamos a confirmação para: ${email}.\nSeu bias cadastrado é: ${biasNome}!`);

    // limpa o formulário
    formulario.reset;
});

// 2 - ROLETA MUSICAL
const musicas = [
    "God's Menu",
    "MANIAC",
    "Chk Chk Boom",
    "LALALA",
    "S-Class",
    "Thunderous",
    "Case 143",
    "Back Door",
    "MIROH",
    "This & That"
];

// selecionando elementos pelo ID
const btnSortear = document.getElementById("btnSortear");
const textoResultado = document.getElementById("textoResultado");

// adicionando evento de escuta no botão
btnSortear.addEventListener("click", function () {
    const indiceSorteado = Math.floor(Math.random() * musicas.length);

    // pega a musica que está na posição sorteada
    const musicaEscolhida = musicas[indiceSorteado];

    // atualizar o texto do resultado
    textoResultado.textContent = `Sua música de hoje é: ${musicaEscolhida}`;
});