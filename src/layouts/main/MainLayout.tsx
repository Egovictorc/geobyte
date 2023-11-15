import { ReactNode } from 'react'
import MainFooter from './MainFooter'
import MainHeader from './MainHeader'

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <MainHeader />
      {children}
      <MainFooter />
    </>
  )
}

export default MainLayout