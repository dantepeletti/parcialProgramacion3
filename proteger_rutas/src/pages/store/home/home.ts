import { products } from "../../../data/data";
import type { Product } from "../../../types/product";
import {agregarProductoAlCarrito} from "../../client/home/clientCarrito";
import { renderHeader } from "../../../components/header";

document.body.insertAdjacentHTML(
    "afterbegin",
    renderHeader("Tienda")
);

const contenedorProductos = document.querySelector(
    "#contenedor-productos"
) as HTMLDivElement;

const buscador = document.querySelector(
    "#buscador"
) as HTMLInputElement;

const filtroCategoria = document.querySelector(
    "#filtro-categoria"
) as HTMLSelectElement;

const renderizarProductos = (
    listaProductos: Product[]
): void => {
    contenedorProductos.innerHTML = "";

    listaProductos.forEach(producto => {
        contenedorProductos.innerHTML += `
        <div class="card-producto">
            <h3>${producto.nombre}</h3>
            <img 
                src="${producto.imagen}"
                alt="${producto.nombre}"
            >
            <p>
                Precio: $${producto.precio}
            </p>
            <button
                data-id="${producto.id}"
            >
                Agregar al carrito
            </button>

        </div>
        `;
    });

    const botones = document.querySelectorAll("button");
    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            const id = Number(
                boton.getAttribute("data-id")
            );
            const producto = products.find(
                item => item.id === id
            );
            if(producto){
                agregarProductoAlCarrito(producto);
                alert(
                    `Producto ${producto.nombre} agregado al carrito`
                );
            }
        });
    });
};
renderizarProductos(products);

buscador.addEventListener("input", () => {

    const texto = buscador.value.toLowerCase();

    const productosFiltrados = products.filter(
        producto =>
            producto.nombre
                .toLowerCase()
                .includes(texto)
    );
    renderizarProductos(productosFiltrados);
});

filtroCategoria.addEventListener("change", () => {

    const categoriaSeleccionada =
        filtroCategoria.value;

    if(categoriaSeleccionada === "todos"){
        renderizarProductos(products);
        return;
    }

    const productosFiltrados = products.filter(
        producto =>
            producto.categoria === categoriaSeleccionada
    );

    renderizarProductos(productosFiltrados);
});