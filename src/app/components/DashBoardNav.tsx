import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle
} from '@nextui-org/react'

export function DashBoardNav() {
  return (
    <Navbar
      disableAnimation
      isBordered
    >
      <NavbarContent
        className='sm:hidden'
        justify='start'
      >
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent
        className='font-bold text-inherit'
        justify='start'
      >
        <NavbarBrand>
          <p className='font-bold text-inherit'>SimpleLoad</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className='gap-4'
        justify='center'
      >
        <NavbarItem>
          <Button
            className='focus:ring-gray-300 dark:focus:ring-gray-600'
            as={Link}
            color='warning'
            href='#'
            variant='flat'
            aria-expanded='false'
            data-dropdown-toggle='dropdown-user'
          >
            <img
              className='w-8 h-8 rounded-full'
              src='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
              alt='user photo'
            />
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className='w-full'
              color={
                index === 2 ? 'warning' : index === menuItems.length - 1 ? 'danger' : 'foreground'
              }
              href='#'
              size='lg'
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu> */}
    </Navbar>
  )
}
