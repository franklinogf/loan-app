'use client'
import { extendVariants, Button as NextUIButton } from '@nextui-org/react'

export const Button = extendVariants(NextUIButton, {
  defaultVariants: { color: 'primary' }
})
