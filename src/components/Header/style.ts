import styled from 'styled-components';

interface ActionItemProps {
  width?: number;
}

export const StyledHeader = styled.header`
  a {
    text-decoration: none;
    color: initial;
  }
  display: flex;
  position: relative;
  justify-content: center;
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
