import styled from 'styled-components';

interface ActionItemProps {
  width?: number;
}

export const StyledHeader = styled.header`
  display: flex;
  position: relative;
  justify-content: center;
`;

export const Logo = styled.div`
  h1 {
    font-size: 6rem;
    display: flex;
    align-items: center;
    > svg {
      fill: ${(props) => props.theme.mainColor};
      margin-right: 5px;
      font-size: 8rem;
    }
    > div {
      span:first-child {
        font-weight: 700;
        color: ${(props) => props.theme.mainColor};
      }
      span:last-child {
        font-weight: 400;
      }
      > span:last-child {
        display: block;
        font-size: 1.2rem;
        letter-spacing: 1px;
        text-transform: uppercase;
        font-weight: 300;
        color: ${(props) => props.theme.grayColor};
      }
    }
  }
`;

export const ActionItem = styled.li<ActionItemProps>`
  font-size: ${(props) => (props.width ? props.width : 24) + 'px'};
  cursor: pointer;
`;

export const Actions = styled.ul`
  position: absolute;
  right: 0;
  top: 50%;
  display: flex;
  list-style: none;
  ${ActionItem} {
    margin-left: 24px;
  }
`;
