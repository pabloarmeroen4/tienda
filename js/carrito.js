// Variables
let allContainerCart = document.querySelector('.products'); // Contenedor de todos los productos en la tienda
let containerBuyCart = document.querySelector('.card-items'); // Contenedor de los ítems del carrito
let priceTotal = document.querySelector('.price-total'); // Elemento para mostrar el precio total
let amountProduct = document.querySelector('.count-product'); // Contador de productos en el carrito

let buyThings = []; // Array para almacenar los productos seleccionados
let totalCard = 0; // Variable para el total del carrito
let countProduct = 0; // Contador de productos en el carrito

// Funciones
loadEventListenrs(); // Cargar los eventos al inicio

function loadEventListenrs() {
    // Evento para agregar productos al carrito
    allContainerCart.addEventListener('click', addProduct);
    // Evento para eliminar productos del carrito
    containerBuyCart.addEventListener('click', deleteProduct);
}

function addProduct(e) {
    e.preventDefault(); // Prevenir el comportamiento por defecto del enlace
    // Verificar si el clic es en un botón de añadir al carrito
    if (e.target.classList.contains('btn-add-cart')) {
        const selectProduct = e.target.parentElement; // Seleccionar el contenedor del producto
        readTheContent(selectProduct); // Leer el contenido del producto
    }
}

function showCart(x) {
    // Mostrar la sección del carrito
    document.getElementById("products-id").style.display = "block";
}

function closeBtn() {
    // Ocultar la sección del carrito
    document.getElementById("products-id").style.display = "none";
}

function deleteProduct(e) {
    // Verificar si el clic es en el botón de eliminar producto
    if (e.target.classList.contains('delete-product')) {
        const deleteId = e.target.getAttribute('data-id'); // Obtener el ID del producto a eliminar

        // Reducir el total del carrito restando el precio del producto eliminado
        buyThings.forEach(value => {
            if (value.id == deleteId) {
                let priceReduce = parseFloat(value.price) * parseFloat(value.amount);
                totalCard = totalCard - priceReduce;
                totalCard = totalCard.toFixed(2);
            }
        });
        // Filtrar para eliminar el producto del array
        buyThings = buyThings.filter(product => product.id !== deleteId);
        
        countProduct--; // Reducir el contador de productos
    }

    // Ajustar el total y el contador si el carrito está vacío
    if (buyThings.length === 0) {
        priceTotal.innerHTML = 0;
        amountProduct.innerHTML = 0;
    }
    loadHtml(); // Recargar el HTML del carrito
}

function readTheContent(product) {
    // Crear un objeto con la información del producto
    const infoProduct = {
        image: product.querySelector('section img').src,
        title: product.querySelector('.title').textContent,
        price: product.querySelector('section p span').textContent,
        id: product.querySelector('a').getAttribute('data-id'),
        amount: 1
    }

    // Actualizar el total del carrito sumando el precio del nuevo producto
    totalCard = parseFloat(totalCard) + parseFloat(infoProduct.price);
    totalCard = totalCard.toFixed(2);

    // Verificar si el producto ya está en el carrito
    const exist = buyThings.some(product => product.id === infoProduct.id);
    if (exist) {
        // Si existe, aumentar la cantidad
        const pro = buyThings.map(product => {
            if (product.id === infoProduct.id) {
                product.amount++;
                return product;
            } else {
                return product;
            }
        });
        buyThings = [...pro]; // Actualizar el array con los productos
    } else {
        // Si no existe, añadirlo al array
        buyThings = [...buyThings, infoProduct];
        countProduct++; // Incrementar el contador de productos
    }
    loadHtml(); // Recargar el HTML del carrito
    // console.log(infoProduct); // Debugging: imprimir el producto en la consola
}

function loadHtml() {
    clearHtml(); // Limpiar el HTML actual del carrito
    // Iterar sobre los productos en el carrito y crear el HTML correspondiente
    buyThings.forEach(product => {
        const { image, title, price, amount, id } = product; // Desestructurar el producto
        const row = document.createElement('div');
        row.classList.add('item');
        row.innerHTML = `
            <img src="${image}" alt="">
            <div class="item-content">
                <h5>${title}</h5>
                <h5 class="cart-price">${price}$</h5>
                <h6>Amount: ${amount}</h6>
            </div>
            <span class="delete-product" data-id="${id}">X</span>
        `;

        containerBuyCart.appendChild(row); // Añadir el producto al contenedor

        priceTotal.innerHTML = totalCard; // Actualizar el total del carrito

        amountProduct.innerHTML = countProduct; // Actualizar el contador de productos
    });
}

function clearHtml() {
    // Limpiar el contenido HTML del contenedor del carrito
    containerBuyCart.innerHTML = '';
}

// Previene el comportamiento predeterminado del enlace
document.getElementById("miEnlace").addEventListener("click", function(event) {
    event.preventDefault(); // Evita que el enlace cargue la URL
    // Tu lógica personalizada aquí
});
