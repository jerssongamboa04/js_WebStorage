

const carrito = document.querySelector('#comprados');
const pokeStorage = JSON.parse(localStorage.getItem("pokeStorage"));

if (!pokeStorage) {
    const mensaje = document.createElement('p');
    mensaje.classList.add('divMenor')
    mensaje.innerHTML = "Carrito vacío...";
    mensaje.classList.add('delete');
    carrito.append(mensaje);
} else {
    actualizarCarrito();
}

// Actualizar el carrito cuando se cargue la página o cambie el almacenamiento local
function actualizarCarrito() {
    // Obtener los datos del producto del almacenamiento local
    const pokeStorage = JSON.parse(localStorage.getItem("pokeStorage"));

    // Crear un nuevo div para el producto comprado
    const nuevoDiv = document.createElement('div');
    nuevoDiv.classList.add('divMenor');

    const imagen = document.createElement("img");
    imagen.src = pokeStorage.imgPoke;

    const numero = document.createElement('span');
    numero.innerHTML = pokeStorage.numeroPoke;

    const nombre = document.createElement('h4');
    nombre.style.color = "white";
    nombre.innerHTML = pokeStorage.nombrePoke;

    const boton = document.createElement("input")
    boton.classList.add('btn-delete')
    boton.type = 'submit';
    boton.value = 'eliminar';
    boton.style.borderRadius = "8px"
    boton.style.background = "red"
    boton.style.color = "white"
    boton.style.fontSize = "20px"

    // Agregar evento para eliminar el producto del carrito y el almacenamiento local
    boton.addEventListener('click', function() {
        localStorage.removeItem('pokeStorage');
        nuevoDiv.remove();
        if (carrito.children.length === 0) {
            const mensaje = document.createElement('p');
            mensaje.classList.add('divMenor')
            mensaje.innerHTML = "Carrito vacío...";
            mensaje.classList.add('delete');
            carrito.append(mensaje);
        }
    });

    // Agregar elementos al nuevo div del producto
    nuevoDiv.append(numero, nombre, imagen, boton);

    // Reemplazar el contenido anterior del carrito con el nuevo div del producto
    if (carrito.querySelector('.delete')) {
        const mensaje = carrito.querySelector('.delete');
        mensaje.remove();
    }
    carrito.append(nuevoDiv);
}

// Actualizar el carrito cuando los datos en el almacenamiento local cambien
window.addEventListener('storage', function (e) {
    actualizarCarrito();
});
