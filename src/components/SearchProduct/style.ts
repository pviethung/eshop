import { animated } from '@react-spring/web';
import styled from 'styled-components';

export const Container = styled.div``;
export const SearchWrap = styled(animated.div)`
  position: fixed;
  top: 150px;
  left: 15%;
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  svg {
    cursor: pointer;
    &:first-of-type {
      margin-left: -40px;
    }
    &:last-of-type {
      margin-left: 15px;
    }
  }
`;
export const SearchInput = styled.input`
  background-color: #fff;

  border: 1px solid #e5e5e5;
  padding: 15px;
  width: calc(100% - 45px);
  height: 50px;
  outline-color: ${(props) => props.theme.mainColor};
`;

export const ResultWrap = styled.ul`
  background-color: #fff;

  width: calc(100% - 45px);
  list-style: none;
`;
export const ResultItem = styled.li`
  border: 1px solid #e5e5e5;
  border-top: 0;
  padding: 15px;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    p {
      text-transform: capitalize;
      margin-bottom: 0;
      margin-left: 10px;
    }
  }
`;
