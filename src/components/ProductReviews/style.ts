import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  background-color: #fafafa;
`;
export const CommentList = styled.ul`
  list-style: none;
  max-height: 415px;
  overflow-y: auto;
`;

export const CommentRating = styled.div`
  > div {
    margin: 0 0 15px;
    text-align: right;
  }
  p {
    font-size: 14px;
    text-align: right;
  }
`;
export const CommentItem = styled.li`
  background-color: #fff;
  margin-bottom: 15px;
  padding: 10px;
  min-height: 80px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  > div {
    max-width: calc(100% - 125px);
    > h4 {
      margin-bottom: 15px;
    }
  }
`;
export const CommentForm = styled.div`
  form {
    display: flex;
    flex-direction: column;
    > div:first-child {
      display: flex;
      align-items: center;
      margin: 30px 0 15px;

      > div,
      p {
        margin: 0;
      }
      > p {
        margin-right: 10px;
      }
    }
    > div:last-child {
      display: flex;
      align-items: flex-start;
    }
  }
`;

export const CommentTextArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  p {
    margin: 10px 0 0;
    height: 18.4px;
  }
  textarea {
    border-color: #e5e5e5;
    outline: none;
    padding: 6px 12px;
  }
  p {
    color: red;
    margin-top: 10px;
  }
`;
