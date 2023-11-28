"use client"
import { useState } from "react"
import Logo from "components/ui/Logo"
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa"
import Search from "../ui/Search"
import { GiHotMeal } from "react-icons/gi";


function Header() {
  const [isSearchModal, setIsSearchModal] = useState(false) // setISSearchModal true ise onu degistirmeye yariyor.
  // yazdiracagimiz yerlerde isSearchModal i kullaniyoruz degisecek yerde setIsSearchModal
  const [isMenuModal, setIsMenuModal] = useState(false) 
  
  return (
    <div className="h-[5.5rem] bg-secondary  ">
      <div className="container mx-auto text-white flex
    justify-between items-center h-full">
        
          <Logo />
        
        <nav className={`sm:static absolute top-0 left-0 grid 
        place-content-center sm:w-auto sm:h-auto
         sm:text-white text-black sm:bg-transparent bg-white ${
          isMenuModal != true && "hidden"
        }`}
       >
          <ul className="flex gap-x-2 sm:flex-row flex-col items-center">
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <a href="">Home</a>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <a href="">Menu</a>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <a href="">About</a>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <a href="">Calori Calculator</a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-x-4 items-center">
          <a href="#" >
            <FaUserAlt className="hover:text-primary" />   
          </a>

          <a href="#" >
            <FaShoppingCart className="hover:text-primary" />
          </a>
          <button onClick={() => setIsSearchModal(true)}>
            <FaSearch className="hover:text-primary" />
          </button>
          <a href="#" className="md:inline-block hidden sm">
            <button className="btn-primary">Order Online</button>
            </a>
            <button className="sm:hidden inline-block" 
            onClick={()=> setIsMenuModal(true)}>
        <GiHotMeal className="text-xl hover:text-primary"/>
          </button> 
        </div>
      </div>
      {isSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
    </div>
  );
};

export default Header
