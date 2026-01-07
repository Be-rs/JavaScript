function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var hora = 16
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        img.src = 'pexels-tahir-shaw-50609-205410.jpg'
        document.body.style.background ='rgba(137, 184, 106, 1)'

    }else if (hora >=12 && hora < 18){
        img.src = 'pexels-radchopra-333645.jpg'
        document.body.style.background = 'rgba(124, 157, 172, 1)'
    }else{
        img.src = 'pexels-rbrigant44-771883.jpg'
        document.body.style.background = 'rgba(82, 55, 112, 1)'
    }
}