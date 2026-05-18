import type {Product} from "../../../types/product";
import type{ProductoCarrito} from "../../../types/productoCarrito" ;

import {guardarDatos, obtenerDatos} from "../../../utils/localStorage";

const carritoKey = "carrito";

export const agregarAlCarrito = (): ProductoCarrito[] =>{
    return(obtenerDatos<ProductoCarrito[]>(carritoKey) || [])
}

export const agregarProductoAlCarrito = (producto: Product): void => {
    const carrito = agregarAlCarrito();
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
    const carrito = agregarAlCarrito();
    return carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);
}