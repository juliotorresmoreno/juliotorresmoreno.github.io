import React from 'react'
import { Container } from '@/components/ux/container'
import { Content } from '@/components/ux/content'
import AppLayout from '@/components/AppLayout'

const NotFoundPage: React.FC = () => {
  return (
    <AppLayout>
      <Container>
        <Content>Not Found</Content>
      </Container>
    </AppLayout>
  )
}

export default NotFoundPage
