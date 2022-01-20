import { ChainId } from 'seadexswap-test-moonriver'
import MULTICALL_ABI from './abi.json'
import { multicall } from '../../moonbase_address.json'
import { multicall as riverMulticall } from '../../moonriver_address.json'
import { multicall as beamMulticall } from '../../moonbeam_address.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441',
  [ChainId.STANDALONE]: '0xF8cef78E923919054037a1D03662bBD884fF4edf',
  [ChainId.MOONROCK]: multicall,
  [ChainId.MOONBASE]: multicall,
  [ChainId.MOONSHADOW]: multicall,
  [ChainId.MOONRIVER]: riverMulticall,
  [ChainId.MOONBEAM]: beamMulticall
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
