// import * as styled from 'styled-components';

import styled, { createGlobalStyle } from 'styled-components';
import { reset } from './reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  :root {
    font-size: 62.5%;
  }
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    font-size: 1.6rem;
    font-family: 'Ubuntu', sans-serif;
  }
`;

export const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const borderSm = '3px';
export const borderMd = '10px';
export const borderLg = '15px';

export const screen = {
  sm: '576',
  md: '768',
  lg: '992',
  xl: '1200',
};

export const transition = 'all 0.2s ease-in';
export const colors = ['#fa6b6b', '#7635dc', '#00AB55', '#1ccaff', '#2065d1'];

export default GlobalStyle;
