import Image from "next/image";
//import Header from "../components/layout/Header";
import Home from "./Home/page";
//import Footer from "../components/layout/Footer";
import Carousel from "@/components/Carousel";
import MenuWrapper from "@/components/product/MenuWrapper";
import About from "./About/page";
import Reservation from "@/components/Reservation";




export default function Index() {

  return (
    <div>
      {/*<Header/>*/}
      <Home />
     <Carousel/>
     <MenuWrapper/>
     <About />
     <Reservation/>
     {/*<Footer/>*/}
      
    </div>
  );
}
