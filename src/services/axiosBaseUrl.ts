import axios from "axios";

export const USUARIO = axios.create({
    baseURL: process.env.PUBLIC_USER
});