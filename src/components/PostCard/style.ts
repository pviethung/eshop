import { transition } from './../GlobalStyle/index';
import styled from 'styled-components';

export const PostCreatedAt = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 70px;
  height: 70px;
  background-color: ${(props) => props.theme.mainColor};
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  color: #fff;
  transition: all 0.5s;
  span {
    z-index: 2;
  }
  span:first-child {
    font-size: 3rem;
    font-weight: 500;
  }

  &::after {
    content: '';
    position: absolute;
    transition: all 0.5s;
    border-radius: 50%;
    width: 0;
    height: 0;
    background-color: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
`;

export const Container = styled.div`
  &:hover {
    ${PostCreatedAt} {
      color: ${(props) => props.theme.mainColor};
      background-color: #fff;
      &::after {
        width: 70px;
        height: 70px;
      }
    }
  }
`;

export const PostImage = styled.a`
  display: block;
  position: relative;
  margin-bottom: 34px;
  img {
    transition: ${transition};
  }
  &:hover {
    img {
      scale: 1.1;
    }
  }
`;

export const PostTitle = styled.a`
  display: block;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 2.2rem;
  color: ${(props) => props.theme.mainColor};
  margin-bottom: 14px;
  transition: ${transition};
  &:hover {
    color: ${(props) => props.theme.textColor};
  }
`;

export const PostAuthor = styled.p`
  span {
    font-weight: 500;
    font-style: italic;
    font-size: 1.8rem;
  }
  margin-bottom: 14px;
`;

export const PostContent = styled.p`
  font-weight: 300;
  line-height: 1.5;
  color: ${(props) => props.theme.grayColor};
`;
