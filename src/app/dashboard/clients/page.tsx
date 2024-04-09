import { NewClientButton } from '@/components/dashboard/NewClientButton'
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react'
const clients = [
  {
    name: 'Juan Pérez',
    email: 'juan@example.com',
    phone: '+1-809-123-4567'
  },
  {
    name: 'María García',
    email: 'maria@example.com',
    phone: '+1-829-987-6543'
  },
  {
    name: 'Pedro Martínez',
    email: 'pedro@example.com',
    phone: '+1-849-456-7890'
  },
  {
    name: 'Ana Rodríguez',
    email: 'ana@example.com',
    phone: '+1-809-234-5678'
  },
  {
    name: 'José Ramírez',
    email: 'jose@example.com',
    phone: '+1-829-876-5432'
  },
  {
    name: 'Laura Hernández',
    email: 'laura@example.com',
    phone: '+1-849-345-6789'
  },
  {
    name: 'Carlos Sánchez',
    email: 'carlos@example.com',
    phone: '+1-809-456-7890'
  },
  {
    name: 'Sofía Guzmán',
    email: 'sofia@example.com',
    phone: '+1-829-567-8901'
  },
  {
    name: 'Javier López',
    email: 'javier@example.com',
    phone: '+1-849-678-9012'
  },
  {
    name: 'Isabella Cruz',
    email: 'isabella@example.com',
    phone: '+1-809-789-0123'
  },
  {
    name: 'Miguel Díaz',
    email: 'miguel@example.com',
    phone: '+1-829-890-1234'
  },
  {
    name: 'Fernanda Castillo',
    email: 'fernanda@example.com',
    phone: '+1-849-901-2345'
  },
  {
    name: 'Andrés Martínez',
    email: 'andres@example.com',
    phone: '+1-809-012-3456'
  },
  {
    name: 'Valentina Romero',
    email: 'valentina@example.com',
    phone: '+1-829-123-4567'
  },
  {
    name: 'Diego Pérez',
    email: 'diego@example.com',
    phone: '+1-849-234-5678'
  },
  {
    name: 'Camila Suárez',
    email: 'camila@example.com',
    phone: '+1-809-345-6789'
  },
  {
    name: 'Gabriel Herrera',
    email: 'gabriel@example.com',
    phone: '+1-829-456-7890'
  },
  {
    name: 'Lucía Gómez',
    email: 'lucia@example.com',
    phone: '+1-849-567-8901'
  },
  {
    name: 'Mateo Vásquez',
    email: 'mateo@example.com',
    phone: '+1-809-678-9012'
  },
  {
    name: 'Ximena Núñez',
    email: 'ximena@example.com',
    phone: '+1-829-789-0123'
  }
]
export default function Clients() {
  return (
    <div className='space-y-2'>
      <section>
        <NewClientButton />
      </section>
      <section>
        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Th>Nombre</Th>
                <Th>Correo</Th>
                <Th>Teléfono</Th>
              </Tr>
            </Thead>
            <Tbody>
              {clients.map(({ name, email, phone }) => (
                <Tr key={email}>
                  <Td>{name}</Td>
                  <Td>{email}</Td>
                  <Td>{phone}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </section>
    </div>
  )
}
