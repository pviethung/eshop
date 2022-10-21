import styled from 'styled-components';
import { StyledButton } from '../Button/style';

export const Container = styled.div`
  position: sticky;
  top: 20px;
  text-transform: uppercase;
  > p {
    padding: 15px;
    font-weight: 700;
    color: #000;
    margin-bottom: 0;
  }
  > h4 {
    color: ${(props) => props.theme.mainColor};
    font-weight: 500;
    padding-left: 15px;
    font-size: 2rem;
    margin-bottom: 20px;
    text-transform: none;
  }
  ${StyledButton} {
    font-size: 1.75rem;
    display: block;
    width: max-content;
    + ${StyledButton} {
      margin-top: 20px;
    }
  }

  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;
