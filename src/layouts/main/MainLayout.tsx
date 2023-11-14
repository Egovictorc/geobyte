import React, { ReactNode } from 'react'
import MainFooter from './MainFooter'
import MainHeader from './MainHeader'

const ManiLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <MainHeader />
      {children}
      <MainFooter />
    </>
  )
}

export default ManiLayout