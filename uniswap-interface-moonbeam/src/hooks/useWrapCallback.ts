import { Currency, currencyEquals, MOVR, GLMR, DEV, WMOVR } from 'seadexswap'
import { useMemo } from 'react'
import { tryParseAmount } from '../state/swap/hooks'
import { useTransactionAdder } from '../state/transactions/hooks'
import { useCurrencyBalance } from '../state/wallet/hooks'
import { useActiveWeb3React } from './index'
import { useWDEVContract } from './useContract'
import { CURRENCY_LABELS, WRAPPED_CURRENCY_LABELS } from '../constants'

export enum WrapType {
  NOT_APPLICABLE,
  WRAP,
  UNWRAP
}

const NOT_APPLICABLE = { wrapType: WrapType.NOT_APPLICABLE }
/**
 * Given the selected input and output currency, return a wrap callback
 * @param inputCurrency the selected input currency
 * @param outputCurrency the selected output currency
 * @param typedValue the user input value
 */
export default function useWrapCallback(
  inputCurrency: Currency | undefined,
  outputCurrency: Currency | undefined,
  typedValue: string | undefined
): { wrapType: WrapType; execute?: undefined | (() => Promise<void>); inputError?: string } {
  const { chainId, account } = useActiveWeb3React()
  const wethContract = useWDEVContract()
  const balance = useCurrencyBalance(account ?? undefined, inputCurrency)
  // we can always parse the amount typed as the input currency, since wrapping is 1:1
  const inputAmount = useMemo(() => tryParseAmount(typedValue, inputCurrency), [inputCurrency, typedValue])
  const addTransaction = useTransactionAdder()

  return useMemo(() => {
    if (!wethContract || !chainId || !inputCurrency || !outputCurrency) return NOT_APPLICABLE

    const sufficientBalance = inputAmount && balance && !balance.lessThan(inputAmount)

    if ((inputCurrency === MOVR || inputCurrency === GLMR || inputCurrency === DEV) && currencyEquals(WMOVR[chainId], outputCurrency)) {
      return {
        wrapType: WrapType.WRAP,
        execute:
          sufficientBalance && inputAmount
            ? async () => {
              try {
                const txReceipt = await wethContract.deposit({ value: `0x${inputAmount.raw.toString(16)}` })
                addTransaction(txReceipt, { summary: `Wrap ${inputAmount.toSignificant(6)} ${CURRENCY_LABELS[chainId]} to ${WRAPPED_CURRENCY_LABELS[chainId]}` })
              } catch (error) {
                console.error('Could not deposit', error)
              }
            }
            : undefined,
        inputError: sufficientBalance ? undefined : `Insufficient ${CURRENCY_LABELS[chainId]} balance`
      }
    } else if (currencyEquals(WMOVR[chainId], inputCurrency) && (outputCurrency === MOVR || outputCurrency === GLMR || outputCurrency === DEV)) {
      return {
        wrapType: WrapType.UNWRAP,
        execute:
          sufficientBalance && inputAmount
            ? async () => {
              try {
                const txReceipt = await wethContract.withdraw(`0x${inputAmount.raw.toString(16)}`)
                addTransaction(txReceipt, { summary: `Unwrap ${inputAmount.toSignificant(6)} ${WRAPPED_CURRENCY_LABELS[chainId]} to ${CURRENCY_LABELS[chainId]}` })
              } catch (error) {
                console.error('Could not withdraw', error)
              }
            }
            : undefined,
        inputError: sufficientBalance ? undefined : `Insufficient ${WRAPPED_CURRENCY_LABELS[chainId]} balance`
      }
    } else {
      return NOT_APPLICABLE
    }
  }, [wethContract, chainId, inputCurrency, outputCurrency, inputAmount, balance, addTransaction])
}
