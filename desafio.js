function contagem_regressiva() {
    let tempo = 10;
    for (let i = tempo; i >= 0; i--) {

        setTimeout(function() {
            if (i > 0) {
                document.getElementById('resultado').innerHTML = i;
            } else {
                document.getElementById('resultado').innerHTML = " ";
                const texto = document.getElementById('texto')
                const imagem1 = document.getElementById('boom1');
                const imagem2 = document.getElementById('boom2');
                const imagem3 = document.getElementById('boom3');
                texto.style.display = 'none';
                imagem1.style.display = 'block';
                imagem2.style.display = 'block';
                imagem3.style.display = 'block';
            }
        }, (tempo - i) * 1000);
    }
}