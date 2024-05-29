import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function ProductPage() {
    const [isLogin, setIsLogin] = useState(false)
    const router = useRouter();
    console.log(isLogin);
    useEffect(()=>{
        if (!isLogin) {
            router.push("/auth/login")
        }
    })
  return (
    <div>Product Page</div>
  )
}
