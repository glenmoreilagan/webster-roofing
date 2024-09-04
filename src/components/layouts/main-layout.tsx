import React, { ReactNode } from 'react'
import Navigation from './navigation'

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navigation />

      <main className='bg-my-background font-mons'>{children}</main>
    </>
  )
}
