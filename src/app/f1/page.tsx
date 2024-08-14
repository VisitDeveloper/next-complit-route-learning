import Link from 'next/link'
import React from 'react'

export default function Intercept() {
  return (
    <div>Intercept 

        <Link href={'/f1/f2'}>
            Intercept f2
        </Link>
    </div>
  )
}
