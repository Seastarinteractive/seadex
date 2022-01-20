import { Currency, MOVR, GLMR, DEV, Token } from 'seadexswap-test-moonriver'
import React, { useMemo } from 'react'
import styled from 'styled-components'

import MoonriverLogo from '../../assets/images/moonriver.png'
import MoonbeamLogo from '../../assets/images/glimmer.svg'
import useHttpLocations from '../../hooks/useHttpLocations'
import { WrappedTokenInfo } from '../../state/lists/hooks'
import Logo from '../Logo'
import { useActiveWeb3React } from '../../hooks'

const getTokenLogoURL = (address: string) =>
  `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/moonbeam/assets/${address}/logo.png`

const StyledMoonbeamLogo = styled.img<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
  border-radius: 24px;
`

const StyledLogo = styled(Logo) <{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`

export default function CurrencyLogo({
  currency,
  size = '24px',
  style
}: {
  currency?: Currency
  size?: string
  style?: React.CSSProperties
}) {
  const { chainId } = useActiveWeb3React()
  const uriLocations = useHttpLocations(currency instanceof WrappedTokenInfo ? currency.logoURI : undefined)

  const srcs: string[] = useMemo(() => {
    if (currency === MOVR || currency === GLMR || currency === DEV) return []

    if (currency instanceof Token) {
      if (currency instanceof WrappedTokenInfo) {
        return [...uriLocations, getTokenLogoURL(currency.address)]
      }

      return [getTokenLogoURL(currency.address)]
    }
    return []
  }, [currency, uriLocations])

  if (currency === MOVR || currency === GLMR || currency === DEV) {
    if (chainId === 1284 || chainId === 1287) {
      return <StyledMoonbeamLogo src={MoonbeamLogo} size={size} style={style} />
    } else {
      return <StyledMoonbeamLogo src={MoonriverLogo} size={size} style={style} />
    }

  }

  return <StyledLogo size={size} srcs={srcs} alt={`${currency?.symbol ?? 'token'} logo`} style={style} />
}
