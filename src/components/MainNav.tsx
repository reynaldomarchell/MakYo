import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function MainNav() {
  return (
    <nav className="font-magra flex w-screen items-center justify-between bg-[#040312] px-8 py-6 text-white md:px-10">
      <Image src="/assets/logo.png" alt="MakYo" width={100} height={100} />
      <ul className="hidden items-center md:flex">
        <li className="border-r px-3">
          <Link href="#" className="transition-colors hover:text-blue-500">
            HOME
          </Link>
        </li>
        <li className="border-r px-3">
          <Link href="#" className="transition-colors hover:text-blue-500">
            ORDER
          </Link>
        </li>
        <li className="px-3">
          <Link href="#" className="transition-colors hover:text-blue-500">
            Testimonial
          </Link>
        </li>
      </ul>

      <button className="group space-y-1 md:hidden">
        <Menu color="#ffffff" />
        <ul className="absolute -top-full right-0 flex w-screen flex-col justify-end space-y-3 bg-[#1c1b29] p-5 duration-150 group-focus:top-0">
          {/* <button className="relative ml-auto px-10 py-8">
            <X color="#ffffff" />
          </button> */}
          <li className="flex w-full justify-center py-4 hover:bg-[#35334b]">
            <Link href="#">HOME</Link>
          </li>
          <li className="flex w-full justify-center py-4 hover:bg-[#35334b]">
            <Link href="#">ORDER</Link>
          </li>
          <li className="flex w-full justify-center py-4 hover:bg-[#35334b]">
            <Link href="#">Testimonial</Link>
          </li>
        </ul>
      </button>
    </nav>
  );
}
