import type { IUser } from "../types/IUser";

export const saveUser = (user: IUser) => {
  const parseUser = JSON.stringify(user);
  localStorage.setItem("userData", parseUser);
};
export const getUSer = () => {
  return localStorage.getItem("userData");
};
export const removeUser = () => {
  localStorage.removeItem("userData");
};

export const guardarDatos = <T> (
  key: string,
  datos: T
): void => {
  localStorage.setItem(
    key,
    JSON.stringify(datos)
  )
}

export const obtenerDatos = <T>(
  key: string
): T | null => {
  const datos = localStorage.getItem(key);

  if (!datos) return null;
  
  return JSON.parse(datos);
}