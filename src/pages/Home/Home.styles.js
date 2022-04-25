import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 50px;
  margin-top: 20px;
`;

export const HomeItem = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  .item-header {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
    background-color: #bca65e;
    height: 45px;
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .item-content {
    display: flex;
    flex-direction: column;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding-bottom: 10px;
  }
`;
