function insert(num) {

    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}


function clean() {

    document.getElementById('resultado').innerHTML = "";
}


function back() {

    var tela = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = tela.substring(0, tela.length - 1);
}


function resultado() {

    var calcular = document.getElementById('resultado').innerHTML;
    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(calcular);
    }
}