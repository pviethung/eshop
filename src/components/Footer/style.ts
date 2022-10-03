import { StyledLogo } from './../Logo/style';
import { StyledField } from './../form-fields/FormField/style';
import styled from 'styled-components';

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
