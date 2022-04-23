import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const MobileMenu = styled.div`
  position: absolute;
  display: none;
  top: 10px;
  right: 5px;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  @media screen and (max-width: 1200px) {
    display: block;
  }
`;

export const SideBarContainer = styled.div`
  background-color: #c9bc8e;
  width: 280px;
  height: calc(100vh - 50px);
  @media screen and (max-width: 1200px) {
    position: fixed;
    top: 0;
    height: 100vh;
    z-index: 999;
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
