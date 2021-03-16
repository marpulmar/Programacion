//Ejercicio 1//
function pasar_de_p_a_cm() {
    var p_a_cm = (prompt("¿Podrías decirme un numero en pulgadas?"))
    var C = (p_a_cm) * 2.54
    document.write(p_a_cm, " pulgadas son ", C, " centímetros.")
}

//Ejercicio 2//
function pasar_de_f_a_c() {
    var grados_f = (prompt("Por favor, introduce una medida que quieras convertir."))
    var grados_c = (grados_f - 32) * 5 / 9
    document.write(grados_f, " grados Fahrenheit son ", grados_c, " grados centígrados.")
}

//Ejercicio 3//
function dol_a_eur() {
    var dolares = (prompt("Por favor, introduce una cantidad en dólares."))
    var euros = dolares * 0.891
    document.write(dolares, " $ son ", euros, " €.")
}

//Ejercicio 4//
function calcular() {
    var horas = (prompt("¿Cuántas horas has trabajado?"))
    var tarifa = (prompt("¿Cuál es la tarifa por hora?"))
    var salario = horas * tarifa
    document.write("Número de horas: ", horas, ".<br>Tarifa por hora: ", tarifa, "€.<br>Salario: ", salario, "€.")

}

//Ejercicio 5//
function calculo_capital() {
    var cap_inicial = (prompt("¿Cuál es el capital inicial?"))
    var tasa_interes = (prompt("¿Cuál es la tasa de interés?"))
    var tiempo = (prompt("¿A cuántos años se realiza la operación?"))
    var cap_final = cap_inicial * (1 + tasa_interes / 100) ** tiempo
    document.write("Después de ", tiempo, " años, un capital inicial de ", cap_inicial, "€ al ", tasa_interes, "% se convierte en ", cap_final, "€.")

}

//Ejercicio 6//
function calcular_nota() {
    var nota = (prompt("¿Qué nota has sacado en el examen?"))
    while (nota > 10) {
        alert("Por favor, escribe tu nota entre el 1 y el 10")
        nota = (prompt("Introduce la nota de tu examen"))
    }
    if (nota < 5) {
        alert("¡Vaya! Has suspendido.")
    }
    else if (nota >= 5 && nota < 7) {
        alert("¡Qué bien! Has aprobado.")
    }
    else if (nota >= 7 && nota < 9) {
        alert("¡Enhorabuena! Tienes un notable.")
    }
    else if (nota >= 9 && nota == 10) {
        alert("¡Tienes un sobresaliente!")
    }
}

//Ejercicio 7//
function pedir_numero() {
    var numero = (prompt("¿Podrías escribir un número? También puedes escribir un número negativo"))
    if (numero < 0) {
        var valor_absoluto = -1 * numero
        document.write("El valor absoluto de ", numero, " es ", valor_absoluto)
    }
    else {
        document.write("El valor absoluto de ", numero, " es ", numero)
    }
}

//Ejercicio 8// 
function preguntar_numeros_divisibles() {
    var numero = (prompt("Escriba un número entero positivo:"))
    if (numero % 2 == 0) {
        document.write("El número ", numero, " es divisible entre 2.<br>")
    }
    else if (numero % 3 == 0) {
        document.write("El número ", numero, " es divisible entre 3.<br>")
    }
    else if (numero % 5 == 0) {
        document.write("El número ", numero, " es divisible entre 5.<br>")
    }
    else if (numero % 7 == 0) {
        document.write("El número ", numero, " es divisible entre 7.<br>")
    }
    else if (numero % 11 == 0) {
        document.write("El número ", numero, " es divisble entre 11.<br>")
    }
    else if (numero % 13 == 0) {
        document.write("El número ", numero, " es divisible entre 13.<br>")
    }
    else if (numero % 17 == 0) {
        document.write("El número ", numero, " es divisible entre 17.<br>")
    }
    else if (numero % 19 == 0) {
        document.write("El número ", numero, " es divisible entre 19.<br>")
    }
}//TAMBIÉN SE PUEDE RESOLVER CON UN SWITCH//

// Ejercicio 9//MAL
function dias_semana() {
    var dia = prompt("Escriba un numero entero del 1 al 7.")
    switch (dia) {
        case 1:
            document.write("El número 1 se corresponde con el Lunes.");
            break
        case 2:
            document.write("El número 2 se corresponde con el Martes.");
            break
        case 3:
            document.write("El número 3 se correponde con el Miércoles.");
            break
        case 4:
            document.write("El número 4 se corresponde con el Jueves.");
            break
        case 5:
            document.write("El número 5 se corresponde con el Viernes");
            break
        case 6:
            document.write("El número 6 se corresponde con el Sábado.");
            break
        case 7:
            document.write("El número 7 se corresponde con el Domingo.");
            break
    }
}

