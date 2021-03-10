//Ejercicio 1//
function pasar_de_p_a_cm () {
     var p_a_cm = (prompt("¿Podrías decirme un numero en pulgadas?"))
     var C = (p_a_cm)*2.54
     document.write (p_a_cm," pulgadas son ",C," centímetros.")
}

//Ejercicio 2//
function pasar_de_f_a_c() {
    var grados_f = (prompt("Por favor, introduce una medida que quieras convertir."))
    var grados_c = (grados_f-32)*5/9
    document.write (grados_f," grados Fahrenheit son ",grados_c," grados centígrados.")
}

//Ejercicio 3//
function dol_a_eur() {
    var dolares = (prompt("Por favor, introduce una cantidad en dólares."))
    var euros = dolares*0.891
    document.write (dolares," $ son ",euros," €.")
}

//Ejercicio 4//
function calcular() {
    var horas = (prompt("¿Cuántas horas has trabajado?"))
    var tarifa = (prompt("¿Cuál es la tarifa por hora?"))
    var salario = horas*tarifa
    document.write ("Número de horas: ", horas,".<br>Tarifa por hora: ",tarifa,"€.<br>Salario: ",salario,"€.")

}

//Ejercicio 5//
function calculo_capital() {
    var cap_inicial =(prompt("¿Cuál es el capital inicial?"))
    var tasa_interes =(prompt("¿Cuál es la tasa de interés?"))
    var tiempo = (prompt("¿A cuántos años se realiza la operación?"))
    var cap_final = cap_inicial*(1+tasa_interes/100)**tiempo
    document.write ("Después de ",tiempo," años, un capital inicial de ",cap_inicial,"€ al ",tasa_interes,"% se convierte en ",cap_final,"€.")
    
}

//Ejercicio 6//
function calcular_nota() {
    var nota = (prompt("¿Qué nota has sacado en el examen?"))
    while (nota>10){
        alert ("Por favor, escribe tu nota entre el 1 y el 10")
        nota= (prompt("Introduce la nota de tu examen"))
    }
    if (nota<5) {
        alert ("¡Vaya! Has suspendido.")
    }
    else if(nota>=5 && nota<7) {
        alert ("¡Qué bien! Has aprobado.")
    }
    else if(nota>=7 && nota<9) {
        alert ("¡Enhorabuena! Tienes un notable.")
    }
    else if (nota>=9 && nota==10) {
        alert ("¡Tienes un sobresaliente!")
    }
}

//Ejercicio 7//
function pedir_numero() {
    var numero = (prompt("¿Podrías escribir un número? También puedes escribir un número negativo"))
    if (numero<0) {
        var valor_absoluto = -1*numero
        document.write ("El valor absoluto de ",numero," es ",valor_absoluto)
    }
    else {
        document.write ("El valor absoluto de ",numero," es ",numero)
    }
}

//Ejercicio 8// 
function preguntar_numeros_divisibles () {
    var numero = (prompt("Escriba un número entero positivo:"))
    if (numero%2==0){
        document.write ("El número ",numero," es divisible entre 2.<br>")
    }
    if (numero%3==0) {
        document.write ("El número ",numero," es divisible entre 3.<br>")
    }
    if (numero%5==0){
        document.write ("El número ",numero," es divisible entre 5.<br>")
    }
    if (numero%7==0) {
        document.write ("El número ",numero," es divisible entre 7.<br>")
    }
    if (numero%11==0) {
        document.write ("El número ",numero, " es divisble entre 11.<br>")
    }
    if (numero%13==0) {
        document.write ("El número ",numero, " es divisible entre 13.<br>")
    }
    if (numero%17==0) {
        document.write ("El número ",numero, " es divisible entre 17.<br>")
    }
    if (numero%19==0) {
        document.write ("El número ",numero," es divisible entre 19.<br>")
    }
}

//Ejercicio 14//
function contar_de_uno_a_doscinco() {
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

//Ejercicio 18//
function numeros_divisibles() {
    for (num=1; num<=100; num++) {
        if (num%2!=0){
            document.write ("El número ",num," es impar")
        }
        else {
            document.write ("El número ",num," es par")
        }

    }
}
//Ejercicio 21//
function contar_hasta_25 () {
    var numero = 1 
    while (numero<=25) {
        document.write (numero,"<br>")
        numero++
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

//Ejercicio 23//

//Ejercicio 24//

//Ejercicio 25//
