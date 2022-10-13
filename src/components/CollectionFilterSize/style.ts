import styled from 'styled-components';

export const Sizes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;
export const SizeItem = styled.div<{ active: boolean }>`
  user-select: none;
  border: 2px solid transparent;
  border-radius: 3px;
  border-color: ${(props) =>
    props.active ? props.theme.mainColor : undefined};
  cursor: pointer;
  padding: 10px;
  min-width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #f5f5f5;
`;
