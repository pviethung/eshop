import styled from 'styled-components';
import { StyledField } from '../forms/InputField/style';
import { StyledLogo } from './../Logo/style';

export const Container = styled.div``;

export const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;

export const NewsLetterTitle = styled.div`
  height: 60px;
  border: 1px solid #e5e5e5;
  border-right: none;
  padding: 15px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;

  @media (max-width: 992px) {
    border: 0;
  }
`;

export const FooterNewsLetter = styled.div<{ error?: string | undefined }>`
  display: flex;
  align-items: center;
  justify-content: center;
  form {
    display: flex;
    ${StyledField} {
      width: 350px;
      border-left: none;
      height: 60px;
      input {
        outline: ${(props) => !props.error && 'none'};
      }
    }
  }

  @media (max-width: 992px) {
    flex-wrap: wrap;
    form {
      flex-wrap: wrap;
      gap: 30px;
      justify-content: center;
      ${StyledField} {
        border-left: 1px solid #e5e5e5;
      }
    }
  }
  @media (max-width: 768px) {
    form {
      width: 100%;
      > div {
        width: 100%;
      }
      ${StyledField} {
        width: 100%;
      }
    }
  }
`;

export const FooterCopyright = styled.div`
  margin-top: 80px;
  border-top: 1px solid #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  > span {
    color: #777;
  }
  ${StyledLogo} {
    margin: -60px -60px -60px 0;
    scale: 0.5;
  }
`;
