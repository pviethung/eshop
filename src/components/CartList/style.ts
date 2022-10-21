import styled from 'styled-components';

export const Container = styled.ul``;

export const CartLineHeader = styled.div`
  margin-bottom: 15px;
  border: 1px solid #e5e5e5;
  padding: 15px 0;
  display: flex;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;

  > div:first-child {
    width: 60%;
  }
  > div:nth-child(2) {
    width: 162px;
  }
  > div:last-child {
    flex: 1;
  }
`;
export const CartLineItem = styled.li`
  position: relative;
  padding: 15px 0;
  display: flex;
`;

export const ItemImage = styled.div`
  max-width: 160px;
  margin-right: 20px;
`;

export const Quantity = styled.div`
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  height: 40px;
  width: max-content;
  > form {
    position: relative;
    height: 100%;
    display: flex;
    > input {
      outline: none;
      color: #000;
      width: 60px;
      text-align: center;
      border: 0;
    }
    > button {
      cursor: pointer;
      outline: none;
      background-color: #fff;
      border: 0;
      font-size: 3rem;
      font-weight: 300;
      width: 50px;
      height: 100%;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ItemContent = styled.div`
  width: calc(60% - 140px);

  ${Quantity} {
    display: none;
  }

  @media (max-width: 768px) {
    flex: 1;
    ${Quantity} {
      display: block;
    }
  }
`;

export const Title = styled.h4`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  font-weight: 500;
  font-size: 1.8rem;
  text-transform: capitalize;
  margin-bottom: 10px;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.mainColor};
  }
`;

export const Price = styled.p`
  flex: 1;
  text-align: center;
  font-weight: 500;
  color: #000;
  font-size: 18px;
  ${ItemContent} & {
    text-align: left;
  }

  @media (max-width: 768px) {
    flex: unset;
    width: max-content;
  }
`;

export const Vendor = styled.p`
  text-transform: uppercase;
  font-weight: 500;
  color: #000;
`;

export const InputError = styled.p`
  color: red;
  position: absolute;
  top: 50px;
`;
export const Size = styled.p`
  font-weight: 500;
`;

export const DeleteLine = styled.div`
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 0;

  @media (max-width: 768px) {
    top: 90px;
  }
`;
