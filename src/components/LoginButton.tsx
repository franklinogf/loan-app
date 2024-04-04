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
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Form, Formik, FormikHelpers } from 'formik'
import { ZodError, z } from 'zod'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
})
type FormLogin = z.infer<typeof loginSchema>

export function LoginButton() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
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
            <Formik<FormLogin>
              initialValues={{ email: '', password: '' }}
              onSubmit={handleSubmit}
              validate={validateForm}
            >
              {({ values, handleChange, errors, isSubmitting }) => (
                <Form>
                  <ModalHeader>Inicia sesión</ModalHeader>
                  <ModalBody>
                    <Input
                      type='email'
                      name='email'
                      label='Email'
                      variant='faded'
                      labelPlacement='outside'
                      autoFocus
                      value={values.email}
                      onChange={handleChange}
                      isInvalid={errors.email != null}
                      errorMessage={errors.email}
                    />
                    <Input
                      type={isPasswordVisible ? 'text' : 'password'}
                      name='password'
                      label='Contraseña'
                      variant='faded'
                      labelPlacement='outside'
                      value={values.password}
                      onChange={handleChange}
                      isInvalid={errors.password != null}
                      errorMessage={errors.password}
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
                    <Button
                      isDisabled={isSubmitting}
                      onPress={onClose}
                    >
                      Cerrar
                    </Button>
                    <Button
                      isDisabled={isSubmitting}
                      type='submit'
                      color='primary'
                    >
                      Aceptar
                    </Button>
                  </ModalFooter>
                </Form>
              )}
            </Formik>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
