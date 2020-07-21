const button = document.querySelector('button#add')
button.onclick = (e) => {
    add()
}
let coleçao = []

function add() {
    let dados = document.querySelector('input#numero')
    let num = Number(dados.value)

    if (dados.value.length == 0 || dados.value <= 0 || dados.value > 100) {
        window.alert('[ERRO] Verifique os dados.')
    }
    if (coleçao.indexOf(num) == -1) {
        coleçao.push(num)
    }
    else {
        window.alert('[ERROR] Este número já foi adicionado.')
    }
}

let res = document.querySelector('div#res')
let tamanho = document.querySelector('p#tamanho')
let maior = document.querySelector('p#maior')
let media = document.querySelector('p#media')

function put() {
    let soma = coleçao.reduce((a, b) => a + b, 0)
    let corte = soma / (coleçao.length)
    let idsoma = document.querySelector('p#soma')

    let biggets = coleçao.reduce((a, b) => Math.max(a, b))

    tamanho.innerHTML = `Tamanho do array: ${coleçao.length}`
    maior.innerHTML = `Maior valor do array: ${biggets}`
    media.innerHTML = `Média entre os números ${corte.toFixed(1)}`
    idsoma.innerHTML = `A soma entre os elementos é: ${soma}`
}

const buttonF = document.querySelector('button#finsh')

buttonF.onclick = (e) => {
    put()
}


