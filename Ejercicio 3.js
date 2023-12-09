//Ejercicio 3: Verificación de número par o impar
//Consigna: Crea un programa que solicite al usuario ingresar un número y determine si es par o impar.


let numero = parseInt(prompt("Ingresa un número:"));

//si el numero que yo ingrese lo divido por dos y el resultado me da cero, entonces el numero es par
if (numero % 2 === 0) {
    alert("El número es par.");
} else { //sino el numero es impar
    alert("El número es impar.");
}