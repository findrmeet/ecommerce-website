import CategoryBar from "@/components/shared/CategoryBar/CategoryBar";
import Navbar from "@/components/shared/Navbar/Navbar";
import Hero from "./Hero";
import AllCategories from "@/components/ui/AllCategories/AllCategories";
import OurTopSellingProducts from "@/components/ui/Cards/OurTopSellingProducts/OurTopSellingProducts";
import Footer from "@/components/shared/Footer/Footer";
import NewsLetter from "@/components/shared/NewsLetter/NewsLetter";
import ProductShowcase from "./ProductShowcase";

const Home = () => {
  return (
    <>
      <div className="container max-w-[1320px] mx-auto">
        <Navbar />
        <CategoryBar />
        <Hero />
        <div className="py-5">
          <AllCategories />
          {/* <div>
        <OurTopSellingProducts />
        </div> */}
          <ProductShowcase />
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
