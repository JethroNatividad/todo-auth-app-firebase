import { onAuthStateChanged } from 'firebase/auth'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { UserData } from '../lib/db'
import { auth } from '../lib/firebase'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [user, setUser] = useState<UserData>()
  const [loadingUser, setLoadingUser] = useState<boolean>(true)
  const router = useRouter()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user)=> {
      if(!user) return router.push('/login')
      
    })
  
    return () => {
      
    }
  }, [])
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='text-red-600'>Hello world</div>
      </div>
  )}

export default Home