'use client'
import React from 'react'
function generateRandomID(count: number) {
  return Math.floor(Math.random() * count);
}
export default function Revenue() {
  const random = generateRandomID(2)

  if (random === 1) {
    throw new Error('error loading review')
  }
  return (
    <div>Revenue</div>
  )
}
