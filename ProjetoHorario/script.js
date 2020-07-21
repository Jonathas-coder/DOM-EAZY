function carregar() {
    let texto = document.getElementById('mensagem')
    let imagem = document.getElementById('imagem')
    let data = new Date()
    let atual =20
    texto.innerHTML = `Agora são ${atual}`
    texto.innerHTML = 'Agora são ' + atual + ' horas.'

    if (atual >= 0 && atual < 12) {
        document.body.style.background = '#F7B868'
        imagem.src = 'img/manha.png'
    } else if (atual >= 12 && atual < 18) {
        document.body.style.backgroundColor = '#B63605'
        imagem.src = 'img/tarde.png'
    } else {
        document.body.style.backgroundColor= '#13213B'
        imagem.src = 'img/noite.png'
    }
}


