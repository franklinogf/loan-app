'use client'
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure
} from '@nextui-org/react'
import { IconEye, IconEyeOff } from '@tabler/icons-react'
import { useState } from 'react'

export function LoginButton() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [credentials, setCredentials] = useState({ email: '', password: '' })

  const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCredentials({
      ...credentials,
      [name]: value
    })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onClose()
  }
  return (
    <>
      <Button
        onPress={onOpen}
        color='primary'
      >
        Iniciar sesión
      </Button>
      <Modal
        size='xs'
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <form onSubmit={handleSubmit}>
              <ModalHeader>Inicia sesión</ModalHeader>
              <ModalBody>
                <Input
                  type='email'
                  name='email'
                  label='Email'
                  variant='faded'
                  labelPlacement='outside'
                  autoFocus
                  value={credentials.email}
                  onChange={handleInputChange}
                />
                <Input
                  type={isPasswordVisible ? 'text' : 'password'}
                  name='password'
                  label='Contraseña'
                  variant='faded'
                  labelPlacement='outside'
                  value={credentials.password}
                  onChange={handleInputChange}
                  endContent={
                    <button
                      className='focus:outline-none'
                      type='button'
                      onClick={togglePasswordVisibility}
                    >
                      {isPasswordVisible ? (
                        <IconEye className='text-default-400 pointer-events-none' />
                      ) : (
                        <IconEyeOff className='text-default-400 pointer-events-none' />
                      )}
                    </button>
                  }
                />
              </ModalBody>
              <ModalFooter>
                <Button onPress={onClose}>Cerrar</Button>
                <Button
                  type='submit'
                  color='primary'
                >
                  Aceptar
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