//Ejercicio 10//
function pedir_pizza() {
    var tamano = prompt("¿De qué tamaño la quiere? Pequeña (P), Mediana (M) o Grande (G). Introduzca P, M o G.")
    var ingredientes = parseInt(prompt("¿Cuántos ingredientes quiere? Cada uno cuenta 1,5 euros. Introduzca un número (mín 1 ingrediente)."))
    if (tamano == "P") {
        document.write("La pizza P con ", ingredientes, " ingredientes adicionales cuesta ", 5 + ingredientes * 1.5)
    }
    else if (tamano == "M") {
        document.write("La pizza M con ", ingredientes, " ingredientes adicionales cuesta ", 8 + ingredientes * 1.5)
    }
    else if (tamano == "G") {
        document.write("La pizza G con ", ingredientes, " ingredientes adicionales cuesta ", 12 + ingredientes * 1.5)
    }
}

//Ejercicio 11//
function pasar_de_p_m() {
    var pies = prompt("Introduzca una medida en pies.")
    document.write(pies, " pies son ", pies / 3.281, " metros.")
}
function pasar_de_m_p() {
    var metros = prompt("Introduzca una medida en metros.")
    document.write(metros, " metros son ", metros * 3.281, " pies.")
}

//Ejercicio 12//
function horoscopo_chino() {
    var año = prompt("¿Cuál es tu año de nacimiento?")
    switch (año % 12) {
        case 4:
            alert("Según el calendario lunar chino, tu signo del zodiaco es la rata.");
            break
        case 5:
            alert("Segun el calendario lunar chino, tu signo del zodiaco es el buey.");
            break
        case 6:
            alert("Según el calendario lunar chino, tu signo del zodiaco es el tigre.");
            break
        case 7:
            alert("Según el calendario lunar chino, tu signo del zodiaco es el conejo.");
            break
        case 8:
            alert("Según el calendario lunar chino, tu signo del zodiaco es el dragón.");
            break
        case 9:
            alert("Según el calendario lunar chino, tu signo del zodiaco es la serpiente.");
            break
        case 10:
            alert("Según el calendario lunar chino, tu signo del zodiaco esel caballo.");
            break
        case 11:
            alert("Según el calendario lunar chino, tu signo del zodiaco es la cabra.");
            break
        case 0:
            alert("Según el calendario lunar chino, tu signo del zodiaco es el mono.");
            break
        case 1:
            alert("Según el calendario lunar chino, tu signo del zodiaco es el gallo.");
            break
        case 2:
            alert("Según el calendario lunar chino, tu signo del zodiaco es perro.");
            break
        case 3:
            alert("Según el calendario lunar chino, tu signo del zodiaco es cerdo.");
            break
        default:
            alert("Lo sentimos, nuestro programa no ha entendido lo que ha introducido");
            break
    }
}

//Ejercicio 13//
function horoscopo() {
    var mes = prompt("¿En qué mes naciste?")
    var dia = prompt("¿En qué día naciste?")
    if ((mes == "Diciembre" || mes == "diciembre" && dia >= 22) || (mes == "Enero" || mes == "enero" && dia <= 20)) {
        document.write("Tu signo del zodico es Capricornio.")
    }
    if ((mes == "Enero" || mes == "enero" && dia >= 21) || (mes == "Febrero" || mes == "febrero" && dia <= 19)) {
        document.write("Tu signo del zodiaco es Acuario.")
    }
    if ((mes == "Febrero" || mes == "febrero" && dia >= 20) || (mes == "Marzo" || mes == "marzo" && dia <= 20)) {
        document.write("Tu signo del zodiaco es Piscis.")
    }
    if ((mes == "Marzo" || mes == "marzo" && dia >= 21) || (mes == "Abril" || mes == "Abril" && dia <= 20)) {
        document.write("Tu signo del zodiaco es Aries.")
    }
    if ((mes == "Abril" || mes == "Abril" && dia >= 21) || (mes == "Mayo" || mes == "mayo" && dia <= 21)) {
        document.write("Tu signo del zodiaco es Tauro.")
    }
    if ((mes == "Mayo" || mes == "mayo" && dia >= 22) || (mes == "Junio" || mes == "junio" && dia <= 22)) {
        document.write("Tu signo del zodiaco es Géminis.")
    }
    if ((mes == "Junio" || mes == "junio" && dia >= 23) || (mes == "Julio" || mes == "julio" && dia <= 23)) {
        document.write("Tu signo del zodiaco es Cáncer.")
    }
    if ((mes == "Julio" || mes == "julio" && dia >= 24) || (mes == "Agosto" || mes == "agosto" && dia <= 23)) {
        document.write("Tu signo del zodiaco es Leo.")
    }
    if ((mes == "Agosto" || mes == "agosto" && dia >= 24) || (mes == "Septiembre" || mes == "septiembre" && dia <= 23)) {
        document.write("Tu signo del zodiaco es Virgo.")
    }
    if ((mes == "Septiembre" || mes == "septiembre" && dia >= 24) || (mes == "Octubre" || mes == "octubre" && dia <= 23)) {
        document.write("Tu signo del zodiaco es Libra.")
    }
    if ((mes == "Octubre" || mes == "octubre" && dia >= 24) || (mes == "Noviembre" || mes == "noviembre" && dia <= 22)) {
        document.write("Tu signo del zodiaco es Escorpio.")
    }
    if ((mes == "Noviembre" || mes == "noviembre" && dia >= 23) || (mes == "Diciembre" || mes == "diciembre" && dia <= 21)) {
        document.write("Tu signo del zodiaco es Capricornio.")
    }
}

