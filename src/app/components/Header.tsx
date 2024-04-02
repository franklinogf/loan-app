import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Chip
} from '@nextui-org/react'

export default function Header() {
  return (
    <header>
      <div>
        <article className='mb-20'>
          <Navbar shouldHideOnScroll>
            <NavbarBrand>
              <p className='font-bold text-inherit'>SimpleLoad</p>
            </NavbarBrand>
            <NavbarContent justify='end'>
              <NavbarItem>
                <Link href='#'>Login</Link>
              </NavbarItem>
              <NavbarItem>
                <Button
                  as={Link}
                  color='primary'
                  href='#'
                  variant='flat'
                >
                  Sign Up
                </Button>
              </NavbarItem>
            </NavbarContent>
          </Navbar>
        </article>
        <article className='flex flex-col items-center mx-auto text-center gap-y-10'>
          <Chip color='primary'>TRUSTED BY OVER +55,000</Chip>
          <h1 className='font-bold text-6xl w-[700px]'>
            The guide to launching your successful startup.
          </h1>
          <p className='text-xl w-[700px]'>
            Leverage the potential of cutting-edge AI-driven algorithms, dynamic
            data analytics, and efficient workflow streamlining to pinpoint
            strategic opportunities for expansion, expenditure minimization, and
            opera.
          </p>
          <Chip
            color='default'
            className='text-md'
          >
            No Credit Card Required . Cancel Anytime
          </Chip>
        </article>
      </div>
    </header>
  )
}
