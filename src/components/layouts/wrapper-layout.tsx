import { ReactNode } from 'react'
import clsx from 'clsx'

export default function WrapperLayout({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={clsx('max-w-6xl mx-auto', className)}>{children}</div>
}
