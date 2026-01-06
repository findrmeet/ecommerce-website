import Hero from "./Hero";
import AllCategories from "@/components/ui/AllCategories/AllCategories";
import OurTopSellingProducts from "@/components/ui/OurTopSellingProducts/OurTopSellingProducts";
import ProductShowcase from "./ProductShowcase";
import ProductGrid from "./ProductGrid";
import BlogSection from "@/components/ui/BlogSection/BlogSection";
import OurFutureProducts from "@/components/ui/OurFutureProducts/OurFutureProducts";
import Testimonials from "@/components/ui/Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <AllCategories />
      <OurTopSellingProducts />
      <OurFutureProducts />
      <BlogSection />
      <Testimonials />
      <ProductShowcase />
      <ProductGrid />
    </>
  );
};

export default Home;
