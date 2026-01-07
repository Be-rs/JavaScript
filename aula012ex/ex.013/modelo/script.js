function verificar(){
var data = new Data()
var ano = data.getFullYear()
var fano = document.getElementById('textano')
var res = document.getElementById('res')
if( fano.value.length == 0 || Number(fano.value) > ano ){
    window.alert('Algo esta errado tente novamente')
}else{
    var fsex = document.getElementsByName('rai')
    var idade = ano - Number(fano.value)
    var genero = ''
    if
}
    


}