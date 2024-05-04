import Benefit from "@/components/Benefit";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import MainNav from "@/components/MainNav";
import Product from "@/components/Product";

export default function Home() {
  return (
    <div className="h-screen w-full bg-[#040312]">
      <MainNav />
      <Hero />
      <Benefit />
      <Product />
      <Contact />
    </div>
  );
}
