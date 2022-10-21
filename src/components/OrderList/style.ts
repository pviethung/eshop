import styled from 'styled-components';
import { DeleteLine, Quantity } from './../CartList/style';

export const Container = styled.div``;
export const OrderLine = styled.div`
  > p {
    > span {
      font-weight: 500;
      color: #000;
    }
  }
  & + & {
    margin-top: 60px;
  }
`;
export const OrderSummary = styled.div`
  display: flex;
  p {
    color: #000;
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    &:first-child {
      width: 60%;
      text-align: right;
      padding-right: 50px;
    }
    &:nth-child(2) {
      width: 160px;
    }
    &:last-child {
      flex: 1;
    }
  }
`;
export const OrderVariants = styled.div`
  ${DeleteLine} {
    display: none;
  }
  ${Quantity} {
    width: 160px;
    border: none;
    display: flex;
    justify-content: center;
    input {
      pointer-events: none;
    }
    button {
      display: none;
    }
  }

  @media (max-width: 768px) {
    ${Quantity} {
      width: max-content;
    }
  }
`;
