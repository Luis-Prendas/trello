import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Logo from '@/components/logo'
import { LogIn } from 'lucide-react'

export default function Navbar () {
  return (
    <nav className="fixed top-0 w-full p-4 border-b shadow-sm bg-white flex justify-center">
      <div className='max-w-screen-lg flex justify-between w-full'>
        <Logo />
        <section className="flex justify-between w-full md:w-auto gap-4">
          <Button size="sm" variant="outline" asChild>
            <Link href="/sign-in" className='flex gap-2'>
              <LogIn className='w-4 h-4' />
              Login
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/sign-up">
              Get Task-PR for free!
            </Link>
          </Button>
        </section>
      </div>
    </nav>
  )
}
