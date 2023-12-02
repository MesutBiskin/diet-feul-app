import React from 'react'
import Title from 'components/ui/title'
import Input from '/components/form/input'




const Login = () => {
  // const { values, errors, touched, handleSubmit, handleChange, handleBlur} =
  // useFormik({
  //   initialValues: {
  //     email: '',
  //     password: '',
  //   },
  //   onsubmit,
  //   validationSchema: reservationSchema,
  // });

  // const inputs = [ 
  //   {
  //     id: 1,
  //     name :"email",
  //     type : "email",
  //     placeholder :"Your email Address",
  //     value : values.email,
  //     errorMessage : errors.email,
  //     touched: touched.email,
  //   },
  //   {
  //     id: 2,
  //     name :"password",
  //     type : "password",
  //     placeholder :"Your Password",
  //     value : values.password,
  //     errorMessage : errors.password,
  //     touched: touched.password,
  //   },
  // ];
  return (
   
    <div className='container mx-auto'>
      <div className='text-black flex flex-col items-center my-20 w-1/2 mx-auto'>
        <Title addClass="text-[40px] mb-6">Login</Title>
      <div1 className='flex flex-col gap-y-2 w-full'>
    
      <Input/>
      <Input />
    
    <button className='btn-primary'>Login</button>
    </div1>
    </div>
    </div>
  )
}

 export default Login




