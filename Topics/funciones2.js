function area () {
    const PI = 3.14;
    var radio = document.getElementById("radio").value 
    var resultado = PI * radio * radio;
    document.getElementById("resultado").value = resultado;
}

//eval

var a = 10;
var b = 20;
var x = eval("a + b");
var y = eval("3 + 4");
var z = eval(" a + 8");
var respt = x + y;
console.log(respt);

// pasefloat

var a = parseFloat("10");
var b = parseFloat("20curso");
var c = parseInt("10curso");

console.log(c);

// date.parse()
// 1 enero de 1970;

var dato = "1 january, 1970 1:30 PM"
var resultado = Date.parse(dato);
console.log(resultado);