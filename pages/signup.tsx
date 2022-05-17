import React, { useEffect } from 'react'
import type { NextPage } from 'next'
import { Formik } from 'formik'
import { signup } from '../lib/auth'
import { useRouter } from 'next/router'
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from '../lib/firebase'

type InitialValues = {
  username:string
  email:string
  password: string
}

const Signup:NextPage = () => {
  const router = useRouter()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user) return router.push('/')
    })
    return () => {
      unsubscribe()
    }
  }, [])
  const initialValues: InitialValues = {username:'', email:'', password:''}
  return (
    <div>

    <div className='text-center mb-2 text-xl uppercase font-semibold'>signup</div>
    <Formik initialValues={initialValues} onSubmit={async (values, {setFieldValue, setSubmitting})=> {
      console.log(values)
      setSubmitting(true)
      const [error, data] = await signup(values.username, values.email, values.password)
      setSubmitting(false)
      if(error) return alert (error)
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
           <button onClick={()=>router.push('/login')} className='bg-black text-white px-3 py-2 rounded-xl' type="button" disabled={isSubmitting}>
             Login
           </button>
         </form>
       )}
    </Formik>
    </div>
  )
}

export default Signup