console.group("Cuadrados");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
perimetroCuadrado();
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + " cm");

function areaCuadrado(lado) {
    return lado * lado;
} 
// console.log("El área del cuadrado es: " + areaCuadrado + " cm2");

console.groupEnd();

//Triangulo
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log("Los lados del triángulo miden: " + ladoTriangulo1 + " cm, " + ladoTriangulo2 + " cm, " + baseTriangulo + " cm");

// const alturaTriangulo = 5.5;

// console.log("La altura del triángulo mide: " + alturaTriangulo + " cm");
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
perimetroTriangulo();
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + " cm");

function areaTringulo(base, altura) {
    return (base * altura) / 2;
}
areaTringulo();
// console.log("El área del triángulo es: " + areaTringulo + " cm2")


console.groupEnd();

// console.log("Círculos");
//Radio
// const radioCirculo = 4;
// console.log("El radio del círculo mide: " + radioCirculo + " cm");

//Diámetro
// function diametroCirculo() {
//     return radioCirculo * 2;
// }

// console.log("El diametro del círculo mide: " + diametroCirculo + " cm");

//PI
// const PI = Math.PI.toFixed(2);
// console.log("PI es: " + PI + " cm")


// //Circunferencia
// const perimetroCirculo = diametroCirculo * PI;
// console.log("El perímetro del círculo mide: " + perimetroCirculo + " cm");

// //Área
// const areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log("El área del círculo mide: " + areaCirculo + " cm2");

// console.groupEnd();


function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}