'use client'
import { notFound } from 'next/navigation'
import React from 'react'

function generateRandomID(count : number){
  return Math.floor(Math.random() * count);
}
export default function ReviewID({
    params
  } : {
    params : {reviewID : string}
  }) {

    // هدف اینه که روت مخصوص به حالت ارور را نمایش دهیم میخواهیم به یک ارور برخورد کنیم تا اون را نمایش دهیم
    const random = generateRandomID(2)

    if(random === 1) {
      throw new Error('error loading review')
    }

    if(parseInt(params.reviewID) > 1000) {
        notFound();
    }
  return (
    <div>reviewID {params.reviewID} </div>
  )
}
