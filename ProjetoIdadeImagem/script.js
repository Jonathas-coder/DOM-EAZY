let button = document.querySelector('button')
function verify (){
    
    let data = new Date()
    let ano = data.getFullYear()
    let nascimento = document.querySelector('input#textnum')
    let resposta = document.querySelector('div#res')

    if(nascimento.value.length == 0 || nascimento.value > ano ){
        window.alert("[ERRO] Verifique os dados e tente novamente!")
        
    }else{
        let sexo = document.getElementsByName('sex')
        let idade = ano - Number(nascimento.value)
        let genero = ''
        
        let img = document.createElement('img')
        img.setAttribute('id','foto')
        
        if (sexo[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src','img/babyboy.png')
            }else if (idade >=10 && idade <= 21){
                //jovem
                img.setAttribute('src','img/youngboy.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src','img/man.png')
            }else{
                //idoso
                img.setAttribute('src','img/oldman.png')
            }
        }else if (sexo[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src', 'img/girlbaby.png')
            }else if (idade >=10 && idade <= 21){
                //jovem
                img.setAttribute('src','img/younggirl.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src','img/woman.png')
            }else{
                //idoso
                img.setAttribute('src','img/oldwoman.png')
            }
        }
        resposta.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resposta.style.textAlign = 'center'
        resposta.appendChild(img)
    }
}

button.onclick = (e) =>{
    verify()
}