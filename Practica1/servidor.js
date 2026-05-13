
console.log("Hola Mundo js Servidor")

console.time("miProceso")

for(let i = 0; i< 1000000; i++) { }

console.timeEnd("miProceso")

let usuarios=[
    {nombre:"Oscar", edad: 21},
    {nombre:"Alejandro", edad: 21},
];

console.table(usuarios)