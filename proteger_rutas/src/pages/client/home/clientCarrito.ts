import type {Product} from "../../../types/product";
import type{ProductoCarrito} from "../../../types/productoCarrito" ;
import {guardarDatos, obtenerDatos} from "../../../utils/localStorage";

const carritoKey = "carrito";

export const obtenerCarrito = (): ProductoCarrito[] =>{
    return(obtenerDatos<ProductoCarrito[]>(carritoKey) || [])
}

export const agregarProductoAlCarrito = (producto: Product): void => {
    const carrito = obtenerCarrito();
    const productoExistente = carrito.find(
        item => item.id === producto.id
    );

    if (productoExistente) {
        productoExistente.cantidad += 1;
    }else {
        carrito.push({
            ...producto,
            cantidad: 1
        });
    }
    guardarDatos(carritoKey, carrito);
}

export const obtenerTotalCarrito = (): number => {
    const carrito = obtenerCarrito();
    return carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);
}

export const aumentarCantidad = (id: number): void => {

    const carrito = obtenerCarrito();

    const producto = carrito.find(
        item => item.id === id
    );

    if(producto){
        producto.cantidad += 1;
    }

    guardarDatos(carritoKey, carrito);
}

export const disminuirCantidad = (id: number): void => {

    let carrito = obtenerCarrito();

    const producto = carrito.find(
        item => item.id === id
    );

    if(producto){

        producto.cantidad -= 1;

        if(producto.cantidad <= 0){

            carrito = carrito.filter(
                item => item.id !== id
            );
        }
    }

    guardarDatos(carritoKey, carrito);
}

export const eliminarProducto = (id: number): void => {

    const carrito = obtenerCarrito().filter(
        item => item.id !== id
    );

    guardarDatos(carritoKey, carrito);
}

export const vaciarCarrito = (): void => {

    guardarDatos(carritoKey, []);
}