import styled from "styled-components";

export const PostItemContainer = styled.div`
  background-color: ${(props) => props.bg};
  padding: 10px 15px;
  height: 90px;
  .post-item-header {
    display: flex;
    justify-content: space-between;
    h5 {
      cursor: pointer;
    }
    h5:hover {
      color: #bca65e;
      text-decoration: underline;
    }
  }

  .announcement-item-header {
    display: flex;
    justify-content: space-between;
  }

  .post-item-icons {
    display: flex;
    column-gap: 14px;
    font-size: 1.2rem;

    svg {
      cursor: pointer;
    }
    svg:hover {
      color: #bca65e;
    }
  }
`;
