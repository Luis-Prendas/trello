import Image from 'next/image'
import localFont from 'next/font/local'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const headingFont = localFont({
  src: '../public/font.woff2'
})

export default function Logo () {
  return (
    <Link href='/' className={cn('hover:opacity-75 transition items-center gap-2 hidden md:flex', headingFont.className)}>
      <Image src='/logo.svg' alt='Logo Task-PR' height={50} width={50} />
    </Link>
  )
}
