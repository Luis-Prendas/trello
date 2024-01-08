import { type ReactNode } from 'react'

export default function ClearkLayout ({ children }: { children: ReactNode }) {
  return (
    <div className='h-full flex justify-center pt-40'>
      {children}
    </div>
  )
}
