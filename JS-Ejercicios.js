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

//Ejercicio 21//
function contar_hasta_25 () {
    var numero = (prompt("Antes tienes que introducir un numero entero del 1 al 5"))
    while (numero<1 || numero>5) {
        alert ("Eso no es un numero entre 1 y 5, ¡prueba de nuevo!")
       numero = (prompt( "Introduce un numero entre 1 y 5"))
    }
    for (i=1; i<=25; i++) {
        document.write (i, "<br>")
    }
}

//Ejercicio 22//
function potencias() {
    var numero = (prompt("Hola, ¿podrías introducir un numero del 10 al 20?"))
    while (numero<10 || numero>20) {
        alert ("¡Eso no es un numero del 10 al 20! Vuelve a probar")
        numero = (prompt("Introduce un numeo del 10 al 20"))
    }
    for (i=1; i<=100; i++) {
        var cuadrado = i**2
        document.write ("El cuadrado de ",i," es ",cuadrado,"<br>")
    }
}