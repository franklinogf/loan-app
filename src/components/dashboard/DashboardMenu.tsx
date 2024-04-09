'use client'
import {
  Avatar,
  Box,
  Flex,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from '@chakra-ui/react'
import { IconMenu2, IconX } from '@tabler/icons-react'
import { Logo } from '@/components/Logo'
import { useRef } from 'react'
import { DashboardAsideMenu } from '@/components/dashboard/DashboardAsideMenu'

export function DashboardMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef(null)

  return (
    <>
      <Box
        zIndex={1}
        as='nav'
        px={[2, 4]}
        borderBottom='1px'
        className='!border-gray-200'
        position='sticky'
        top={0}
        bgColor='white'
      >
        <Flex
          h={16}
          alignItems='center'
          justifyContent='space-between'
        >
          <IconButton
            ref={btnRef}
            size='md'
            justifyContent='center'
            icon={isOpen ? <IconX /> : <IconMenu2 />}
            aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
            display={{ base: 'flex', lg: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Box>
            <Logo />
          </Box>
          <Menu>
            <MenuButton
              size='sm'
              as={Avatar}
            />
            <MenuList>
              <MenuItem>Cerrar sesión</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Logo />
          </DrawerHeader>

          <DrawerBody>
            <DashboardAsideMenu />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
