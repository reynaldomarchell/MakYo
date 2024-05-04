import Image from "next/image";
import Link from "next/link";

export default function MainNav() {
  return (
    <nav className="flex w-screen items-center justify-between bg-[#040312] px-5 py-6 text-white md:px-12">
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

      <button className="group group space-y-1 md:hidden">
        <div className="h-1 w-6 bg-white"></div>
        <div className="h-1 w-6 bg-white"></div>
        <div className="h-1 w-6 bg-white"></div>
        <ul className="absolute -top-full right-0 flex w-screen flex-col justify-end space-y-3 bg-[#040312] pb-10 duration-150 group-focus:top-0">
          <button className="relative ml-auto px-10 py-8">
            <div className="absolute h-1 w-6 rotate-45 bg-white"></div>
            <div className="absolute h-1 w-6 -rotate-45 bg-white"></div>
          </button>
          <li className="flex w-full justify-center py-4 hover:bg-[#1a192a]">
            <Link href="#">HOME</Link>
          </li>
          <li className="flex w-full justify-center py-4 hover:bg-[#1a192a]">
            <Link href="#">ORDER</Link>
          </li>
          <li className="flex w-full justify-center py-4 hover:bg-[#1a192a]">
            <Link href="#">Testimonial</Link>
          </li>
        </ul>
      </button>
    </nav>
  );
}
