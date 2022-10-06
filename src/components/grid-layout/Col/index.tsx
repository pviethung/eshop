import styled from 'styled-components';

interface ColProps {
  w: number;
  children: React.ReactNode;
}

const Contaier = styled.div<ColProps>`
  width: ${(props) => +props.w * 100}%;
  padding: 0 15px;
`;

const Col = (props: ColProps) => {
  return <Contaier {...props}>{props.children}</Contaier>;
};
export default Col;
