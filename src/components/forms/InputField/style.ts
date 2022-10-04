import styled, { css } from 'styled-components';

export const Container = styled.div``;
export const Label = styled.label`
  margin-bottom: 10px;
  display: inline-block;
  span {
    color: ${(props) => props.theme.mainColor};
    font-weight: 400;
    font-size: 16px;
    line-height: 1em;
  }
`;
export const StyledField = styled.div<{ error: string | undefined }>`
  margin-bottom: 30px;
  height: 40px;
  width: 100%;
  border: 1px solid #e5e5e5;
  outline: none;
  font-size: 18px;
  color: #777;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;

  &:first-child:last-child {
    margin: 0;
  }
  input {
    padding: 6px 12px;
    width: 100%;
    height: 100%;
    border: 0;
    &:focus {
      outline: ${(props) =>
        props.error ? 'none' : props.theme.mainColor + ' solid 1px'};
    }
  }

  ${(props) =>
    props.error &&
    css`
      outline: red solid 2px;
      position: relative;
      &::after {
        content: '${props.error}';
        position: absolute;
        bottom: -25px;
        font-size: 14px;
        color: red;
        left: 0;
      }
    `}
`;
