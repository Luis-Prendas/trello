import { type ReactNode } from 'react'
import Navbar from './_components/navbar'
import { Footer } from './_components/footer'

export default function MarketingLayout ({ children }: { children: ReactNode }) {
  return (
    <div className='h-full bg-gradient-to-b from-slate-100 to-slate-200 flex justify-center'>
      <Navbar />
      <main className='pt-40'>
        {children}
      </main>
      <Footer />
    </div>
  )
}
