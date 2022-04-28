//window.alert('Agora foi')


function contar(){
var finicio = document.getElementById('inicio')
var ffim = document.getElementById('fim')
var fpasso = document.getElementById('passo')
var res = document.getElementById('res')

  // window.alert(`${passo}`)
   if (finicio.value.length == 0 || ffim.value.length == 0 || fpasso.value.length == 0 ){
window.alert('dados inválidos!')
   }else{
    res.innerHTML = 'contando... <br>'
    var i = Number(finicio.value)
    var f = Number( ffim.value)
    var p = Number(fpasso.value)
    if(p <= 0){
      window.alert('passo inválido, considerando PASSO 1')
      p = 1
    }
    
    if(i < f ){
      //contagem crecente
    for( var c = i;c <= f; c+= p){
      res.innerHTML += ` ${c}\u{1F449}`
    } 
  } else {
    //contagem regressiva
    for( var c = i;c >= f; c-= p){
      res.innerHTML += ` ${c}\u{1F449}`
    } 
    
  }


    res.innerHTML += `\u{1F3C1}`
   }
}
