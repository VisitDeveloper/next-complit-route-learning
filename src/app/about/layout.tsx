import React from 'react'

export const metadata = {
  title : 'About Page',
  description :'this page talked about business'
}

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div>
      {children}
      <h2>
        just in about page because it is the nested layout
      </h2>
    </div>
  )
}
