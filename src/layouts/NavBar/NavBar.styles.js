import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { DropdownButton } from "react-bootstrap";

export const NavContainer = styled.nav`
  background-color: #bca65e;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const NavLogo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  span {
    margin: 10px;
  }
  @media screen and (max-width: 690px) {
    span {
      margin: 10px;
      display: none;
    }
  }
`;

export const NavSearch = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  height: 30px;
  background-color: #f8e076;
  border-radius: 5px;
  padding: 3px 2px;
  justify-content: space-between;
  input {
    width: 97%;
    height: 100%;
    outline: none;
    border: none;
    border-radius: 5px;
  }

  @media screen and (max-width: 1100px) {
    width: 30%;
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const NavMenu = styled.ul`
  margin: 0;
  display: flex;
  align-items: center;
  list-style-type: none;
  height: auto;
  column-gap: 30px;
  @media screen and (max-width: 500px) {
    column-gap: 15px;
  }
`;

export const NavList = styled.li`
  color: #fff;
  display: flex;
  align-items: center;

  span {
    cursor: pointer;
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;

  button {
    color: #fff;
  }
  &.active {
    color: #000;
    button {
      background-color: #f8e076;
      color: #000;
    }
  }
`;

export const NavDropdown = styled(DropdownButton)`
  color: #fff;
  margin-left: 10px;
  width: 70px;
`;
