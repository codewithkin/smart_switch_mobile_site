'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../ui/button'

const navLinks = [
  { name: 'home', href: '/' },
  { name: 'cart', href: '/cart' },
  { name: 'about', href: '/about' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname();

  return (
    <motion.nav
    initial={{
        y: -200,
        opacity: 0
    }}

    animate={{
        y: 1,
        opacity: 1
    }}
    className='p-4 md:px-12 shadow-sm border-b md:flex justify-between items-center bg-white hidden'>
        <h2 className='text-xl font-semibold'>Smart Switch Mobile</h2>

        {/* Links */}
        <ul className='flex gap-4 items-center font-medium text-slate-600'>
            {
                navLinks.map((link: {name: string, href: string}, index: number) => (
                    <li key={index}>
                        <Link className='capitalize hover:text-slate-950' href={link.href}>
                            {link.name}
                        </Link>
                    </li>
                ))
            }
        </ul>

        {/* CTA */}
        <Button variant="default" size="lg" asChild>
            <Link href="/shop">
            Show Now
            </Link>
        </Button>
    </motion.nav>
  )
}