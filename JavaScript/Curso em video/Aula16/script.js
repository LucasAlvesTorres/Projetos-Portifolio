//window.alert('Agora foi')

function Tabuada(){
    var num = window.document.getElementById('fnum')
    var tab = window.document.getElementById('seltxt')
    if(num.value.length == 0){
        window.alert('Campo numero não pode estar vazio, ')
        
    }else {
            var n = Number(num.value)
            var c = 1
            tab.innerHTML = ''
            while(c <= 10 ){
                var item = document.createElement('option')
                item.text = `${n} X ${c} = ${n*c}`
                item.value = `tab${c}`
                tab.appendChild(item)
                c++

    }
    
    }



}