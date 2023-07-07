// foreach

var numero = [1,2,3,4,5,6,7,8];

numero.forEach(function(i){
    console.log(i);
})

// some

let numeros = [1,2,3,4,5];

console.log(numeros.some((value)=>{
 return(value % 2 == 0);
}));

// every

let nums = [5,5,6,6];

console.log(nums.every((value)=>{
    return(value == 5);
}));

// map

let num = [1,2,3,4,5.6];

let duplicar = num.map((value)=>{
    return(value * 2);
});

console.log(duplicar);

// filter

let n = [1020,3340, 7046, 2550, 1092];

let numeros_grandes = n.filter((value)=>{
    return(value > 2500);
});
console.log(numeros_grandes);

// reduce

let n1 = [1,2,3,4,5];

let respuesta = n1.reduce((suma, dato_act)=>
    suma + dato_act, 0);

    console.log(respuesta);