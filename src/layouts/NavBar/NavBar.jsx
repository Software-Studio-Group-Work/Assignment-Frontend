import React, { useState } from "react";
import {
  NavContainer,
  NavLogo,
  NavMenu,
  NavList,
  NavLink,
  NavSearch,
} from "./NavBar.styles";
import { AiOutlineSearch } from "react-icons/ai";
import { Dropdown } from "react-bootstrap";

function NavBar() {
  return (
    <NavContainer>
      <NavLogo to="/">รอบรู้โลกธรรมะ</NavLogo>
      <NavSearch>
        <input type="text" />
        <AiOutlineSearch size={20} />
      </NavSearch>
      <NavMenu>
        <NavList>
          <NavLink to="/post">ตั้งกระทู้</NavLink>
        </NavList>
        <NavList>ศาสนา</NavList>
        <NavList>
          <NavLink to="/login">เข้าสู่ระบบ/สมัครสมาชิก</NavLink>
        </NavList>
      </NavMenu>
    </NavContainer>
  );
}

export default NavBar;
