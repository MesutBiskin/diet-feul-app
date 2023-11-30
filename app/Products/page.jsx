import React from 'react'
import Image from 'next/image'
import Title from '@/components/ui/Title'

const  index = () =>  {
  return (
    <div className='flex items-center h-screen gap-20'>
   <div className='relative flex-1 w-[80%] h-[80%]'>
   
   </div>
   
   <div>
    <Title addClass="text-3xl">Healty Food Option 1</Title>
    <span className='text-primary text-2xl font-bold underline-offset-0'>$10</span>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Tenetur debitis nobis voluptas sed eligendi odio ducimus quia at inventore fugit provident, 
         aperiam reiciendis deserunt iure? Aut inventore vel aliquam reprehenderit.
         </p>
         <div> 
         <h4 className='text-xl font-bold'>Choose the size</h4>
         <div className='flex items-center gap-x-20'>
          <div className='relative'>
    <Image src="/images/1200calorie.jpg" alt='' 
    layout='fill'/>
    <span className='absolute top-0 right-6
    text-xs bg-primary rounded-b-full px-[5px] font-medium'>Small</span>
        </div>
        <div className='relative'>
    <Image src="/images/1200calorie.jpg" alt='' 
    layout='fill'/>
      <span className='absolute top-0 right-6
    text-xs bg-primary rounded-b-full px-[5px] font-medium'>Medium</span>
        </div>
        <div className='relative'>
    <Image src="/images/1200calorie.jpg" alt='' 
    layout='fill'/>
      <span className='absolute top-0 right-6
    text-xs bg-primary rounded-b-full px-[5px] font-medium'>Large</span>
    </div>
        </div>
       </div>
       <div>
        <label className='flex items-center gap-x-1'>
          <input type='checkbox' className='w-5 h-5 accent-primary'/>
        <span className='text-sm'> </span>
        </label>
        <div>
          <button className='btn-primary mt-6'>ADD to Cart</button>
        </div>
       </div>
    </div>
  </div>
  )
}

export default index
