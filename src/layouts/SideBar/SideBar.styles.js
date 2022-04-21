import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const SideBarContainer = styled.div`
  background-color: #c9bc8e;
  width: 250px;
  height: calc(100vh - 50px);
  @media screen and (max-width: 720px) {
    display: none;
  }
`;

export const SideMenu = styled.ul`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  height: auto;
  row-gap: 30px;
`;

export const SideList = styled.li`
  color: #fff;
`;

export const SideLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  &.active {
    color: #000;
  }

  span {
    margin-left: 10px;
  }
`;
