import axios from "axios";

export const apiNews = axios.create({
    baseURL: `https://blog-fake-api.onrender.com`,
    timeout: 8000,
})

export const apiFruit = axios.create({
    baseURL: `https://fruit-fake-api.onrender.com`,
    timeout: 8000,
})