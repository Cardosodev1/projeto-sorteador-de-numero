let limiteQuantidade = 20;
let limiteAteNumero = 100;

function exibirMensagem(id, text) {
    let resultado = document.getElementById(id);
    resultado.innerHTML = text;
}

function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let doNumero = parseInt(document.getElementById("de").value);
    let ateNumero = parseInt(document.getElementById("ate").value);

    let sorteados = [];
    let numero;
    
    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(doNumero, ateNumero);

        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(doNumero, ateNumero);
            if (quantidade > ateNumero - doNumero) {
                break;
            }
        }

        sorteados.push(numero);
    }

    exibirMensagem("resultado", `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`);

    document.getElementById("btn-reiniciar").removeAttribute("disabled");

    if (doNumero > ateNumero) {
        alert("O número digitado em 'Do número' é maior que em 'Até o número'");
        reiniciar();
    }

    if (quantidade > limiteQuantidade) {
        alert(`Não é possivel sortear mais de ${limiteQuantidade} números`);
        reiniciar();
    }

    if (ateNumero > limiteAteNumero) {
        alert(`Não é possivel sortear números maiores que ${limiteAteNumero}`);
        reiniciar();
    }
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function limparCampo() {
    quantidade = document.getElementById("quantidade").value = "";
    doNumero = document.getElementById("de").value = "";
    ateNumero = document.getElementById("ate").value = "";
}

function reiniciar() {
    limparCampo();
    document.getElementById("btn-reiniciar").setAttribute("disabled", true);
    document.getElementById("resultado").innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
}