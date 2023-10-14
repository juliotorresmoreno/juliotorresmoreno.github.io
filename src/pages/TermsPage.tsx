import React from 'react'
import AppLayout from '@/components/AppLayout'
import { Container } from '@/components/ux/container'
import styled from 'styled-components'

const ContainerStyled = styled(Container)`
  margin-top: 20px;
`

function TermsPage() {
  return (
    <AppLayout>
      <ContainerStyled>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight text-center">
          Terms and Conditions of Use for Better
        </h1>

        Building

        <p className="scroll-m-20">
          <strong>Last updated: 2021-08-08</strong>
        </p>
      </ContainerStyled>
    </AppLayout>
  )
}

export default TermsPage
