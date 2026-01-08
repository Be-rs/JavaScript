function verificar(){
var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById('textano')
var res = document.getElementById('res')


if ( fano.value.length == 0 || fano.value > ano ) {
    window.alert('Algo esta errado tente novamente')
}else{
    var fsex = document.getElementsByName('rai')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked){
        genero = "Homem"
        if (idade >= 0 && idade <10){
            img.setAttribute('src', 'criança.h.webp')
        }else if (idade < 29){
             img.setAttribute('src', 'images.jpg')
        }else if (idade < 55){
             img.setAttribute('src', 'img.adulto.h')
        }else {
             img.setAttribute('src', 'velho.h')
        }
    }else if (fsex[1].checked){
        genero = "Mulher"
        if (idade >= 0 && idade <10){
             img.setAttribute('src', 'menina.avif')
        }else if (idade < 29){
             img.setAttribute('src', 'jovem.m.jpg')
        }else if (idade < 55){
             img.setAttribute('src', 'img.adulto.m')
        }else {
             img.setAttribute('src', 'velha.m')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML= `Detectamos ${genero} com ${idade}.`
    res.appendChild(img)
}
    


}