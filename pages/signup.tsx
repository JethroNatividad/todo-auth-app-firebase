import React from 'react'
import type { NextPage } from 'next'
import { Formik } from 'formik'

type InitialValues = {
  username:string
  email:string
  password: string
}

const Signup:NextPage = () => {
  const initialValues: InitialValues = {username:'', email:'', password:''}
  return (
    <div>

    <div className='text-center mb-2 text-xl uppercase font-semibold'>signup</div>
    <Formik initialValues={initialValues} onSubmit={(values, {setFieldValue})=> {
      console.log(values)
    }}>
    {({
         values,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form className='max-w-xl px-1 mx-auto flex flex-col space-y-2' onSubmit={handleSubmit}>
           <input
           className='outline-none border-2 border-black px-3 py-2 rounded-xl'
             type="username"
             name="username"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.username}
             placeholder='Username'
           />
           <input
           className='outline-none border-2 border-black px-3 py-2 rounded-xl'
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
             placeholder='Email'
           />
          
           <input
           className='outline-none border-2 border-black px-3 py-2 rounded-xl'
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
             placeholder='Password'
           />
           
           <button className='bg-black text-white px-3 py-2 rounded-xl' type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
    </Formik>
    </div>
  )
}

export default Signup