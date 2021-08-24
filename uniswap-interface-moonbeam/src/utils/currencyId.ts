import { Currency, DEV, Token } from 'seadexswap'

export function currencyId(currency: Currency): string {
  if (currency === DEV) return 'MOVR'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
