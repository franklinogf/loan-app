import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle
} from '@nextui-org/react'
export function DashboardMenu() {
  return (
    <Navbar
      maxWidth='full'
      isBordered
    >
      <NavbarContent
        className='sm:hidden pr-3'
        justify='start'
      >
        <NavbarMenuToggle />
        <NavbarBrand>
          <p className='font-bold text-inherit'>SimpleLoad</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className='hidden sm:flex'
        justify='start'
      >
        <NavbarBrand>
          <p className='font-bold text-inherit'>SimpleLoad</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify='center'>
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button variant='bordered'>Open Menu</Button>
            </DropdownTrigger>
            <DropdownMenu aria-label='Static Actions'>
              <DropdownItem key='new'>New file</DropdownItem>
              <DropdownItem key='copy'>Copy link</DropdownItem>
              <DropdownItem key='edit'>Edit file</DropdownItem>
              <DropdownItem
                key='delete'
                className='text-danger'
                color='danger'
              >
                Delete file
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Link
            className='w-full'
            href='#'
            size='lg'
          >
            link
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className='w-full'
            href='#'
            size='lg'
          >
            link
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}
