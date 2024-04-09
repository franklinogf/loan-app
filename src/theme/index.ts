import { extendTheme } from '@chakra-ui/react'
import colors from '@/theme/colors'
import components from '@/theme/components'
const theme = extendTheme({
  breakpoints: {
    'base': '0px',
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px'
  },
  colors,
  components
})
export default theme
