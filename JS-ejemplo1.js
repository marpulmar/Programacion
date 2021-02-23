function edad () {
    alert("¡Hola!")
    var numero = parseInt (prompt("¿Qué edad tienes? Introdúcela"))
    var resultado;
    resultado = parseInt (numero);
    if (resultado > 17) {
        alert ("Entonces eres mayor de edad")
    }
    else {
        alert ("Entonces eres menor de edad")
    }
}