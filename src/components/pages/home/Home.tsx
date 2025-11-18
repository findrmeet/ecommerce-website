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
      <div className="container max-w-[1320px] mx-auto">
        <Navbar />
        <CategoryBar />
        <Hero />
        <div className="py-5">
          <AllCategories />
          <div className="pb-5">
            <OurTopSellingProducts />
            <OurFutureProducts />
          </div>
          <BlogSection />
          <Testimonials />
          <ProductShowcase />
          <ProductGrid />
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
