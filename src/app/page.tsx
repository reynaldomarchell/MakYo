import Benefit from "@/components/Benefit";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import MainFooter from "@/components/MainFooter";
import MainNav from "@/components/MainNav";
import Product from "@/components/Product";

export default function Home() {
  return (
    <div className="h-full w-full bg-[#201F2C]">
      <MainNav />
      <Hero />
      <Benefit />
      <Product />
      <Contact />
      <MainFooter />
    </div>
  );
}
