import type { Categoria } from "./categoria";
export interface Product {
    id: number;
    nombre: string;
    precio: number;
    categoria: Categoria;
}