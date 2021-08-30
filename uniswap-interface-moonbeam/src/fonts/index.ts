import { createGlobalStyle } from 'styled-components';

import CarnivaleeFreakshowWOFF from '../fonts/CarnivaleeFreakshow.woff'
import CarnivaleeFreakshowWOFF2 from '../fonts/CarnivaleeFreakshow.woff2'

export default createGlobalStyle`
  @font-face {
    font-family: 'Carnivalee Freakshow';
    src: local('Carnivalee Freakshow'), local('Carnivalee Freakshow'),
    url(${CarnivaleeFreakshowWOFF2}) format('woff2'),
    url(${CarnivaleeFreakshowWOFF}) format('woff');
    font-weight: 300;
    font-style: normal;
  }
`