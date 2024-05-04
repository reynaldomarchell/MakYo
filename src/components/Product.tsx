"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

type ProductType = {
  id: number;
  title: string;
  price: string;
  thumbnail: string;
};

// const productItems = [
//   {
//     title: "Baju",
//     price: "Rp 50.000",
//     thumbnail: "/assets/benefit1.png",
//   },
//   {
//     title: "Baju",
//     price: "Rp 50.000",
//     thumbnail: "/assets/benefit2.png",
//   },
//   {
//     title: "Baju",
//     price: "Rp 50.000",
//     thumbnail: "/assets/benefit3.png",
//   },
//   {
//     title: "Baju",
//     price: "Rp 50.000",
//     thumbnail: "/assets/benefit4.png",
//   },
// ];

async function getProduct() {
  const response = await axios.get(
    "https://dummyjson.com/products?limit=4&select=title,price,thumbnail",
  );
  const data = await response.data;
  return data;
}

export default function Product() {
  const [productItems, setProductItems] = useState<ProductType[]>([]);

  useEffect(() => {
    getProduct().then((data) => {
      setProductItems(data.products);
    });
  }, []);

  return (
    <div className="flex w-screen flex-col items-center justify-center gap-4 bg-white px-8 py-5 text-black md:px-10">
      <h2 className="font-lexend_deca text-2xl font-semibold md:text-4xl">
        See Our Product
      </h2>
      <div className="flex flex-col md:flex-row md:items-center md:justify-center">
        {productItems.map((item: ProductType, index: number) => (
          <div
            key={index}
            className="font-magra m-2 flex min-h-72 
            w-52 flex-col items-center justify-between overflow-hidden rounded-lg border-4 border-[#28BE46] bg-white shadow-lg transition-all hover:-translate-y-1 "
          >
            <Image
              src={item.thumbnail}
              alt={item.title}
              width={231}
              height={189}
              className="h-36 w-72"
            />
            <div className="flex flex-col items-center justify-center gap-2 px-2 pb-8 text-xl font-bold">
              <h3>{item.title}</h3>
              <p className="text-center">$ {item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
