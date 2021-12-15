console.group("Cuadrados");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + " cm2");

console.groupEnd();

//Triangulo

console.group("Triángulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log("Los lados del triángulo miden: " + ladoTriangulo1 + " cm, " + ladoTriangulo2 + " cm, " + baseTriangulo + " cm");

const alturaTriangulo = 5.5;

console.log("La altura del triángulo mide: " + alturaTriangulo + " cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo es: " + perimetroTriangulo + " cm");

const areaTringulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triángulo es: " + areaTringulo + " cm2")


console.groupEnd();


console.log("Círculos");

//Radio
const radioCirculo = 4;
console.log("El radio del círculo mide: " + radioCirculo + " cm");

//Diámetro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del círculo mide: " + diametroCirculo + " cm");

//PI
const PI = Math.PI.toFixed(2);
console.log("PI es: " + PI + " cm")


//Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perímetro del círculo mide: " + perimetroCirculo + " cm");

//Área
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El área del círculo mide: " + areaCirculo + " cm2");

console.groupEnd();