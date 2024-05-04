import Image from "next/image";

type BenefitType = {
  title: string;
  desc: string;
  image: string;
};

const benefitItems = [
  {
    title: "order online",
    desc: "melakukan pesanan secara online tanpa harus datang",
    image: "/assets/benefit1.png",
  },
  {
    title: "online payment",
    desc: "pembayaran praktis melalui e-wallet atau transfer",
    image: "/assets/benefit2.png",
  },
  {
    title: "delivery",
    desc: "pengiriman cepat dan gratis untuk area jabodetabek",
    image: "/assets/benefit3.png",
  },
  {
    title: "real product",
    desc: "barang original dan sesuai dengan yang ada di katalog",
    image: "/assets/benefit4.png",
  },
];

export default function Benefit() {
  return (
    <div className="flex w-screen flex-col items-center justify-center gap-4 bg-white px-8 py-10 text-black md:px-10 md:pt-14">
      <h2 className="font-lexend_deca text-2xl font-semibold md:text-4xl">
        Why Choose Us?
      </h2>
      <div className="flex flex-col md:flex-row md:items-center md:justify-center">
        {benefitItems.map((item: BenefitType, index: number) => (
          <div
            key={index}
            className="m-2 flex min-h-64 w-52 flex-col items-center justify-between rounded-lg bg-white shadow-lg"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={231}
              height={189}
              className="object-cove overflow-hidden rounded-t-lg"
            />
            <div className="flex flex-col items-center justify-center gap-1 px-2 pb-3">
              <h3 className="font-lexend_deca text-lg">{item.title}</h3>
              <p className="text-center text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
