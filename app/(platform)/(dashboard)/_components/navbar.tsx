import { Plus } from 'lucide-react'
import { OrganizationSwitcher, UserButton } from '@clerk/nextjs'

import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'
import { FormPopover } from '@/components/form/form-popover'

import { MobileSidebar } from './mobile-sidebar'

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full p-4 border-b shadow-sm bg-white flex justify-center">
      <div className='max-w-screen-lg flex justify-between w-full'>
        <MobileSidebar />
        <div className="flex items-center gap-x-4">
          <Logo />
          <FormPopover align="start" side="bottom" sideOffset={18}>
            <Button variant="primary" size="sm" className="rounded-sm hidden md:block h-auto  py-1.5 px-2">
              Create
            </Button>
          </FormPopover>
          <FormPopover>
            <Button variant="primary" size="sm" className="rounded-sm block md:hidden">
              <Plus className="h-4 w-4" />
            </Button>
          </FormPopover>
        </div>
        <div className="ml-auto flex items-center gap-x-2">
          <OrganizationSwitcher
            hidePersonal
            afterCreateOrganizationUrl="/organization/:id"
            afterLeaveOrganizationUrl="/select-org"
            afterSelectOrganizationUrl="/organization/:id"
            appearance={{
              elements: {
                rootBox: {
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }
              }
            }}
          />
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: {
                  height: 30,
                  width: 30
                }
              }
            }}
          />
        </div>
      </div>
    </nav>
  )
}
