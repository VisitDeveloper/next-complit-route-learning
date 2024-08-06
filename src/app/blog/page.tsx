'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function Blog() {
  const router = useRouter()
    const handleClick = () => {
        console.log('handle click');
        router.replace('/')
    }
  return (
    <div onClick={handleClick}>Blog</div>
  )
}
