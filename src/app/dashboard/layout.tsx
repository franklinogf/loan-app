import { DashboardMenu } from '@/components/dashboard/DashboardMenu'
import { DashboardAsideMenu } from '@/components/dashboard/DashboardAsideMenu'
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <DashboardMenu />
      <DashboardAsideMenu />
      <main className='p-4 md:ml-64'>{children}</main>
    </>
  )
}
