//Ejercicio 1//
function pasar_de_p_a_cm () {
     var p_a_cm = (prompt("¿Podrías decirme unn numero en pulgadas?"))
     var C = (p_a_cm)*2.54
     document.write (p_a_cm," pulgadas son ",C," centímetros.")
}

//Ejercicio 14//
function contar_de_uno_a_seiscinco() {
    for (i=1; i<=25; i++) {
        document.write (i,"<br>")
    }
}

//Ejercicio 15//
function potencias() {
    for (i=1; i<=10; i++) {
        var elevar = i**2
        document.write ("El cuadrado de ",i," es ",elevar,"<br>")
    }
}

//Ejercicio 16//
function multiplicar_por_tres() {
    for (i=1; i<=10;i++) {
        var multiplicar = i*3
        document.write ("3 por ",i," son ",multiplicar,"<br>")
    }
}

//Ejercicio 17//
function ejercicio17() {
    var numero = (prompt("Por favor, escriba un numero"))
    for (i=1;i<=10;i++){
    var multiplicacion = i*numero
    document.write (numero," por ",i," son ",multiplicacion,"<br>")
    }
}