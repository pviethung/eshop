import styled from 'styled-components';

interface ColProps {
  w: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  children: React.ReactNode;
}

const Contaier = styled.div<ColProps>`
  width: ${(props) => +props.w * 100}%;
  padding: 0 15px;

  @media (max-width: 1200px) {
    width: ${(props) => props.xl && `${+props.xl * 100}%`};
  }
  @media (max-width: 992px) {
    width: ${(props) => props.lg && `${+props.lg * 100}%`};
  }
  @media (max-width: 768px) {
    width: ${(props) => props.md && `${+props.md * 100}%`};
  }
  @media (max-width: 576px) {
    width: ${(props) => props.sm && `${+props.sm * 100}%`};
  }
`;

const Col = (props: ColProps) => {
  return <Contaier {...props}>{props.children}</Contaier>;
};
export default Col;
