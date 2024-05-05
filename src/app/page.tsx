import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getProducts } from "@/server/actions";

import Benefit from "@/components/Benefit";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import MainFooter from "@/components/MainFooter";
import MainNav from "@/components/MainNav";
import Product from "@/components/Product";

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return (
    <div className="h-full w-full bg-[#201F2C]">
      <MainNav />
      <Hero />
      <Benefit />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Product />
      </HydrationBoundary>
      <Contact />
      <MainFooter />
    </div>
  );
}
