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
      <aside
        className='fixed top-0 left-0 w-64 h-screen pt-20 transition-transform -translate-x-full  border-r border-gray-200 md:translate-x-0 '
        aria-label='Sidebar'
      >
        <DashboardAsideMenu />
      </aside>
      <main className='p-4 md:ml-64'>{children}</main>
    </>
  )
}
