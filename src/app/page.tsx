import Benefit from "@/components/Benefit";
import Hero from "@/components/Hero";
import MainNav from "@/components/MainNav";

export default function Home() {
  return (
    <div className="h-screen w-full">
      <MainNav />
      <Hero />
      <Benefit />
    </div>
  );
}
