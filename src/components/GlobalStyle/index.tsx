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
  p {
    font-weight: 400;
    color: #777;
    margin-bottom: 15px;
  }

  .loading-spinner {
    text-align: center;
  }
  .react-rater > * {
    padding: 0 2px;
  }
 
  .enlargedImageContainer {
    z-index: 1;
  }
  #app-portal {
    position: relative;
    z-index: 1;
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
export const boxShadow = '5px 5px 10px #00000014';
export default GlobalStyle;
