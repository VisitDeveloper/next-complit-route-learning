import Link from 'next/link'
import React from 'react'

export default function Notifications() {
  return (
    <div>Notifications
      <Link href="/complex-dashboard/archived">
        To Archived route
      </Link>
    </div>
  )
}
