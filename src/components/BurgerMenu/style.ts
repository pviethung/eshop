import styled from 'styled-components';
import { NavList, NavListItem } from './../NavBar/style';

export const Container = styled.div`
  ${NavList} {
    display: block;
  }
  ${NavListItem} {
    margin-bottom: 20px;
    color: #000;
  }
  .bm-burger-button {
    position: fixed;
    width: 30px;
    height: 25px;
    left: 20px;
    top: 35px;
  }
  .bm-burger-bars {
    background: ${(props) => props.theme.mainColor};
  }
  .bm-burger-bars-hover {
    background: #a90000;
  }

  .bm-cross {
    height: 20px !important;
  }

  .bm-menu {
    background: #fff;
  }

  .bm-item-list {
    color: #b8b7ad;
    padding: 0.8em;
  }
  .bm-item {
    display: block;
  }
`;
