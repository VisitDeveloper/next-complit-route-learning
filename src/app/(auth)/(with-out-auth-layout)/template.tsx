'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import  { useState } from 'react'

const navLinks = [
    { name: 'ForgotPassord', href: '/forgot-password' },
    { name: 'Generatepassword', href: '/generate-password' },
  
  ]
export default function TemplateOfPasswords({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  const [input , setInput] = useState<string>("")
  const pathName = usePathname()

  return (
    <div>
         <input value={input} onChange={(e) => setInput(e.target.value)}/>
         template
         {navLinks.map(item => {
        const isActive = pathName.startsWith(item.href)
        return (
          <>
            <Link href={item.href} key={item.name} className={`p-2 ${isActive ? 'font-bold mr-4' : 'text-blue-500 mr-4'}`}>
              {item.name}
            </Link>
          </>
        )
      })}
      {children}
    </div>
  )
}
