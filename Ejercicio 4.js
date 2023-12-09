//Ejercicio 4: Tabla de multiplicar
//Consigna: Escribe un programa que solicite al usuario ingresar un número y muestre la tabla de multiplicar de ese número del 1 al 10.


let numero = parseInt(prompt("Ingresa un número:"));


for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    alert(numero + " x " + i + " = " + resultado);
}