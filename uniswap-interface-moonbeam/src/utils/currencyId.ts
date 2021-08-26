import { Currency, MOVR, Token } from 'seadexswap'

export function currencyId(currency: Currency): string {
  if (currency === MOVR) return 'MOVR'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
