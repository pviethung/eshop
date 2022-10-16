import styled from 'styled-components';
import { transition } from './../GlobalStyle/index';

export const ProductSizes = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  flex-wrap: wrap;
  gap: 15px;
  p {
    width: 100%;
    margin-bottom: 0;
    font-weight: 500;
    color: #000;
    text-transform: uppercase;
  }
`;
export const ProductSize = styled.div<{ active?: boolean }>`
  input {
    display: none;
  }
  label {
    display: block;
    cursor: pointer;
    transition: ${transition};
    padding: 15px;
    background-color: ${(props) =>
      props.active ? props.theme.mainColor : '#e5e7eb'};
    color: ${(props) => props.active && '#fff'};
    border-radius: 3px;
  }
`;
