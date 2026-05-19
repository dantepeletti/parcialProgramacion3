

import {products}from "../../../data/data";

import {agregarProductoAlCarrito} from "../../client/home/clientCarrito";

import { renderHeader } from "../../../components/header";

document.body.insertAdjacentHTML(
    "afterbegin",
    renderHeader("Tienda")
);

const contenedorProductos = document.querySelector("#contenedor-productos") as HTMLSpanElement;

if(contenedorProductos){
  products.forEach(producto => {
    contenedorProductos.innerHTML +=` 
    <div class="card-producto">
      <h3>${producto.nombre}</h3>
      <img 
      src="../../../../public/img/pizza.jpg"
      alt="${producto.nombre}">
      <p>Precio: $${producto.precio}</p>
      <button data-id="${producto.id}">Agregar al carrito</button>
    </div>`;
  });

  const botones = document.querySelectorAll("button")

  botones.forEach(boton => {
      boton.addEventListener("click", () => {
        const id = Number(boton.getAttribute("data-id"));

        const producto = products.find(item => item.id === id);

        if(producto){
          agregarProductoAlCarrito(producto);

          alert(`Producto ${producto.nombre} agregado al carrito!`);
        }
      })
    })
}