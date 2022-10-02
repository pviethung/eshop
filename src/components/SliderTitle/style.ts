import styled from 'styled-components';

export const Container = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 3rem;
  margin-bottom: 30px;
  color: ${(props) => props.theme.textColor};
`;
