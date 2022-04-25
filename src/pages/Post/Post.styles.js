import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  margin-top: 20px;
`;

export const PostItem = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  background-color: #bca65e;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 20px;
  position: relative;

  h4 {
    color: #fff;
  }
  img {
    width: 50%;
    max-height: 300px;
    margin: 20px auto;
    object-fit: contain;
  }
  p {
    color: #fff;
  }
`;

export const CommentItem = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  background-color: #c9bc8e;
  border-radius: 10px;
  padding: 15px;
  p {
    color: #fff;
  }
`;

export const FooterItem = styled.div`
  color: #fff;
  position: relative;
  bottom: 0;
  left: 0;
  display: flex;
  column-gap: 20px;
  align-items: center;

  svg {
    font-size: 1.2rem;
    cursor: pointer;
  }
  svg:hover {
    color: #ffc107;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  .icons {
    display: flex;
    column-gap: 14px;
    font-size: 1.2rem;
    svg {
      cursor: pointer;
    }
    svg:hover {
      color: #f8e076;
    }
  }
`;

export const CommentForm = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;

  button {
    margin-top: 10px;
    margin-right: 10px;
    width: 150px;
  }
`;
