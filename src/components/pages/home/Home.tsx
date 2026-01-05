import CategoryBar from "@/components/shared/CategoryBar/CategoryBar";
import Navbar from "@/components/shared/Navbar/Navbar";
import Hero from "./Hero";
import AllCategories from "@/components/ui/AllCategories/AllCategories";
import OurTopSellingProducts from "@/components/ui/OurTopSellingProducts/OurTopSellingProducts";
import Footer from "@/components/shared/Footer/Footer";
import NewsLetter from "@/components/shared/NewsLetter/NewsLetter";
import ProductShowcase from "./ProductShowcase";
import ProductGrid from "./ProductGrid";
import BlogSection from "@/components/ui/BlogSection/BlogSection";
import OurFutureProducts from "@/components/ui/OurFutureProducts/OurFutureProducts";
import Testimonials from "@/components/ui/Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <CategoryBar />
      <Hero />
      <AllCategories />
      <OurTopSellingProducts />
      <OurFutureProducts />
      <BlogSection />
      <Testimonials />
      <ProductShowcase />
      <ProductGrid />
      <NewsLetter />
    </>
  );
};

export default Home;
