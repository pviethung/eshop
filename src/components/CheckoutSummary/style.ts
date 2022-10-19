import styled from 'styled-components';
import ButtonWithState from '../ButtonWithState';

export const SButtonWithState = styled(ButtonWithState)``;
export const Container = styled.div`
  border: 1px solid #e5e5e5;
  padding: 30px 40px;
  > h2,
  h3 {
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    text-transform: uppercase;

    span:last-child {
      color: ${(props) => props.theme.mainColor};
    }
  }
  > h3 {
    margin-bottom: 20px;
  }
  > h2 {
    margin-top: 30px;
  }
  ${SButtonWithState} {
    margin-top: 30px;
    width: 100%;
  }
`;
export const Promotion = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;
