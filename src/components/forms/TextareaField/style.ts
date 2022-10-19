import styled, { css } from 'styled-components';

export const StyledTextareaField = styled.div<{
  error?: string | undefined;
}>`
  label {
    margin-bottom: 10px;
    display: block;
    span {
      color: #fa6b6b;
      font-weight: 400;
      font-size: 16px;
      line-height: 1em;
    }
  }
  textarea {
    padding: 15px;
    width: 100%;
    resize: none;
    border: 1px solid #e5e5e5;
    &:focus {
      outline: none;
      border-color: ${(props) => props.theme.mainColor};
    }
  }
  ${(props) =>
    props.error &&
    css`
      position: relative;
      textarea {
        outline: #f00 solid;
      }
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
