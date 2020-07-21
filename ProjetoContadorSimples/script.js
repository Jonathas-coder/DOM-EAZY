let button = document.querySelector('button')

function contar (){
    let inicio = document.querySelector('input#inicio')
    let fim = document.querySelector('input#fim')
    let passo = document.querySelector('input#passo')
    let res = document.querySelector('div#res')
    if (passo.value.length == 0 || fim.value.length == 0 || inicio.value.length == 0){
        window.alert('[ERROR] Verifique os dados.')
    }else{
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        for (let começo = i; começo <= f ; começo+=p){
            res.innerHTML += começo + '--'
            
        }
        res.innerHTML += 'FIM'
    }
}

button.onclick = (e) =>{
    contar()

}

//2 Problemas, não consegui incrementar os passos : Porque não estava instanciando o Number
// não consegui por limite no tamanho do label dentro da section