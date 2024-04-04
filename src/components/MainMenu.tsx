import { LoginButtonWithModal } from '@/components/LoginButtonWithModal'
import { Box, Flex, IconButton, useDisclosure } from '@chakra-ui/react'
import { IconMenu2, IconX } from '@tabler/icons-react'
import { Logo } from './Logo'

export function MainMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box
      zIndex={1}
      as='nav'
      px={4}
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
          aria-label='Open Menu'
          display={['flex', 'none']}
          onClick={isOpen ? onClose : onOpen}
        />
        <Box>
          <Logo />
        </Box>

        <LoginButtonWithModal />
      </Flex>
    </Box>
  )
}
