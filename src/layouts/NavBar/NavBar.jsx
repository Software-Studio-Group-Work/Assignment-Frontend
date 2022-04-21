import React, { useState } from "react";
import {
  NavContainer,
  NavLogo,
  NavMenu,
  NavList,
  NavLink,
  NavSearch,
  NavDropdown,
} from "./NavBar.styles";
import { AiOutlineSearch } from "react-icons/ai";
import { Dropdown } from "react-bootstrap";

function NavBar() {
  const [religion, setReligion] = useState("ทั้งหมด");
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
        <NavList>
          ศาสนา
          <NavDropdown variant="secondary" id="dropdown" title={religion}>
            <Dropdown.Item onClick={() => setReligion("พุทธ")}>
              พุทธ
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setReligion("อิสลาม")}>
              อิสลาม
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setReligion("คริสต์")}>
              คริสต์
            </Dropdown.Item>
          </NavDropdown>
        </NavList>
        <NavList>
          <NavLink to="/login">เข้าสู่ระบบ/สมัครสมาชิก</NavLink>
        </NavList>
      </NavMenu>
    </NavContainer>
  );
}

export default NavBar;
