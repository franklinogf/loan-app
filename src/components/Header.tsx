import { Badge } from '@chakra-ui/react'
import { MainMenu } from '@/components/MainMenu'

export default function Header() {
  return (
    <header>
      <MainMenu />
      <section className='flex flex-col items-center gap-y-10 mt-20'>
        <Badge>TRUSTED BY OVER +55,000</Badge>
        <h1 className='font-bold text-5xl max-w-xl text-center text-balance'>
          The guide to launching your successful startup.
        </h1>
        <p className='text-lg max-w-xl text-pretty text-center opacity-80'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo assumenda perferendis est
          modi, aliquid distinctio, omnis accusamus autem, placeat perspiciatis rem reiciendis
          minima minus! Qui explicabo fugit placeat necessitatibus molestiae.
        </p>
        <Badge colorScheme='secondary'>No Credit Card Required . Cancel Anytime</Badge>
      </section>
    </header>
  )
}
