import React from 'react'
import Image from 'next/image'
//import Slider from 'react-slick'

const Carousel = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows : false,
  //   autoplay : true,
  //   autoplaySpeed: 3500,
  //   appenDots: (dots) => {
  //     <div style={{color:"yellow"}}></div>
  //   },
  //   customPaging: (i) => {
  //     <div className='w-3 h-3 border bg-white rounded-full mt-10'></div>
  //   }
  // };
  return (
    <div className="h-screen relative">
    <Image src="/images/bg4salmon.jpg"
    alt="" 
    layout="fill"
    objectFit='cover'
    className='salmon'
    /> 
      <div>
       {/* <Slider {...settings}></Slider>*/}

        
      </div>
      </div>
  )
}

export default Carousel
