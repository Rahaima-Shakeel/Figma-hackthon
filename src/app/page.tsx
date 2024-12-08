import Header from "./components/Header";
import Hero from "./components/Hero";
import BrandDifferentiators from "./components/BrandDifferentiators";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import SignUP from "./components/SignUP";
import About from "./components/About";
import PopularProducts from "./components/PopularProduct";


export default function Home() {
  return (
   <div>
    <Header/>
    <Hero/>
    <BrandDifferentiators/>
    <ProductList/>
    <PopularProducts/>
    <SignUP/>
    <About/>
    <Footer/>
   </div>
  );
}
