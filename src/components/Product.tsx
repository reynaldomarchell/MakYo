"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getProducts } from "@/server/actions";
import { useQuery } from "@tanstack/react-query";

type ProductType = {
  id: number;
  title: string;
  price: string;
  thumbnail: string;
};

export default function Product() {
  // const [productItems, setProductItems] = useState<ProductType[]>([]);

  // useEffect(() => {
  //   getProducts().then((data) => {
  //     setProductItems(data.products);
  //   });
  // }, []);

  const { data, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (error) {
    console.error(error.message);
    return (
      <h2 className="p-4 text-white">{`${error.name}: ${error.message}`}</h2>
    );
  }

  return (
    <div className="flex w-screen flex-col items-center justify-center gap-4 bg-white px-8 py-5 text-black md:px-10">
      <h2 className="font-lexend_deca text-2xl font-semibold md:text-4xl">
        See Our Product
      </h2>
      <div className="flex flex-col md:flex-row md:items-center md:justify-center">
        {data.products.map((item: ProductType, index: number) => (
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
