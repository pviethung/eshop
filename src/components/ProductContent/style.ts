import styled from 'styled-components';
import { StyledButton } from './../Button/style';
import { StyledField } from './../forms/InputField/style';
import { StyledPageTitle } from './../PageTitle/styles';

export const Container = styled.div`
  ${StyledPageTitle} {
    text-align: left;
    margin-bottom: 20px;
  }
`;
export const ProductAvailability = styled.p`
  span {
    color: ${(props) => props.theme.mainColor};
    font-weight: 700;
  }
`;

export const ProductPrice = styled.h3`
  font-size: 4rem;
  font-weight: 400;
`;
export const ProductDescription = styled.div`
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  padding: 30px 0;
  font-weight: 300;
  margin-bottom: 20px;
`;

export const ProductTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 40px;
  gap: 15px;
  > div {
    padding: 15px;
    background-color: #e5e7eb;
    border-radius: 3px;
  }
`;

export const ProductAddToCart = styled.div`
  margin-bottom: 50px;
  ${StyledField} {
    height: 80px;
    width: 80px;
    input {
      text-align: center;
    }
    &::after {
      width: max-content;
    }
  }
  ${StyledButton} {
    flex: 1;
    height: 80px;
  }
  form {
    display: flex;
    align-items: center;
    label {
      margin-right: 20px;
      font-weight: 500;
      text-transform: uppercase;
    }
  }
`;

export const ProductTabs = styled.div``;
