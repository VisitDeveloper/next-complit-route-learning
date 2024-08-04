import Link from 'next/link'
import React from 'react'

export default function ProductList() {
  const similarPropsProductID = 100;
  return (
    <div>
      <Link href={'/'}>Home</Link>
      <h2>
        ProductList
      </h2>
    
      <Link href={'products/1'}>
        Product 1
      </Link>
      <Link href={'products/2'}>
        Product 2
      </Link>
      <Link href={'products/3'} replace>
        Product 3
      </Link>

      <Link href={`products/${similarPropsProductID}`} >
        Product {similarPropsProductID}
      </Link>
    </div>
  )
}
