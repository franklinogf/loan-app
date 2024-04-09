'use client'
import { Button, List, ListItem } from '@chakra-ui/react'
import {
  IconBuildingStore,
  IconDashboard,
  IconInbox,
  IconTriangleSquareCircle,
  IconUsers
} from '@tabler/icons-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menuItems = [
  { label: 'Dashboard', href: '/dashboard', icon: <IconDashboard /> },
  { label: 'Kanban', href: '/kanban', icon: <IconTriangleSquareCircle /> },
  { label: 'Mensajes', href: '/inbox', icon: <IconInbox /> },
  { label: 'Usuarios', href: '/users', icon: <IconUsers /> },
  { label: 'Productos', href: '/products', icon: <IconBuildingStore /> }
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
