import { StyledButton } from './../Button/style';
import styled from 'styled-components';

export const ProductActions = styled.div`
  position: absolute;
  bottom: -47px;
  width: 100%;
  background-color: #fff;
  left: 0;
  padding-bottom: 20px;
  display: none;
  z-index: 1;
`;

export const ProductInner = styled.div``;

export const Container = styled.div`
  padding: 0 15px;
  &:hover {
    ${ProductInner} {
      box-shadow: 5px 5px 10px #00000014;
    }
    ${ProductActions} {
      display: block;
      box-shadow: 5px 8px 10px #00000014;
    }
  }
`;

export const ProductImage = styled.div``;

export const ProductContent = styled.div`
  text-align: center;
  padding: 20px;
  position: relative;
`;

export const ProductTitle = styled.h4`
  font-weight: 500;
  text-transform: uppercase;
`;

export const ProductPrice = styled.p`
  font-size: 2.5rem;
  margin: 15px 0;
  color: ${(props) => props.theme.mainColor};
`;

export const ProductAddBtn = styled(StyledButton)`
  border-color: #000;
  color: #000;
  &:hover {
    border-color: #000;
    background-color: #000;
    color: #fff;
  }
`;