import styled from 'styled-components';

export const MenuWrap = styled.div``;
export const Trigger = styled.button`
  background-color: unset;
  border: 0;
  margin-left: 10px;
  @media (min-width: 993px) {
    display: none;
  }
`;
export const Container = styled.div`
  .bm-overlay,
  .bm-menu-wrap {
    top: 0;
    left: 0;
    display: block !important;
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