//Ejercicio 14//
function contar_de_uno_a_doscinco() {
    for (i = 1; i <= 25; i++) {
        document.write(i, "<br>")
    }
}

//Ejercicio 15//
function potencias() {
    for (i = 1; i <= 10; i++) {
        var elevar = i ** 2
        document.write("El cuadrado de ", i, " es ", elevar, "<br>")
    }
}

//Ejercicio 16//
function multiplicar_por_tres() {
    for (i = 1; i <= 10; i++) {
        var multiplicar = i * 3
        document.write("3 por ", i, " son ", multiplicar, "<br>")
    }
}

//Ejercicio 17//
function ejercicio17() {
    var numero = (prompt("Por favor, escriba un numero"))
    for (i = 1; i <= 10; i++) {
        var multiplicacion = i * numero
        document.write(numero, " por ", i, " son ", multiplicacion, "<br>")
    }
}

//Ejercicio 18//
function numeros_divisibles() {
    for (num = 1; num <= 100; num++) {
        if (num % 2 == 0) {
            document.write("El numero ", num, " es par.<br>")
        }
        else {
            document.write("El numero ", num, " es impar.<br>")
        }
    }
}

//Ejercicio 19//
function multiplos_de_diez() {
    for (i = 50; i <= 150; i++) {
        if (i % 10 == 0) {
            document.write(i, "<br>")
        }
    }
}

//Ejercicios 20//
function contar_en_negativo() {
    i = -20
    while (i <= 0) {
        document.write(i, "<br>")
        i = i + 5
    }
}

//Ejercicio 21//
function contar_hasta_25() {
    var numero = 1
    while (numero <= 25) {
        document.write(numero, "<br>")
        numero++
    }
}

//Ejercicio 22//
function potencias() {
    var numero = (prompt("Hola, ¿podrías introducir un numero del 10 al 20?"))
    while (numero < 10 || numero > 20) {
        alert("¡Eso no es un numero del 10 al 20! Vuelve a probar")
        numero = (prompt("Introduce un numeo del 10 al 20"))
    }
    for (i = 1; i <= 100; i++) {
        var cuadrado = i ** 2
        document.write("El cuadrado de ", i, " es ", cuadrado, "<br>")
    }
}

//Ejercicio 23//
function lanzar_dado() {
    var dado;
    do {
        dado = Math.floor((Math.random() * 6) + 1)
        document.write("Tiro el dado y sale un ", dado, ".<br>")
    }
    while (dado != 3)
}
//Ejercicio 24//
function lanzo_dado() {
    var dado;
    var tiros = 0;
    do {
        dado = Math.floor((Math.random() * 6) + 1)
        document.write("Tiro el dado y sale un ", dado, ".<br>")
        tiros++
    }
    while (dado != 3)
    document.write("Se han realizado ", tiros, " lanzamientos hasta que ha salido el 3.")
}

//Ejercicio 25//
function adivina() {
var numero = Math.floor((Math.random() * 10) + 1)
var preguntar = prompt("Introduce un número del 1 al 10")
if (numero==preguntar) {
    alert ("¡Has acertado, el número en el que estaba pensando era el ",numero,"!")
}
else {
    alert ("¡Oh vaya, no has acertado! El número en el que esaba pensando era el ",numero)
}
}

//Ejercicio 26//


