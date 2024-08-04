import { notFound } from 'next/navigation'
import React from 'react'

export default function ReviewID({
    params
  } : {
    params : {reviewID : string}
  }) {

    if(parseInt(params.reviewID) > 1000) {
        notFound();
    }
  return (
    <div>reviewID {params.reviewID} </div>
  )
}
