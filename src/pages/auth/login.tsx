import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './Login.module.scss'


export default function LoginPage() {
    const router = useRouter();
    function handleClick(){
        router.push('/product');
    }
  return (
    <div className={styles.login}>
        <h1 className='text-4xl font-bold'>LoginPage</h1>
        <button onClick={handleClick}>Login</button>
        <p>Belum punya akun klik <Link href={"/auth/register"}>disini</Link></p>
    </div>
  )
}
