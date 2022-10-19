import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
`;
export const InputWrap = styled.div<{ error?: boolean }>`
  display: flex;
  height: 40px;
  width: 100%;
  border: 1px solid #e5e5e5;
  outline: none;
  font-size: 18px;
  color: #777;
  button {
    font-size: 16px;
    padding: 0 10px;
    border: 1px solid ${(props) => props.theme.mainColor};
    margin-top: -1px;
    height: 40px;
  }
  input {
    padding: 6px 12px;
    width: 100%;
    height: 100%;
    border: 0;
    &:focus {
      outline: #fa6b6b solid 1px;
    }
  }
  position: relative;
  ${(props) =>
    props.error &&
    css`
      &::after {
        content: 'invalid code';
        position: absolute;
        bottom: -25px;
        font-size: 14px;
        color: #f00;
        left: 0;
      }

      input {
        outline: red solid;
      }
    `}
`;
export const Success = styled.div`
  cursor: pointer;
  position: absolute;
  font-size: 12px;
  left: 0;
  bottom: -45px;
  padding: 10px 10px 10px 40px;
  background-color: #e5e5e5;
  background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' %3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg%0Afill='%23777' enable-background='new 0 0 48 48' height='48px' id='Layer_4' version='1.1' viewBox='0 0 48 48' width='48px' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%0A%3E%3Cg%3E%3Cpath d='M29.326,19.476c-0.276,0.278-0.306,0.648-0.084,1.113c0.217,0.464,0.682,1.046,1.391,1.746 c0.708,0.698,1.298,1.158,1.77,1.377c0.475,0.218,0.849,0.186,1.123-0.092c0.529-0.535,0.09-1.497-1.316-2.884 C30.813,19.36,29.852,18.939,29.326,19.476z' /%3E%3Cpath d='M28.075-0.003L0,28.076L19.927,48l28.076-28.078V0.003L28.075-0.003z M21.897,29.093c-0.906,0.922-1.94,1.308-3.097,1.154 c-1.155-0.148-2.359-0.84-3.608-2.073c-2.549-2.516-2.875-4.736-0.975-6.66c0.929-0.943,1.974-1.34,3.133-1.193 c1.159,0.147,2.353,0.827,3.582,2.038c1.282,1.266,2.001,2.465,2.156,3.596C23.241,27.089,22.844,28.135,21.897,29.093z M26.519,33.866l-5.537-18.857L22.964,13l5.535,18.86L26.519,33.866z M35.234,25.339c-0.909,0.919-1.942,1.308-3.099,1.154 c-1.156-0.149-2.357-0.837-3.602-2.065c-2.549-2.516-2.874-4.736-0.976-6.662c0.931-0.942,1.976-1.34,3.136-1.192 c1.157,0.147,2.353,0.826,3.579,2.037c1.278,1.26,1.993,2.459,2.148,3.59C36.576,23.334,36.181,24.381,35.234,25.339z M42.672,9.552c-1.166,1.165-3.055,1.165-4.225,0.002c-1.165-1.169-1.165-3.059-0.002-4.228c1.168-1.166,3.062-1.166,4.227-0.002 C43.841,6.496,43.843,8.383,42.672,9.552z' /%3E%3Cpath d='M15.982,23.221c-0.277,0.28-0.305,0.652-0.084,1.115c0.218,0.464,0.683,1.046,1.391,1.747 c0.708,0.699,1.298,1.157,1.771,1.375c0.472,0.22,0.848,0.19,1.123-0.09c0.526-0.535,0.089-1.497-1.316-2.885 C17.471,23.107,16.509,22.688,15.982,23.221z' /%3E%3C/g%3E%3C/svg%3E%0A");
  background-repeat: no-repeat;
  background-size: 20px;
  background-position: 10px center;
  span {
    font-size: 14px;
    user-select: none;
    margin-left: 10px;
  }
  &:hover {
    span {
      color: red;
    }
  }
`;
