let AñoActual = parseInt(prompt("Ingresar el año actual"));
let AñoDeNacimiento = parseInt(prompt("Ingrese su año de nacimiento"));
let resultado = AñoActual - AñoDeNacimiento;

console.log("Su edad es de: " + resultado + " " + "años");

if (resultado < 18) {
  alert("Eres menor de edad, no podras ingresar al sitio web");
} else {
  alert("Eres mayor de edad, Bienvenido al sitio web");
}
