'use client'
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input
} from '@chakra-ui/react'
import { IconPlus } from '@tabler/icons-react'
export function NewClientButton() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button
        onClick={onOpen}
        rightIcon={<IconPlus />}
      >
        Agregar cliente nuevo
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size='5xl'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Agregue los datos del cliente.</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <section className='space-y-3'>
              <Input placeholder='Nombre' />
              <Input placeholder='Correo' />
              <Input placeholder='Cedula' />
              <Input placeholder='Telefono' />
            </section>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme='blue'
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
            <Button variant='ghost'>Guardar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
