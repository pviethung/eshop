import styled, { css } from 'styled-components';

export const StyledField = styled.div<{ error: string | undefined }>`
  height: 40px;
  width: 100%;
  border: 1px solid #e5e5e5;
  outline: none;
  font-size: 18px;
  color: #777;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;

  input {
    padding: 6px 12px;
    width: 100%;
    height: 100%;
    border: 0;
    outline: ${(props) => props.theme.mainColor + 'solid 1px'};
  }

  ${(props) =>
    props.error &&
    css`
      outline: red solid 2px;
      position: relative;
      &::after {
        content: '${props.error}';
        position: absolute;
        bottom: -30px;
        color: red;
        left: 0;
      }
    `}
`;
