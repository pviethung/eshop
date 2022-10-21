import { animated } from '@react-spring/web';
import styled from 'styled-components';

export const Container = styled.div``;

export const DesktopSearch = styled(animated.div)`
  position: fixed;
  top: 150px;
  left: 15%;
  width: 70%;
  > svg {
    position: absolute;
    right: 0;
    top: 5px;
    cursor: pointer;
  }
`;
export const SearchWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  svg {
    cursor: pointer;
    margin-left: -40px;
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
  max-height: 324px;
  overflow-y: auto;
  width: calc(100% - 45px);
  list-style: none;

  @media (max-width: 768px) {
    width: 100%;
  }
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
