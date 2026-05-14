// Cocina Productos 
// Array = let catalogo
// Objeto = {id: 1, nombre: "Capuchino", precio: 55, categoria: "Bebida caliente",
// Propiedades = id, nombre, precio, categoria,
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
    },

];

console.log("=== CATÁLOGO DE COCINA ===");

for(let i=0; i<catalogo.length; i++){

    console.log("Producto: " + catalogo[i].nombre);
    console.log("Precio: $" + catalogo[i].precio);
    console.log("Categoría: " + catalogo[i].categoria);
    console.log("----------------------");

}
