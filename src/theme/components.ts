import { defineStyleConfig } from '@chakra-ui/react'

const Button = defineStyleConfig({
  defaultProps: {
    size: 'sm',
    colorScheme: 'primary'
  }
})
const Badge = defineStyleConfig({
  baseStyle: {
    paddingInline: '15px',
    borderRadius: '50px'
  },
  defaultProps: {
    colorScheme: 'primary',
    variant: 'solid'
  }
})
const components = {
  Button,
  Badge
}
export default components
