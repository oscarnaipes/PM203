// Cocina Productos
// Array = catalogo
// Objeto = cada producto { }
// Propiedades = id, nombre, precio, categoria
// Find = buscar un producto específico por su id
// Filter = filtrar productos por precio o categoría
// Promesa = representa una operación que tarda tiempo
// Resolve = producto preparado correctamente
// Reject = error en cocina o falta ingrediente
// setTimeout = simula tiempo de preparación
// Math.random = genera eventos aleatorios

let catalogo = [

    {
        id: 1,
        nombre: "Capuchino",
        precio: 55,
        categoria: "Bebida caliente",
    },

    {
        id: 2,
        nombre: "Latte",
        precio: 60,
        categoria: "Bebida caliente",
    },

    {
        id: 3,
        nombre: "Americano",
        precio: 40,
        categoria: "Bebida caliente",
    },

    {
        id: 4,
        nombre: "Frappé Moka",
        precio: 75,
        categoria: "Bebida fría",
    },

    {
        id: 5,
        nombre: "Cheesecake",
        precio: 65,
        categoria: "Postre",
    },

    {
        id: 6,
        nombre: "Frapuchino de Caramelo",
        precio: 70,
        categoria: "Bebida fría",
    },

    {
        id: 7,
        nombre: "Té Verde",
        precio: 45,
        categoria: "Bebida caliente",
    },

    {
        id: 8,
        nombre: "Galleta de chocolate",
        precio: 50,
        categoria: "Postre",
    },

    {
        id: 9,
        nombre: "Refresher de Frutas",
        precio: 55,
        categoria: "Bebida fría",
    },

    {
        id: 10,
        nombre: "Croissant",
        precio: 30,
        categoria: "Postre",
    }

];





function prepararProducto(idProducto){

return new Promise((resolve,reject)=>{

let producto = catalogo.find(
producto=>producto.id===idProducto
);


console.log(`
Preparando ${producto.nombre}...
`);




setTimeout(()=>{




let ingredienteDisponible = Math.random() > 0.5;




if(ingredienteDisponible){

resolve(`
${producto.nombre} listo
`);

}



else{

reject(`
Error en cocina:
No hay ingredientes para ${producto.nombre}
`);

}

},3000);

});

}





prepararProducto(2)

.then(resultado=>{

console.log(resultado);

})

.catch(error=>{

console.log(error);

});