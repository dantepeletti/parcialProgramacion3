import { checkAuhtUser, logout } from "../../../utils/auth";

const buttonLogout = document.getElementById(
  "logoutButton"
) as HTMLButtonElement;
buttonLogout?.addEventListener("click", () => {
  logout();
});


const initPage = () => {
  console.log("inicio de pagina");
  checkAuhtUser(
    "/src/pages/auth/login/login.html",
    "/src/pages/admin/home/home.html",
    "client"
  );
};
initPage();


import {products}from "../../../data/data";

import {agregarProductoAlCarrito} from "../home/clientCarrito";

const contadorCarrito = document.querySelector("#contenedor-carrito") as HTMLSpanElement;

if(contadorCarrito){
  products.forEach(producto => {
    contadorCarrito.innerHTML +=` 
    <div>
      <h3>${producto.nombre}</h3>
      <p>Precio: $${producto.precio}</p>
      <button id="agregar-${producto.id}">Agregar al carrito</button>
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