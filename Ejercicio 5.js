//Ejercicio 5: Calculadora básica
//Consigna: Crea una calculadora simple que permita al usuario ingresar dos números y realizar operaciones de suma, resta, multiplicación y división.

let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));

let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num1 / num2;

alert("Suma: " + suma);
alert("Resta: " + resta);
alert("Multiplicación: " + multiplicacion);
alert("División: " + division);