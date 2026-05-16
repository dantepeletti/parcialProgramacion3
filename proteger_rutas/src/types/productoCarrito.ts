import type { Product } from "./product";

export interface ProductoCarrito extends Product {
    cantidad: number;
}