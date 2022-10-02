import { StyledBanner } from '../Banner/style';
import styled from 'styled-components';
import Banner from '../Banner';

export const Container = styled.div`
  display: flex;
  ${StyledBanner} {
    width: 33.333%;
  }
`;
