import AppLayout from '@/components/AppLayout'
import { Container } from '@/components/ux/container'
import { Content } from '@/components/ux/content'

const HomePage: React.FC = () => {
  return (
    <AppLayout>
      <Container>
        <Content>Home</Content>
      </Container>
    </AppLayout>
  )
}

export default HomePage
