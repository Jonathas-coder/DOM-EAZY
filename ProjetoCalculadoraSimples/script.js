const button = document.querySelector('button')

function verify () {
    let valor = document.querySelector('input#numero')
    let num = Number(valor.value)
    let div = document.querySelector('select#tabel')
    
    div.innerHTML = ''
    if(valor.value.length == 0 || valor.value == 0 ){
        window.alert('[ERROR] Verifique os dados.')
    }else{
        for (let i = 0; i <= 9; i++){
            div.innerHTML += `<option> ${num} x ${i}=(${num*i}) </option>  ` 
        }
    }
}


button.onclick = () =>{
    verify ()
}




/*
let item = document.querySelector('id da vid')
for(let i = 0; i < 10 ; i++){
    let novatag = document.createElement('option')
    novatag.text = 'o que você quiser colocar.'
    novatag.value = `valor para back end ${i}`
    item.appendChild(novatag)
}
*/