function init(num){ ///adiciona os números no campo
    let number = document.getElementById("camp").innerHTML;
    document.getElementById("camp").innerHTML = number + num
}
function limpar(){/// retira o número do campo
    var number = document.getElementById("camp").innerHTML;
    document.getElementById('camp').innerHTML = number.substring(0, number.length -1) 
}
function calc() {///calcula o campo
    camp = document.getElementById("camp").innerHTML;
    document.getElementById("camp").innerHTML = eval(camp)
}
window.alert('calculadora teste alura"')