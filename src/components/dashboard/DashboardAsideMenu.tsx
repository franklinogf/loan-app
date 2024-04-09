import { List, ListItem, UnorderedList } from '@chakra-ui/react'
import {
  IconBuildingStore,
  IconDashboard,
  IconDirectionSign,
  IconFingerprint,
  IconInbox,
  IconTriangleSquareCircle,
  IconUsers
} from '@tabler/icons-react'

export function DashboardAsideMenu() {
  return (
    <List>
      <UnorderedList>
        <ListItem className='flex'>
          <IconDashboard />
          Dashboard
        </ListItem>
        <ListItem className='flex'>
          <IconTriangleSquareCircle />
          Kanban
        </ListItem>
        <ListItem className='flex'>
          <IconInbox />
          Mensajes
        </ListItem>
        <ListItem className='flex'>
          <IconUsers />
          Usuarios
        </ListItem>
        <ListItem className='flex'>
          <IconBuildingStore />
          Productos
        </ListItem>
        <ListItem className='flex'>
          <IconDirectionSign />
          Iniciar Sesión
        </ListItem>
        <ListItem className='flex'>
          <IconFingerprint />
          Registrarse
        </ListItem>
      </UnorderedList>
    </List>
  )
}
