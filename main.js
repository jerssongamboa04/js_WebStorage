

// =============================== Ejercicio 1 ===============================
// Introduce en `LocalStorage` 3 variables distintas (no en forma de objeto) con tu nombre, edad y ciudad de origen.

// let nombre = "Tu Nombre";
// let edad = 30;
// let ciudad = "Tu Ciudad";

// localStorage.setItem("nombre", nombre);
// localStorage.setItem("edad", edad);
// localStorage.setItem("ciudad", ciudad);


// // =============================== Ejercicio 2 ===============================
// En tu archivo JS, crea la variable counter y asígnale un valor de 5. Guárdala en LocalStorage.
// Muestra el contenido del LocalStorage en HTML.
// Ahora crea un botón que, cuando sea pulsado, aumente dicho contador en 1. El aumento se producirá en LocalStorage,
//  y el HTML debe reflejar el cambio leyendo de LocalStorage también. En ningún momento el botón cambiará directamente el contador de HTML.


// // creo la variable counter y la guardo al localStorage
// let counter = 5;

// localStorage.setItem("counter", counter);
// let valor = localStorage.getItem("counter");
// console.log(valor);

// // creo un <P> y le asigno el valor de mi variable counter , muestro en HTML
// let p = document.createElement('p');
// p.innerText = valor;
// p.style.fontSize = "50px"
// const body = document.querySelector('body')
// body.appendChild(p);

// // creo el input y lo muestro en html
// const submit = document.createElement('input');
// submit.type = 'submit';
// submit.value = 'sumar';
// body.appendChild(submit)
// console.log(submit);

// function aumentar2() {
//     // let text = document.querySelector("p");
//     let valor = localStorage.getItem("counter");
//     valor++;
//     localStorage.setItem("counter", valor);
//     p.innerText = valor;
// }
// submit.addEventListener("click", aumentar2)

// // =============================== Ejercicio 4 ===============================
// vamos a crear una web de compra-venta ilegal de pokemons. Se te proporcionará 
// un JSON con información sobre pokemons. Debes crear 2 páginas de HTML: index y cart.

// Pinta en index la información de cada pokemon en forma de card, y añádele un botón de comprar a cada card, como si fuera una tienda online.
// El botón debe guardar la información de cada pokemon en LocalStorage, como si fuera un carrito de la compra.
// La página cart debe mostrar aquellos pokemons que hayan sido guardados en el LocalStorage. Si no hubiera ninguno, deberá mostrar: "Carrito vacío...".
// Por último, en cart, añade a cada pokemon que esté en el carrito un botón para eliminarlo del mismo.

const pokemons = [
    { id: 1, name: 'bulbasaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
    { id: 2, name: 'ivysaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png' },
    { id: 3, name: 'venusaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png' },
    { id: 4, name: 'charmander', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
    { id: 5, name: 'charmeleon', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png' },
    { id: 6, name: 'charizard', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' },
    { id: 7, name: 'squirtle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' },
    { id: 8, name: 'wartortle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png' },
    { id: 9, name: 'blastoise', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png' },
    { id: 10, name: 'caterpie', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png' },
    { id: 11, name: 'metapod', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png' },
    { id: 12, name: 'butterfree', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png' },
    { id: 13, name: 'weedle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png' },
    { id: 14, name: 'kakuna', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png' },
    { id: 15, name: 'beedrill', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png' },
    { id: 16, name: 'pidgey', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png' },
    { id: 17, name: 'pidgeotto', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png' },
    { id: 18, name: 'pidgeot', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png' },
    { id: 19, name: 'rattata', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png' },
    { id: 20, name: 'raticate', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png' }
]

const section = document.querySelector("#SectionOne");
//console.log(section);

pokemons.forEach(pokemon => {
    const div = document.createElement("div");
    div.id = ('divPadre')
    div.classList.add('divMenor');


    const span = document.createElement("span");
    span.textContent = pokemon.id;
    span.id = pokemon.id

    div.appendChild(span);

    const h4 = document.createElement("h4");
    h4.style.color = "white"
    h4.textContent = pokemon.name;
    h4.style.fontSize = "25px"
    div.appendChild(h4);

    const img = document.createElement("img");
    img.id = ('img')
    img.src = pokemon.img;
    div.appendChild(img);

    const boton = document.createElement("input")
    boton.id = ('boton')
    boton.classList.add('btn-add')
    boton.type = 'submit';
    boton.value = 'Comprar';
    boton.style.borderRadius = "8px"
    boton.style.background = "green"
    boton.style.color = "white"
    boton.style.fontSize = "20px"
    div.appendChild(boton);

    const divMajor = document.createElement("div");
    section.appendChild(divMajor);
    divMajor.classList.add('divMajor');
    divMajor.appendChild(div);
});

// lista de todos los pokesmons
const productsList = document.querySelector('.SectionOne');
console.log(productsList);


productsList.addEventListener('click', e => {
    if (e.target.classList.contains('btn-add')) {
        const product = e.target.parentElement;
        let idComprado = product.querySelector('span').innerHTML;
        let nombreComprado = product.querySelector('h4').innerHTML;
        let imgComprado = product.querySelector('img').src;

        const pokeComprado = {
            numeroPoke: idComprado,
            nombrePoke: nombreComprado,
            imgPoke: imgComprado
        }
        localStorage.setItem("pokeStorage", JSON.stringify(pokeComprado));

        // console.log(poke);
    }
});





