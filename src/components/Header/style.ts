import styled from 'styled-components';
import { boxShadow, transition } from './../GlobalStyle/index';

interface ActionItemProps {
  width?: number;
}

export const MobileSearch = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    width: 100%;
    input {
      width: 100%;
    }
  }
`;
export const StyledHeader = styled.header`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  a {
    text-decoration: none;
    color: initial;
  }
  display: flex;
  position: relative;
  justify-content: center;

  @media (max-width: 768px) {
    align-items: center;
    flex-wrap: wrap;

    position: sticky;
    top: 0;
    z-index: 2;
    background-color: #fff;
    padding-bottom: 20px;
  }
`;

export const Popover = styled.div`
  background-color: #fff;
  position: absolute;
  width: max-content;
  padding: 20px 40px;
  right: 0;
  visibility: hidden;
  font-size: 2rem;
  opacity: 0;
  transition: ${transition};
  box-shadow: ${boxShadow};
  span {
    color: #000;
    font-weight: 700;
  }
  a {
    color: ${(props) => props.theme.mainColor};
    display: block;
    + a {
      margin-top: 10px;
    }
  }
`;

export const ActionItem = styled.li<ActionItemProps>`
  user-select: none;
  font-size: ${(props) => (props.width ? props.width : 24) + 'px'};
  cursor: pointer;
  position: relative;

  &:hover {
    svg {
      fill: ${(props) => props.theme.mainColor};
    }
    ${Popover} {
      visibility: visible;
      opacity: 1;
    }
  }

  a {
    position: relative;
    span {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      position: absolute;
      background: ${(props) => props.theme.mainColor};
      font-size: 12px;
      text-align: center;
      line-height: 30px;
      top: 10px;
      left: 15px;
      color: #fff;
    }
  }
`;

export const Actions = styled.ul`
  position: absolute;
  right: 15px;
  top: 50%;
  display: flex;
  list-style: none;
  ${ActionItem} {
    margin-left: 24px;
  }

  @media (max-width: 768px) {
    top: 35px;
    ${ActionItem} {
      &:first-child {
        display: none;
      }
    }
  }
`;
