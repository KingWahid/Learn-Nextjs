import { useRouter } from 'next/router'
import React from 'react'

export default function DetailProductPage() {
    const {query} = useRouter();
  return (
    <div>
        <h1>Detail Product</h1>
        <p>Product : {query.product}</p>
    </div>
  )
}
