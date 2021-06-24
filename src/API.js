import axios from "axios";
import {WEB_ADDRES, WEB_URL, WEB_URL_V1} from "./Config";

const call = async (url) => await axios.get(WEB_ADDRES + url);

export const getProductsSorted = async () => await call("/products");
export const getProductsCategories = async () =>
  await call("/products/categories");
export const getProductsFiltered = async (category) =>
  await call(`/products/category/${category}`);


export const login = async (email,password) => {
    try {
        const results = await axios.post(WEB_URL + "login", {email, password});
        localStorage.setItem("user", JSON.stringify(results.data.data));
        localStorage.setItem("token", (results.data.data.token))
    } catch(error) {
        throw new Error(error);
    }
}

export const cart = async () => {
  try {
    const results = await axios.get(WEB_URL_V1 + "cart", {
      headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    });
  } catch(error) {
    if(error.response.status === 401) {
      localStorage.clear();
      window.location.href = "/login";
    }
  }
}