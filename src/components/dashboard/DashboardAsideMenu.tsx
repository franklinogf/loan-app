'use client'
import { Button, List, ListItem } from '@chakra-ui/react'
import { IconHome, IconInbox, IconUsers } from '@tabler/icons-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menuItems = [
  { label: 'Inicio', href: '/dashboard', icon: <IconHome /> },
  { label: 'Clientes', href: '/dashboard/clients', icon: <IconUsers /> },
  { label: 'Prestamos', href: '/loans', icon: <IconInbox /> }
]
export function DashboardAsideMenu() {
  const pathname = usePathname()
  return (
    <List
      spacing={3}
      px={5}
    >
      {menuItems.map(({ label, href, icon }, index) => (
        <ListItem key={index}>
          <Button
            as={Link}
            href={href}
            w='100%'
            size='md'
            leftIcon={icon}
            variant={pathname !== href ? 'ghost' : 'solid'}
            justifyContent='flex-start'
          >
            {label}
          </Button>
        </ListItem>
      ))}
    </List>
  )
}
