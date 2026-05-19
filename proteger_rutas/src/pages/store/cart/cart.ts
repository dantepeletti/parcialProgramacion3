import {
    obtenerCarrito, 
    obtenerTotalCarrito, 
} from "../../client/home/clientCarrito"

import {
    aumentarCantidad,
    disminuirCantidad,
    eliminarProducto
} from "../../client/home/clientCarrito";

import { renderHeader } from "../../../components/header";
document.body.insertAdjacentHTML(
    "afterbegin",
    renderHeader("Carrito")
);


const contenerdor = document.querySelector("#contenedor-carrito") as HTMLDivElement;

const total =  document.querySelector("#total") as HTMLParagraphElement;
const carrito = obtenerCarrito()

if(contenerdor){
    carrito.forEach(producto => {
        contenerdor.innerHTML += `
        <div class="card-carrito">
            <h3>${producto.nombre}</h3>
            <img 
            src="../../../../public/img/pizza.jpg"
            alt="${producto.nombre}">
            <p>Precio: $${producto.precio}</p>
            <p>Cantidad: ${producto.cantidad}</p>
            <div class="acciones-carrito">
                <button class="btn-sumar" data-id="${producto.id}">
                    +1
                </button>
                <button class="btn-restar" data-id="${producto.id}">
                    -1
                </button>
                <button class="btn-eliminar" data-id="${producto.id}">
                    Eliminar
                </button>
            </div>
        </div>`
    });
    if(total){
        total.textContent = `Total: $${obtenerTotalCarrito()}`;
    }
    const botonesSumar = document.querySelectorAll(".btn-sumar");

    botonesSumar.forEach(boton => {
        boton.addEventListener("click", () => {
            const id = Number(
                boton.getAttribute("data-id")
            );
            aumentarCantidad(id);
            location.reload();
        });
    });

    const botonesRestar = document.querySelectorAll(".btn-restar");

    botonesRestar.forEach(boton => {
        boton.addEventListener("click", () => {
            const id = Number(
                boton.getAttribute("data-id")
            );
            disminuirCantidad(id);
            location.reload();
        });
    });

    const botonesEliminar = document.querySelectorAll(".btn-eliminar");
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", () => {
            const id = Number(
                boton.getAttribute("data-id")
            );
            eliminarProducto(id);
            location.reload();
        });
    });

}