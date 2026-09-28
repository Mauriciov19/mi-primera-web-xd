console.log("Hola desde javascript");

const nombre = "Mauricio";
console.log("Hola, " + nombre);

const boton = document.querySelector("#boton");
const titulo = document.querySelector("h1");

boton.addEventListener("click", function () {
    titulo.textContent = "hola gente";
    titulo.style.color = "red";
});

let cuenta = 0;
const numero = document.querySelector("#contador");
const botonSumar = document.querySelector("#sumar");
const botonReiniciar = document.querySelector("#reiniciar");
const entrada = document.querySelector("#entrada");
const botonAgregar = document.querySelector("#agregar");
const lista = document.querySelector("#lista");






botonSumar.addEventListener("click", function () {
    cuenta = cuenta + 1;
    numero.textContent = cuenta;
    if (cuenta === 7) {
        titulo.textContent = "calma pa ya picaste mucho";
    }
});

botonReiniciar.addEventListener("click", function () {
    cuenta = 0;
    numero.textContent = cuenta;
    titulo.textContent = "Hola, soy mauricio";
});

botonAgregar.addEventListener("click", function () {
    const texto = entrada.value;
    if (texto === "") {
        alert("Por favor ingresa un texto");
        return;
    }
    const nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = texto;
    nuevaTarea.addEventListener("click", function () {
        nuevaTarea.classList.toggle("hecha");
    });
    nuevaTarea.addEventListener("dblclick", function () {
        lista.removeChild(nuevaTarea);
    });
    lista.appendChild(nuevaTarea);
    entrada.value = "";
});