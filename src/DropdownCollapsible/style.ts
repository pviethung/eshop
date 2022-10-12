import styled from 'styled-components';

export const StyledCollapsibleTrigger = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    font-size: 25px;
    color: ${(props) => props.theme.mainColor};
  }
  svg:last-child {
    display: none;
  }
  .is-open & {
    svg:last-child {
      display: block;
    }
    svg:first-child {
      display: none;
    }
  }
`;
export const Container = styled.div`
  .Collapsible {
    cursor: pointer;
    .Collapsible__contentOuter {
      border-bottom: 1px solid #e5e5e5;
    }
    .Collapsible__trigger {
      padding: 20px;
      display: block;
      font-size: 2rem;
      text-transform: uppercase;
      font-weight: 500;
    }
    .Collapsible__contentInner {
      padding: 20px;
    }
  }
`;
