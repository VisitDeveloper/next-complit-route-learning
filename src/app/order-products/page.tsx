'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function OrderProducts() {
    const router = useRouter()
    const handleClick = () => {
        console.log('handle click');
        router.push('/')
    }
  return (
    <div onClick={() => handleClick()}>OrderProducts

    </div>
  )
}
