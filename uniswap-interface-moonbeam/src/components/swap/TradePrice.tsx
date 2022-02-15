import React from 'react'
import { Price } from 'seadexswap'
import { useContext } from 'react'
import { Repeat } from 'react-feather'
import { Text } from 'rebass'
import { ThemeContext } from 'styled-components'
import { StyledBalanceMaxMini } from './styleds'
import { useActiveWeb3React } from '../../hooks'
import { WrappedTokenInfo } from '../../state/lists/hooks'

interface TradePriceProps {
  price?: Price
  showInverted: boolean
  setShowInverted: (showInverted: boolean) => void
}

export default function TradePrice({ price, showInverted, setShowInverted }: TradePriceProps) {
  const theme = useContext(ThemeContext)

  const { chainId } = useActiveWeb3React();
  let baseCurrencySymbol = price?.baseCurrency?.symbol;
  if (!(price?.baseCurrency instanceof WrappedTokenInfo)) {
    if (chainId === 1284) {
      baseCurrencySymbol = 'GLMR'
    } else if (chainId === 1285) {
      baseCurrencySymbol = 'MOVR'
    } else if (chainId === 1287) {
      baseCurrencySymbol = 'DEV'
    }
  }

  let quoteCurrencySymbol = price?.quoteCurrency?.symbol;
  if (!(price?.quoteCurrency instanceof WrappedTokenInfo)) {
    if (chainId === 1284) {
      quoteCurrencySymbol = 'GLMR'
    } else if (chainId === 1285) {
      quoteCurrencySymbol = 'MOVR'
    } else if (chainId === 1287) {
      quoteCurrencySymbol = 'DEV'
    }
  }

  const formattedPrice = showInverted ? price?.toSignificant(6) : price?.invert()?.toSignificant(6)

  const show = Boolean(price?.baseCurrency && price?.quoteCurrency)
  const label = showInverted
    ? `${quoteCurrencySymbol} per ${baseCurrencySymbol}`
    : `${baseCurrencySymbol} per ${quoteCurrencySymbol}`

  return (
    <Text
      fontWeight={500}
      fontSize={14}
      color={theme.text2}
      style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}
    >
      {show ? (
        <>
          {formattedPrice ?? '-'} {label}
          <StyledBalanceMaxMini onClick={() => setShowInverted(!showInverted)}>
            <Repeat size={14} />
          </StyledBalanceMaxMini>
        </>
      ) : (
        '-'
      )}
    </Text>
  )
}
