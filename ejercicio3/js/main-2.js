// Ready function
$(function() {
	var tableProm = $('.table-prom');
	
	console.log(tableProm.lenght);

//
/*
	Tipos de valores:
		-Valores de cadenas de texto -> STRING
		-Valor numérico -> 				NUMBER
		-Valor de tipo arreglo -> 		ARRAY
		-Valor boolean -> 				BOOLEAN
*/
var verdadero = true;
var falso = false;
	
var texto1 = "Hola Mundo";
var texto2 = "2017";

var numero1 = 10;
var numero2 = 20;

var resultado = numero1 + numero2;

//ARRAY === Arreglo, Vector, Matriz
var diasSemana= ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];



/* 
	"Menor que" devuelve un BOOLEAN -> 5 < 10 === TRUE
	"++" Incremento p.ej: 10 ++ == 11
	"--" Decremento p.ej: 10 -- == 9


resultado++;
resultado++;
resultado++;
resultado++;

console.log (resultado);
*/
	// iteador "for"
	var numeroDiasSemana = diasSemana.length;
	
	for(var i = 0; i < numeroDiasSemana; i++) {
		console.log(diasSemana[i]);
}
	

});