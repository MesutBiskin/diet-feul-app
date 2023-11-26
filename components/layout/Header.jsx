"use client"
import { useState } from "react"
import Logo from "components/ui/Logo"
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa"
import OutsideClickHandler from "react-outside-click-handler"


function Header  (){
  const[isSearchModal, setIsSearchModal] = useState(true) // setISSearchModal true ise onu degistirmeye yariyor.
                                                        // yazdiracagimiz yerlerde isSearchModal i kullaniyoruz degisecek yerde setIsSearchModal
  return (
    <div className="h-[5.5rem] bg-secondary  ">
     <div className="conatine mx-auto text-white flex
    justify-between items-center h-full">
      <div>
      <Logo />
      </div>
      <nav>
        <ul className="flex gap-x-2">
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
            <a href="">Book Table</a>
          </li>
        </ul>
      </nav>
      <div className="flex gap-x-4 items-center">
    <a href="#" >
    <FaUserAlt className="hover:text-primary" />   
    </a>

    <a href="#" >
    <FaShoppingCart className="hover:text-primary"/>  
    </a>

    <button onClick={()=> setIsSearchModal(false)}>
    <FaSearch className="hover:text-primary"/>  
    </button>
    <a href="#">
      <button className="btn-primary">Order Online
      </button>
    </a>
      </div>
      </div> 
      {isSearchModal && (
        <OutsideClickHandler onOutsideClick={()=> setIsSearchModal(false)}>
          <div className="text-9xl">Modal</div>
        </OutsideClickHandler>
      )}
      
    </div>
  )
}

export default Header
