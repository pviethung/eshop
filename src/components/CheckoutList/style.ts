import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px 40px;
  border: 1px solid #e5e5e5;
`;
export const ListProduct = styled.ul`
  list-style: none;
`;
export const ProductItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;
export const ItemImage = styled.div``;
export const ItemContent = styled.div`
  padding-left: 15px;
  max-width: calc(100% - 200px);
  > h3 {
    color: ${(props) => props.theme.mainColor};
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    padding-right: 10px;
    font-weight: 500;
    font-size: 1.6rem;
    text-transform: uppercase;
  }
  > p {
    margin: 10px 0;
  }
`;
export const ItemPrice = styled.div`
  margin-left: auto;
`;
