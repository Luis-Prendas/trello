import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full p-4 border-b shadow-sm bg-white flex justify-center">
      <div className='max-w-screen-lg flex justify-between w-full'>
        <Logo />
        <section className="flex justify-between w-full md:w-auto gap-4">
          <Button size="sm" variant="ghost">
            Privacy Policy
          </Button>
          <Button size="sm" variant="ghost">
            Terms of Service
          </Button>
        </section>
      </div>
    </footer>
  )
}
