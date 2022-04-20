import React from 'react'
import styled from 'styled-components'
import { AutoColumn } from '../Column'
import { RowBetween } from '../Row'
import { Text } from 'rebass'

const ContentWrapper = styled.div<{ notFullWidth?: boolean }>`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 2rem 0;
  background-color: ${({ theme }) => theme.bg2};
  border-radius: 20px;
  margin: 1rem;
  
  @media (min-width: 900px) {
    margin-right: ${({ notFullWidth }) => (notFullWidth ? '260px' : '1rem')};
  }
`
const Break = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.bg3};
`
interface TermAndPolicyCardProps {
  title: string
  description: any
  notFullWidth?: boolean
}

export default function TermAndPolicyCard({ title, description, notFullWidth }: TermAndPolicyCardProps) {
  return (
    <>
      <ContentWrapper notFullWidth={notFullWidth}>
        <AutoColumn gap="lg">
          <RowBetween style={{ padding: '0 2rem' }}>
            <Text fontWeight={500} fontSize={20}>
              {title}
            </Text>
            <div />
          </RowBetween>
          <Break />
          <AutoColumn gap="lg" style={{ padding: '0 2rem' }}>
            <Text fontWeight={300} fontSize={14}>
              {description}
            </Text>
          </AutoColumn>
        </AutoColumn>
      </ContentWrapper>
    </>
  );
}