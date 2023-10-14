import { cn } from '@/lib/utils'
import styled from 'styled-components'

const ContainerStyled = styled.div`
  flex-direction: column;
`

export function Container({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <ContainerStyled className={cn('container', className)} {...props} />
}
