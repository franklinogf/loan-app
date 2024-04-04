'use client'
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Portal,
  VStack,
  useDisclosure
} from '@chakra-ui/react'
import { IconEye, IconEyeOff } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Form, Formik, FormikHelpers } from 'formik'
import { ZodError, z } from 'zod'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
})
type FormLogin = z.infer<typeof loginSchema>

export function LoginButtonWithModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const router = useRouter()

  const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible)

  const handleSubmit = (values: FormLogin, formikHelpers: FormikHelpers<FormLogin>) => {
    // formikHelpers.setSubmitting(false)
    router.push('/dashboard')
  }
  const validateForm = (values: FormLogin) => {
    try {
      loginSchema.parse(values)
    } catch (error) {
      if (error instanceof ZodError) {
        return error.formErrors.fieldErrors
      }
    }
  }

  return (
    <>
      <Button onClick={onOpen}>Iniciar sesión</Button>
      <Portal>
        <Modal
          isCentered
          size='xs'
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <Formik<FormLogin>
              initialValues={{ email: '', password: '' }}
              onSubmit={handleSubmit}
              validateOnBlur
              validate={validateForm}
            >
              {({ values, handleChange, errors, isSubmitting }) => (
                <Form>
                  <ModalHeader>Inicia sesión</ModalHeader>
                  <ModalBody>
                    <VStack>
                      <FormControl isInvalid={errors.email != null}>
                        <FormLabel>Email</FormLabel>
                        <Input
                          type='email'
                          name='email'
                          autoFocus
                          value={values.email}
                          onChange={handleChange}
                        />
                        <FormErrorMessage fontSize='xs'>{errors.email}</FormErrorMessage>
                      </FormControl>

                      <FormControl isInvalid={errors.password != null}>
                        <FormLabel>Contraseña</FormLabel>
                        <InputGroup>
                          <Input
                            type={isPasswordVisible ? 'text' : 'password'}
                            name='password'
                            value={values.password}
                            onChange={handleChange}
                          />
                          <InputRightElement>
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
                          </InputRightElement>
                        </InputGroup>
                        <FormErrorMessage fontSize='xs'>{errors.password}</FormErrorMessage>
                      </FormControl>
                    </VStack>
                  </ModalBody>
                  <ModalFooter>
                    <HStack>
                      <Button
                        colorScheme='gray'
                        isDisabled={isSubmitting}
                        onClick={onClose}
                      >
                        Cerrar
                      </Button>
                      <Button
                        isDisabled={isSubmitting}
                        type='submit'
                      >
                        Aceptar
                      </Button>
                    </HStack>
                  </ModalFooter>
                </Form>
              )}
            </Formik>
          </ModalContent>
        </Modal>
      </Portal>
    </>
  )
}
