'use client'
import { Avatar, Box, Flex, Icon, IconButton, useDisclosure } from '@chakra-ui/react'
import { IconMenu2, IconUserSquareRounded, IconX } from '@tabler/icons-react'
import { Logo } from '@/components/Logo'

export function DashboardMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box
      zIndex={1}
      as='nav'
      px={[2, 4]}
      borderBottom='2px'
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
          size='md'
          justifyContent='center'
          icon={isOpen ? <IconX /> : <IconMenu2 />}
          aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
          display={['flex', 'none']}
          onClick={isOpen ? onClose : onOpen}
        />
        <Box>
          <Logo />
        </Box>

        <Avatar
          bg='primary.500'
          icon={
            <Icon
              fontSize='2.5rem'
              color='gray.700'
              as={IconUserSquareRounded}
            />
          }
        />
      </Flex>
    </Box>
  )
}
