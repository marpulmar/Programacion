//Ejemplo 1//
function preguntar_edad () {
    alert("¡Hola!")
    var edad = parseInt (prompt("¿Qué edad tienes? Introdúcela"))
    if (edad > 17) {
        alert ("Entonces eres mayor de edad")
    }
    else {
        alert ("Entonces eres menor de edad")
    }
}

//Ejemplo 2//
function preguntar_nota() {
    var nota = (prompt ("¿Qué nota has sacado en el examen?"))
    if (nota < 5) {
        alert ("¡Oh vaya, has suspendido!")
    }
    else if (nota >= 5 && nota < 7) {
        alert ("¡Estás aprobado!")
    }
    else if (nota >= 7 && nota < 9){
        alert ("¡Tienes un notable!")
    }
    else {
        alert ("¡Enhorabuena, tienes un sobresaliente!")
    }
}
