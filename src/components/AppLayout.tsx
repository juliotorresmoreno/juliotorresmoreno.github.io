import React from 'react'

import { Container } from 'react-bootstrap'
import AppHeader from './AppHeader'
import AppNavBar from './AppNavBar'
import AppFooter from './Footer'

const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      <AppHeader />
      <AppNavBar />

      <main>{children}</main>
      
      <AppFooter />
    </Container>
  )
}

export default AppLayout
