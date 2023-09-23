import './globals.css'
import type { Metadata } from 'next'
import Login from '../components/Login'
import SideBar from '@/components/SideBar'
import { getServerSession } from 'next-auth'
import { Montserrat } from 'next/font/google'
import { authOptions } from './api/auth/[...nextauth]/route'
import { SessionProvider } from '../components/SessionProvider'

const mont = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jurix',
  description: 'Legal Adviser',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession(authOptions)

  return (
    <html lang="en">
      <body >
        <SessionProvider session={session}>
          {!session ? (
            <div className={mont.className}>
              <Login />
            </div>
          ) : (
            <div className='flex'>
              {/* TODO: while making site mobile responsive, change 'max-w-xs'  */}
              <div className='bg-sdb max-w-xs h-screen
               md:min-w-[17rem]'>
                <SideBar />
              </div>

              <div className={`bg-bod flex-1 ${mont.className}`}>{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  )
}
