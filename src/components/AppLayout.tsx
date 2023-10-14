import React from 'react'
import AppNavBar from './AppNavBar'
import AppFooter from './Footer'

const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <AppNavBar />

      <main>{children}</main>

      <AppFooter />
    </>
  )
}

export default AppLayout
