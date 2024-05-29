import { useRouter } from 'next/router'
import React from 'react'

export default function ShopProductPage() {
    const {query} = useRouter();
    console.log(query);
  return (
    <div>
        <h1>Shop Product</h1>
        <p>Shop: {`${query.slug && query.slug[0] + "-" + query.slug[1]}`}</p>
    </div>
  )
}
