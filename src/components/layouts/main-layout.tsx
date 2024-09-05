import { ReactNode } from 'react'
import Navigation from './navigation'
import Footer from '../footer'

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navigation />

      <main className='bg-my-background font-mons'>{children}</main>

      <Footer />
    </>
  )
}
