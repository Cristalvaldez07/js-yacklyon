function suma (a,b) {
    var sum = a + b;
    console.log('la suma es: '+ sum)
}

suma(12,6);

// funciones retornables

function dato_trabajador () {
    var salario = 2550;
    return salario;
}

var obrero = dato_trabajador();
console.timeLog(obrero);

// funciones anonimas(flecha)

var resta = (n1,n2) => n1 - n2;

console.log(resta(8,2));

// funciones anidadas

function operacion () {
    const PI = 3.14;
    function area (radio) {
        var area = PI * radio * radio;
        console.log('el area del circulo es: '+area);
    }
    operacion.area = area;
}

var radio = 4;
operacion();
operacion.area(radio);

// 