import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px 0;
  .react-rater-star.is-active,
  .react-rater-star.is-active-half:before {
    color: ${(props) => props.theme.mainColor};
  }
`;
