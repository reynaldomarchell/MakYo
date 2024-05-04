import Image from "next/image";

export default function MainFooter() {
  return (
    <div className="flex w-screen flex-col items-center justify-center py-3 text-white">
      <div className="flex gap-4 py-4 md:gap-5">
        <Image
          src="/assets/instagram.png"
          alt="instagram"
          width={66}
          height={67}
          className="w-10 cursor-pointer shadow-lg transition-all hover:-translate-y-1"
        />
        <Image
          src="/assets/youtube.png"
          alt="youtube"
          width={74}
          height={73}
          className="w-10 cursor-pointer shadow-lg transition-all hover:-translate-y-1"
        />
        <Image
          src="/assets/whatsapp.png"
          alt="whatsapp"
          width={66}
          height={67}
          className="w-10 cursor-pointer shadow-lg transition-all hover:-translate-y-1"
        />
      </div>
      <div className="flex w-full justify-center bg-[#000000] py-4">
        <p className="font-mulish text-xs">
          Copyright 2024 MakYo. All Rights Reserved
        </p>
      </div>
    </div>
  );
}
