import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react'
import { LoginButton } from './LoginButton'

export function MainMenu() {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <p className='font-bold text-inherit'>SimpleLoad</p>
      </NavbarBrand>
      <NavbarContent justify='end'>
        <NavbarItem>
          <LoginButton />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
