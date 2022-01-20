import { ChainId, Currency, CurrencyAmount, MOVR, GLMR, DEV, Token, TokenAmount, WMOVR } from 'seadexswap-test-moonriver'

export function wrappedCurrency(currency: Currency | undefined, chainId: ChainId | undefined): Token | undefined {
  return chainId && (currency === MOVR || currency === GLMR || currency === DEV) ? WMOVR[chainId] : currency instanceof Token ? currency : undefined
}

export function wrappedCurrencyAmount(
  currencyAmount: CurrencyAmount | undefined,
  chainId: ChainId | undefined
): TokenAmount | undefined {
  const token = currencyAmount && chainId ? wrappedCurrency(currencyAmount.currency, chainId) : undefined
  return token && currencyAmount ? new TokenAmount(token, currencyAmount.raw) : undefined
}

export function unwrappedToken(token: Token): Currency {
  if (token.equals(WMOVR[token.chainId])) {
    if (token.chainId === 1284) {
      return GLMR;
    } else if (token.chainId === 1285) {
      return MOVR;
    } else if (token.chainId === 1287) {
      return DEV;
    }
  }
  return token
}
