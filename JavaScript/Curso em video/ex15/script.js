function Verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('TxtAno')
    var res = document.getElementById('res')
  // ou:  var res = document.querySelector('div#res')
  if(fano.value.length == 0 || fano.value > ano){
      window.alert('dados inseridos inválidos!')
  } else {
      var fsex = document.getElementsByName('RadSex')
      var idade = ano - Number(fano.value)
     // res.innerHTML = `a sua idade é ${idade}`
     var gênero = ''
     var img = document.createElement('img')
     img.setAttribute('id', 'foto')
    if (fsex[0].checked){
        gênero = 'homem'
        if (idade >= 0 && idade < 10){
            //crianca
            img.setAttribute('src', 'IMG/CriancaMenino.JPG')
        }else if (idade < 21 ){
            //jovem
            img.setAttribute('src', 'IMG/JovemMenino.JPG')
        }else if (idade <50){
            //Adulto
            img.setAttribute('src', 'IMG/AdultoHomem.JPG')
        }else{
            //idoso
            img.setAttribute('src', 'IMG/IdosoHomem.jpg')
        }
          }else if(fsex[1].checked){
            gênero = 'mulher'
            if (idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src', 'IMG/CriancaMenina.JPG')
            }else if (idade < 21 ){
                //jovem
                img.setAttribute('src', 'IMG/JovemMulher.JPG')
            }else if (idade <50){
                //Adulto
                img.setAttribute('src', 'IMG/AdultoMulher.JPG')
            }else{
                //idoso
                img.setAttribute('src', 'IMG/IdosoMulher.JPG')
            }
          }
          res.style.textAlign = 'center'
          res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
          res.appendChild(img)
         }
  }