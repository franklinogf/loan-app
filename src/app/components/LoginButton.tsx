'use client'
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure
} from '@nextui-org/react'

export function LoginButton() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  return (
    <>
      <Button
        onPress={onOpen}
        color='primary'
      >
        Iniciar sesión
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Inicia sesión</ModalHeader>
              <ModalBody>
                <p>Hola</p>
              </ModalBody>
              <ModalFooter>
                <Button onPress={onClose}>Cerrar</Button>
                <Button
                  onPress={onClose}
                  color='primary'
                >
                  Aceptar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
