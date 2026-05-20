// Cocina Productos
// Array = catalogo
// Objeto = cada producto { }
// Propiedades = id, nombre, precio, categoria

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


// ========= CATÁLOGO =========

console.log("\n=== CATÁLOGO COMPLETO ===");

for(let i=0; i<catalogo.length; i++){

    console.log(`
Producto: ${catalogo[i].nombre}
Precio: $${catalogo[i].precio}
Categoría: ${catalogo[i].categoria}
----------------------`);

}


// ========= PRODUCTOS BARATOS =========

console.log("\n=== PRODUCTOS BARATOS ===");

let baratos = catalogo.filter(
    producto => producto.precio <= 50
);

for(let i=0; i<baratos.length; i++){

    console.log(`
Producto: ${baratos[i].nombre}
Precio: $${baratos[i].precio}
Categoría: ${baratos[i].categoria}
----------------------`);

}


// ========= PRODUCTOS CAROS =========

console.log("\n=== PRODUCTOS CAROS ===");

let caros = catalogo.filter(
    producto => producto.precio >=65
);

for(let i=0; i<caros.length; i++){

    console.log(`
Producto: ${caros[i].nombre}
Precio: $${caros[i].precio}
Categoría: ${caros[i].categoria}
----------------------`);

}


// ========= BEBIDAS =========

console.log("\n=== BEBIDAS ===");

let bebidas = catalogo.filter(
    producto => producto.categoria.includes("Bebida")
);

for(let i=0; i<bebidas.length; i++){

    console.log(`
Producto: ${bebidas[i].nombre}
Precio: $${bebidas[i].precio}
Categoría: ${bebidas[i].categoria}
----------------------`);

}


// ========= POSTRES =========

console.log("\n=== POSTRES ===");

let postres = catalogo.filter(
    producto => producto.categoria==="Postre"
);

for(let i=0; i<postres.length; i++){

    console.log(`
Producto: ${postres[i].nombre}
Precio: $${postres[i].precio}
Categoría: ${postres[i].categoria}
----------------------`);

}


// ========= FIND =========

console.log("\n=== BUSCAR PRODUCTO ===");

let productoBuscado = catalogo.find(
    producto => producto.id===4
);

console.log(`
Producto encontrado:

Nombre: ${productoBuscado.nombre}
Precio: $${productoBuscado.precio}
Categoría: ${productoBuscado.categoria}

----------------------
`);