import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex w-screen flex-col items-center justify-between gap-8 px-8 pb-20 pt-3 text-white md:flex-row-reverse md:px-10">
      <Image
        src="/assets/hero_image.png"
        alt="hero"
        width={618}
        height={854}
        className="w-80 md:w-96"
      />
      <div className="space-y-2">
        <h1 className="font-linden_hill text-3xl md:text-5xl">
          Best Quality E-Commerce in the World
        </h1>
        <p className="font-mulish pb-5 text-base md:pb-8 md:text-lg">
          Menyediakan berbagai macam barang yang anda butuhkan
        </p>
        <button className="noto-serif-tc-regular bg-[#1DC74D] px-5 py-2 transition-all hover:-translate-y-1 hover:bg-[#169d3c] hover:text-gray-200 md:px-6 md:py-2">
          ORDER NOW
        </button>
      </div>
    </div>
  );
}
