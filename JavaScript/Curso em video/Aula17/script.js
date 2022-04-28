//window.alert('Agora foi')
var num = window.document.getElementById('tnum')
var tab = window.document.querySelector('select#flista')
var res = window.document.querySelector('div#res')
var valores = []

function isnumero(n){
if(Number(n) >= 1 && Number(n) <= 100){
    return true
}else{
    return false
    }
}

function inlista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return false
    }else{
        return true
    }

}

function Adicionar(){

    if(isnumero(num.value)&& inlista(num.value, valores)){
    valores.push(Number(num.value))
    var item = document.createElement('option')
    item.text = `Valor ${num.value} Adicionado`
    tab.appendChild(item)
    res.innerHTML= ''

    }else{
        window.alert('valor inválido ou já adicionado a lista.')
    }
    num.value = ''
    num.focus()
   
  
    }

    function Limpar(){
        window.document.querySelector('select#flista').innerHTML = ''
        valores = []
    }

    function finalizar(){
        if (valores.length == 0){
            window.alert('Lista não pode estar vázia!')
        }else{
            let tot = valores.length
            var maior = valores[0]
            var menor = valores[0]
            let soma = 0
            let media = 0

            for (let pos in valores ){
                soma += valores[pos]
                if(valores[pos] > maior)
                maior = valores[pos]
                if(valores[pos] < menor)
                menor = valores[pos]
            }
            media = soma / tot


            res.innerHTML =''
            res.innerHTML += `<p>Foram encontrados ${tot} items!</p>`
            res.innerHTML += `<p>O maior valor encontrado foi o valor ${maior}</p>`
            res.innerHTML += `<p>O menor valor encontrado foi o valor ${menor}</p>`
            res.innerHTML += `<p>A soma dos valores da lista é igua a ${soma}</p>`
            res.innerHTML += `<p>E a média é igua a ${media}</p>`


        }

    }
    

