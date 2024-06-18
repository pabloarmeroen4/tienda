// Establecer el idioma del documento
document.documentElement.lang = "en";

// Configurar los metadatos y enlaces del encabezado del documento
document.head.innerHTML = `
    <link rel="icon" type="image/svg+xml" href="img/steam.png" />
    <link rel="stylesheet" href="css/carrito.css">
`;

// Crear el encabezado de la página
const encabezado = document.createElement('header');

// Crear la sección principal del encabezado
const articuloEncabezado = document.createElement('article');
articuloEncabezado.classList.add('header');

// Añadir el logo de la página
const imagenLogo = document.createElement('img');
imagenLogo.classList.add('logo');
imagenLogo.src = 'img/steam.png';

// Crear la sección del carrito
const seccionCarrito = document.createElement('section');
const imagenCarrito = document.createElement('img');
imagenCarrito.classList.add('carrito');
imagenCarrito.src = 'img/cart.png';
imagenCarrito.alt = '';
imagenCarrito.setAttribute('onclick', 'showCart(this)');

// Añadir contador de productos en el carrito
const contadorProductos = document.createElement('p');
contadorProductos.classList.add('count-product');
contadorProductos.textContent = '0';

// Incorporar la imagen del carrito y el contador a la sección del carrito
seccionCarrito.appendChild(imagenCarrito);
seccionCarrito.appendChild(contadorProductos);

// Crear la sección para los productos del carrito
const productosCarrito = document.createElement('section');
productosCarrito.classList.add('cart-products');
productosCarrito.id = 'products-id';

// Añadir botón de cierre en la sección del carrito
const botonCerrar = document.createElement('p');
botonCerrar.classList.add('close-btn');
botonCerrar.setAttribute('onclick', 'closeBtn()');
botonCerrar.textContent = 'X';

// Título para la sección del carrito
const tituloCarrito = document.createElement('h3');
tituloCarrito.textContent = 'Mi carrito';

// Sección para mostrar los ítems en el carrito
const itemsTarjeta = document.createElement('section');
itemsTarjeta.classList.add('card-items');

// Mostrar el precio total de los productos en el carrito
const precioTotal = document.createElement('h2');
precioTotal.innerHTML = 'Total: $<strong class="price-total">0</strong>';

// Añadir todos los elementos a la sección del carrito
productosCarrito.appendChild(botonCerrar);
productosCarrito.appendChild(tituloCarrito);
productosCarrito.appendChild(itemsTarjeta);
productosCarrito.appendChild(precioTotal);

// Integrar todos los elementos en la sección principal del encabezado
articuloEncabezado.appendChild(imagenLogo);
articuloEncabezado.appendChild(seccionCarrito);
articuloEncabezado.appendChild(productosCarrito);

// Añadir la sección principal del encabezado al encabezado
encabezado.appendChild(articuloEncabezado);
document.body.appendChild(encabezado);

// Crear la sección principal para los productos
const seccionPrincipal = document.createElement('section');
seccionPrincipal.classList.add('main');

// Crear el artículo que contendrá los productos
const articuloProductos = document.createElement('article');
articuloProductos.classList.add('products');

// Lista de productos (juegos de PC) para agregar a la página
const productos = [
    { img: 'img/file.png', price: 60, title: 'Cyberpunk 2077', id: 1 },
    { img: 'img/file2.png', price: 60, title: 'The Witcher 3: Wild Hunt', id: 2 },
    { img: 'img/file3.png', price: 50, title: 'Red Dead Redemption 2', id: 3 },
    { img: 'img/file4.png', price: 70, title: 'Elden Ring', id: 4 },
    { img: 'img/file5.png', price: 60, title: 'Assassin\'s Creed Valhalla', id: 5 },
    { img: 'img/file6.png', price: 40, title: 'Control', id: 6 },
    { img: 'img/file7.png', price: 60, title: 'Horizon Zero Dawn', id: 7 },
    { img: 'img/file8.png', price: 60, title: 'Death Stranding', id: 8 },
    { img: 'img/file9.png', price: 50, title: 'Resident Evil Village', id: 9 },
    { img: 'img/file10.png', price: 60, title: 'Far Cry 6', id: 10 }
];

// Añadir cada producto (juego) a la sección de productos
productos.forEach(producto => {
    const seccionProducto = document.createElement('section');
    seccionProducto.classList.add('produc');

    const articuloProducto = document.createElement('article');

    const imagenProducto = document.createElement('img');
    imagenProducto.src = producto.img;
    imagenProducto.alt = '';

    const precioProducto = document.createElement('p');
    precioProducto.innerHTML = `<span>${producto.price}</span>$`;

    const tituloProducto = document.createElement('p');
    tituloProducto.classList.add('title');
    tituloProducto.textContent = producto.title;

    const enlaceProducto = document.createElement('a');
    enlaceProducto.href = '';
    enlaceProducto.dataset.id = producto.id;
    enlaceProducto.classList.add('btn-add-cart');
    enlaceProducto.textContent = 'Añadir al carrito';

    articuloProducto.appendChild(imagenProducto);
    articuloProducto.appendChild(precioProducto);
    seccionProducto.appendChild(articuloProducto);
    seccionProducto.appendChild(tituloProducto);
    seccionProducto.appendChild(enlaceProducto);

    articuloProductos.appendChild(seccionProducto);
});

// Incorporar los productos a la sección principal
seccionPrincipal.appendChild(articuloProductos);
document.body.appendChild(seccionPrincipal);

// Crear y añadir el pie de página (vacío por ahora)
const pieDePagina = document.createElement('footer');
document.body.appendChild(pieDePagina);

// Añadir el enlace al archivo JavaScript para funcionalidades adicionales
const script = document.createElement('script');
script.src = 'js/carrito.js';
document.body.appendChild(script);
