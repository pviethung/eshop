import styled from 'styled-components';
import { transition } from './../GlobalStyle/index';

export const Container = styled.div`
  .react-tabs__tab-list {
    border: none;
  }

  .react-tabs__tab {
    border: none;
    padding: 0;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;

    h3 {
      padding: 20px;
      font-weight: 400;
      font-size: 2rem;
      border-bottom: 4px solid transparent;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
      box-shadow: none;
      transition: ${transition};
      translate: 0 0;
    }
    &.react-tabs__tab--selected {
      h3 {
        background-color: #e5e7eb;
        border-bottom: 4px solid ${(props) => props.theme.mainColor};
        translate: 0 -10px;
        box-shadow: 5px 5px 10px #00000014;
      }
    }
  }
`;
