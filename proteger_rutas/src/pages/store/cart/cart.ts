import {
    obtenerCarrito, 
    obtenerTotalCarrito, 
} from "../../client/home/clientCarrito"

const contenerdor = document.querySelector("#contenedor-carrito") as HTMLDivElement;

const total =  document.querySelector("#total") as HTMLParagraphElement;
const carrito = obtenerCarrito()

if(contenerdor){
    carrito.forEach(producto => {
        contenerdor.innerHTML += `
        <div>
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <p>Cantidad: ${producto.cantidad}</p>
        </div>
        `
    });
    if(total){
        total.textContent = `Total: $${obtenerTotalCarrito()}`;
    }
}