'use client'
import React from 'react'

export default function ErrorBoundry({ error  , reset}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>error reviews page
      <span>
                {error.message}
            </span>
            <button onClick={reset}>
                click to reset
            </button>
    </div>
  )
}
