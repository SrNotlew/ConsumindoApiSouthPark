function searchRandom(params) {
    console.log("Bah")

    fetch("https://southparkquotes.onrender.com/v1/quotes")
    .then((response) => response.json())
    .catch((e) => console.log('error: ',e))
    .then((data) => mostraMensagem(data))
    .catch((e)=> console.log('Error: ', e))
}

function mostraMensagem(dadosRetornados) {
    console.log(dadosRetornados)
    dadosRetornados
      
    digitarTexto(dadosRetornados[0].quote)

    if (dadosRetornados[0].character == 'Cartman') {
        const cartman = './img/cartman.png'

        const img = $('<img>')
        img.addClass("corner-image")

        img.attr('src', cartman)

        $("#imagemContainer").append(img);
    }
}

function digitarTexto(param) {

    const textoCompleto = param

    const atrasoEntreCaracteres = 10;

    const elementoTexto = $("#exampleFormControlTextarea1");
    let textoParcial = "";
    let contadorCaracteres = 0;

    function adicionarCaractere() {
        textoParcial += textoCompleto.charAt(contadorCaracteres);
        elementoTexto.text(textoParcial);
        contadorCaracteres++;

        if (contadorCaracteres < textoCompleto.length) {
            // Chama a função novamente após o atraso para adicionar o próximo caractere
            setTimeout(adicionarCaractere, atrasoEntreCaracteres);
        }
    }

    // Inicia o processo de digitação
    adicionarCaractere();
}