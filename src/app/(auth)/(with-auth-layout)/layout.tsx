'use client'
import type { Metadata } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";




const navLinks = [
  { name: 'Register', href: '/register' },
  { name: 'Login', href: '/login' },

]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathName = usePathname()
  return (

    <>
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
      <div>
        Inner Layout for group routes
      </div>
      {children}
    </>


  );
}
