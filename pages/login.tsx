import React from 'react'
import type { NextPage } from 'next'
import { Formik } from 'formik'
import { sign } from 'crypto'
import { login } from '../lib/auth'
import { useRouter } from 'next/router'

type InitialValues = {
  email:string
  password: string
}

const Login:NextPage = () => {
  const router = useRouter()
  const initialValues: InitialValues = {email:'', password:''}
  return (
    <div>

    <div className='text-center mb-2 text-xl uppercase font-semibold'>login</div>
    <Formik initialValues={initialValues} onSubmit={async (values, {setFieldValue, setSubmitting})=> {
      console.log(values)
      setSubmitting(true)
      const [error, data] = await login(values.email,values.password)
      setSubmitting(false)
      if(error) return alert(error)
      router.push('/')
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

export default Login