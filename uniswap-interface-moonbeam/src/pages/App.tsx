import React, { Suspense } from 'react'
import GlobalFonts from '../fonts/index';
import { HashRouter, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import GoogleAnalyticsReporter from '../components/analytics/GoogleAnalyticsReporter'
import Header from '../components/Header'
import Popups from '../components/Popups'
import Web3ReactManager from '../components/Web3ReactManager'
import DarkModeQueryParamReader from '../theme/DarkModeQueryParamReader'
import AddLiquidity from './AddLiquidity'
import {
  RedirectDuplicateTokenIds,
  RedirectOldAddLiquidityPathStructure,
  RedirectToAddLiquidity
} from './AddLiquidity/redirects'
import Pool from './Pool'
import PoolFinder from './PoolFinder'
import Swap from './Swap'
import RemoveLiquidity from './RemoveLiquidity'
import { RedirectPathToSwapOnly, RedirectToSwap } from './Swap/redirects'
import { RedirectOldRemoveLiquidityPathStructure } from './RemoveLiquidity/redirects'

import ProfitCircusIcon from '../../src/assets/images/profit_circus_icon.png'

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  overflow-x: hidden;
`

const HeaderWrapper = styled.div`
  ${({ theme }) => theme.flexRowNoWrap}
  width: 100%;
  justify-content: space-between;
`

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 160px;
  align-items: center;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 10;

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
      padding: 16px;
  `};

  z-index: 1;
`

const Marginer = styled.div`
  margin-top: 5rem;
`

const ProfitCircusAD = styled.div`
  position: absolute;
  top: 150px;
  right: 50px;
  height: 150px;
  width: 150px;
  padding: 13px;
  display: flex;
  align-items: flex-end;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${ProfitCircusIcon});
  cursor: pointer;

  @media (max-width: 900px) {
    position: relative;
    top: 0;
    right: 0;
  }
`

const APY = styled.div`
  font-family: 'Carnivalee Freakshow', sans-serif;
  font-size: 25px;
  color: #FA8E48;
  position: relative;
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 5px;
`

export default function App() {
  const [apy, setAPY] = React.useState<any>();

  const apyURL = 'https://moonriver-api.seascape.network/profit-circus/credentials'
  const profitCircusURL = 'https://moonriver.seascape.network/index/product/circus.html'

  const getAPY = async () => {
    const response = await fetch(apyURL)
    const json = await response.json()
    setAPY(Math.round(json.apy))
  }

  React.useEffect(() => {
    getAPY()
  }, [])

  return (
    <Suspense fallback={null} >
      <GlobalFonts />
      <HashRouter>
        <Route component={GoogleAnalyticsReporter} />
        <Route component={DarkModeQueryParamReader} />
        <AppWrapper >
          <HeaderWrapper>
            <Header  />
          </HeaderWrapper>
          <BodyWrapper >
            <Popups />
            <Web3ReactManager>
              <Switch>
                <Route exact strict path="/swap" component={Swap} />
                <Route exact strict path="/swap/:outputCurrency" component={RedirectToSwap} />
                <Route exact strict path="/send" component={RedirectPathToSwapOnly} />
                <Route exact strict path="/find" component={PoolFinder} />
                <Route exact strict path="/pool" component={Pool} />
                <Route exact strict path="/create" component={RedirectToAddLiquidity} />
                <Route exact path="/add" component={AddLiquidity} />
                <Route exact path="/add/:currencyIdA" component={RedirectOldAddLiquidityPathStructure} />
                <Route exact path="/add/:currencyIdA/:currencyIdB" component={RedirectDuplicateTokenIds} />
                <Route exact strict path="/remove/:tokens" component={RedirectOldRemoveLiquidityPathStructure} />
                <Route exact strict path="/remove/:currencyIdA/:currencyIdB" component={RemoveLiquidity} />
                <Route component={RedirectPathToSwapOnly} />
              </Switch>
            </Web3ReactManager>
            {!!apy &&
              <ProfitCircusAD onClick={() => window.open(profitCircusURL)}>
                <APY>Season ended</APY>
              </ProfitCircusAD>
            }
            <Marginer />
          </BodyWrapper>
        </AppWrapper>
      </HashRouter>
    </Suspense>
  )
}
