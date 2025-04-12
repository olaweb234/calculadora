function evento(num){
   var resultado= document.getElementById('resultado')
   resultado.innerHTML +=num
}

function apagar(){
    document.getElementById('resultado').innerHTML=''
}

function tudo(valor){
    var resultado= document.getElementById('resultado')
    if(resultado.innerHTML ==='')
       resultado.innerHTML ='sem nada'
    else{
        resultado.innerHTML = eval(resultado.innerHTML)
    }
    if(resultado=='X'){
        resultado.innerHTML +='*'

    }else{
        resultado.innerHTML += valor
    }

}

function deletar(){
    var resultado= document.getElementById('resultado')
    resultado.innerHTML= resultado.innerHTML.slice(0,-1)
     if(resultado.innerHTML ===''){
       resultado.innerHTML ='sem nada'
     }
}

function porcentagem(){
    var resultado= document.getElementById('resultado')
    if(resultado !==''){
        resultado.innerHTML= parseFloat(resultado.innerHTML)/100
    }
}