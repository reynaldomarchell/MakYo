"use server";

import axios from "axios";

export async function getProducts() {
  try {
    const response = await axios.get(
      "https://dummyjson.com/products?limit=4&select=title,price,thumbnail",
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}
