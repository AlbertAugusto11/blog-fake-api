import axios from "axios";

export const apiNews = axios.create({
    baseURL: `https://blog-fake-api.onrender.com`,
    timeout: 20000,
})

export const apiFruit = axios.create({
    baseURL: `https://fruit-fake-api.onrender.com`,
    timeout: 20000,
})