import type { Product } from "../types/product";

export const products: Product[] = [
// HAMBURGUESAS

    {
        id: 1,
        nombre: "Hamburguesa Clásica",
        precio: 8500,
        categoria: "hamburguesa",
        imagen: "/img/burger-clasica.jpg"
    },

    {
        id: 2,
        nombre: "Hamburguesa Doble Queso",
        precio: 11000,
        categoria: "hamburguesa",
        imagen: "/img/burguer-doble-queso.jpg"
    },

    {
        id: 3,
        nombre: "Hamburguesa Bacon",
        precio: 12000,
        categoria: "hamburguesa",
        imagen: "/img/burguer-bacon.jpg"
    },

    {
        id: 4,
        nombre: "Hamburguesa BBQ",
        precio: 12500,
        categoria: "hamburguesa",
        imagen: "/img/burger-bbq.jpg"
    },

    // PIZZAS

    {
        id: 5,
        nombre: "Pizza Muzzarella",
        precio: 10000,
        categoria: "pizza",
        imagen: "/img/pizza-muzzarella.jpg"
    },

    {
        id: 6,
        nombre: "Pizza Napolitana",
        precio: 11500,
        categoria: "pizza",
        imagen: "/img/pizza-napolitana.jpg"
    },

    {
        id: 7,
        nombre: "Pizza Especial",
        precio: 13500,
        categoria: "pizza",
        imagen: "/img/pizza-especial.jpg"
    },

    {
        id: 8,
        nombre: "Pizza Pepperoni",
        precio: 14000,
        categoria: "pizza",
        imagen: "/img/pizza-peperoni.jpg"
    },

    // POSTRES

    {
        id: 9,
        nombre: "Helado",
        precio: 4000,
        categoria: "postre",
        imagen: "/img/helado.jpg"
    },

    {
        id: 10,
        nombre: "Brownie",
        precio: 5000,
        categoria: "postre",
        imagen: "/img/brownie.jpg"
    },

    {
        id: 12,
        nombre: "Flan Casero",
        precio: 4500,
        categoria: "postre",
        imagen: "/img/flan-casero.jpg"
    },

    // BEBIDAS

    {
        id: 13,
        nombre: "Coca Cola",
        precio: 3000,
        categoria: "bebida",
        imagen: "/img/coca-cola.jpg"
    },

    {
        id: 14,
        nombre: "Sprite",
        precio: 3000,
        categoria: "bebida",
        imagen: "/img/sprite.jpg"
    },

    {
        id: 15,
        nombre: "Agua Mineral",
        precio: 2500,
        categoria: "bebida",
        imagen: "/img/agua-mineral.jpg"
    },

    {
        id: 16,
        nombre: "Jugo de Naranja",
        precio: 3500,
        categoria: "bebida",
        imagen:"/img/jugo-naranja.jpg"
    },
];