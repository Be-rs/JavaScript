let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('ress')
let val = []

function isNumero(n){
    if (Number (n) >= 1 && Number (n) <=100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true 
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, val)){
       val.push(Number(num.value))
       let item = document.createElement('option')
       item.text = `Valor ${num.value} foi adicionado `
       lista.appendChild(item)
       res.innerHTML = ""
    }else{
         alert('Valor invalido ou já foi utilizado')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (val.length == 0 ){
        alert('Adicione um valor')
    }else {

        let tot = val.length
        let maior = val[0]
        let menor = val[0]
        let soma = 0
        let media = 0


        for(let pos in val){
            soma += val[pos]
             if(val [pos] > maior)
                maior = val[pos]
             if(val [pos] < menor)
                menor = val[pos]
            }
           media = soma/ tot

            res.innerHTML = ''
            res.innerHTML += `<p> esse é o numero de elementos ${tot}</p>`
            res.innerHTML += `<p> o maior numero é ${maior}</p>`
            res.innerHTML += `o menor numero é ${menor}</p>`
            res.innerHTML += `a soma dos elementos é ${soma}</p>`
            res.innerHTML += `a media dos elementos é ${media}</p>`
    }
}