import axios from "axios";
import WEB_ADDRES from "./Config";

const call = async (url) => await axios.get(WEB_ADDRES + url);

export const getProductsSorted = async () => await call("/products");
export const getProductsCategories = async () =>
  await call("/products/categories");
export const getProductsFiltered = async (category) =>
  await call(`/products/category/${category}`);
