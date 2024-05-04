import Image from "next/image";

type ProductType = {
  id: number;
  title: string;
  price: string;
  image: string;
};

const productItems = [
  {
    title: "Baju",
    price: "Rp 50.000",
    image: "/assets/benefit1.png",
  },
  {
    title: "Baju",
    price: "Rp 50.000",
    image: "/assets/benefit2.png",
  },
  {
    title: "Baju",
    price: "Rp 50.000",
    image: "/assets/benefit3.png",
  },
  {
    title: "Baju",
    price: "Rp 50.000",
    image: "/assets/benefit4.png",
  },
];

export default function Product() {
  return (
    <div className="flex w-screen flex-col items-center justify-center gap-4 bg-white px-8 py-5 text-black md:px-10">
      <h2 className="font-lexend_deca text-2xl font-semibold md:text-4xl">
        See Our Product
      </h2>
      <div className="flex flex-col md:flex-row md:items-center md:justify-center">
        {productItems.map((item: any, index: number) => (
          <div
            key={index}
            className="font-magra m-2 flex min-h-72 
            w-52 flex-col items-center justify-between rounded-lg border-4 border-[#28BE46] bg-white shadow-lg transition-all hover:-translate-y-1"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={231}
              height={189}
              className="overflow-hidden rounded-t-lg object-cover"
            />
            <div className="flex flex-col items-center justify-center gap-2 px-2 pb-8 text-xl font-bold">
              <h3>{item.title}</h3>
              <p className="text-center">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
