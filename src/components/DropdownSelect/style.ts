import styled from 'styled-components';

export const Container = styled.div`
  .dropdown-select-container {
    .dropdown-select__control--is-focused {
      box-shadow: 0 0 0 1px ${(props) => props.theme.mainColor};
      border-color: ${(props) => props.theme.mainColor};
    }
  }
`;
