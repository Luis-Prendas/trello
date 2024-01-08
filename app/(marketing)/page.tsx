import Link from 'next/link'
import localFont from 'next/font/local'
import { Poppins } from 'next/font/google'
import { Medal } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const headingFont = localFont({
  src: '../../public/font.woff2'
})

const textFont = Poppins({
  subsets: ['latin'],
  weight: [
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900'
  ]
})

export default function MarketingPage () {
  return (
    <div className="flex items-center justify-center flex-col gap-4 md:gap-6">
      <div className={cn('flex items-center justify-center flex-col gap-4 md:gap-6', headingFont.className)}>
        <div className='flex gap-2 px-4 pb-3 pt-4 items-center border shadow-sm bg-sky-200 text-sky-600 rounded-full uppercase'>
          <Medal className='h-6 w-6' />
          <span>Top Task Managment</span>
        </div>
        <h1 className=' text-3xl md:text-6xl text-center text-neutral-800'>
          Task-PR Helps Team Move
        </h1>
        <div className='text-3xl md:text-6xl bg-gradient-to-r from-emerald-400 to-sky-500 text-white rounded-md px-4 pb-2 pt-3 md:pt-5'>
          Work Forward.
        </div>
      </div>
      <div className={cn('text-sm md:text-xl text-neutral-500 max-w-xs md:max-w-2xl text-center', textFont.className)}>
        Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique - accomplish it all with Task-PR.
      </div>
      <Button size='lg' asChild>
        <Link href='/sign-up'>
            Get Task-PR for free!
        </Link>
      </Button>
    </div>
  )
}
