import { Currency, MOVR, GLMR, DEV, Token } from 'seadexswap'

export function currencyId(currency: Currency): string {
  if (currency === MOVR) return 'MOVR'
  if (currency === GLMR) return 'GLMR'
  if (currency === DEV) return 'DEV'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
