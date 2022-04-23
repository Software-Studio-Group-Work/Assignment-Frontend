import React, { useContext } from "react";
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
import { Dropdown, Button } from "react-bootstrap";
import { ReligionContext } from "../../contexts/ReligionContext";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { FaDharmachakra } from "react-icons/fa";
const religions = {
  buddhist: "พุทธ",
  islam: "อิสลาม",
  christ: "คริสต์",
  all: "ทั้งหมด",
};
function NavBar({ isAuth }) {
  const navigate = useNavigate();
  const { religion, setReligion } = useContext(ReligionContext);
  const { setUser } = useContext(UserContext);

  return (
    <NavContainer>
      <NavLogo to="/">
        <FaDharmachakra />
        <span>รอบรู้โลกธรรมะ</span>
      </NavLogo>
      <NavSearch>
        <input type="text" />
        <AiOutlineSearch size={20} />
      </NavSearch>

      {!isAuth ? (
        <NavMenu>
          <NavList>
            <span onClick={() => navigate("/login")}>ตั้งกระทู้</span>
          </NavList>
          <NavList>
            ศาสนา
            <NavDropdown
              variant="secondary"
              id="dropdown"
              title={religions[religion]}
            >
              <Dropdown.Item onClick={() => setReligion("buddhist")}>
                พุทธ
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setReligion("islam")}>
                อิสลาม
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setReligion("christ")}>
                คริสต์
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setReligion("all")}>
                ทั้งหมด
              </Dropdown.Item>
            </NavDropdown>
          </NavList>
          <NavList>
            <NavLink to="/login">
              <Button variant="warning">Login</Button>
            </NavLink>
          </NavList>
        </NavMenu>
      ) : (
        <NavMenu>
          <NavList>
            <NavLink to="/create-post">ตั้งกระทู้</NavLink>
          </NavList>
          <NavList>
            ศาสนา
            <NavDropdown
              variant="secondary"
              id="dropdown"
              title={religions[religion]}
            >
              <Dropdown.Item onClick={() => setReligion("buddhist")}>
                พุทธ
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setReligion("islam")}>
                อิสลาม
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setReligion("christ")}>
                คริสต์
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setReligion("all")}>
                ทั้งหมด
              </Dropdown.Item>
            </NavDropdown>
          </NavList>
          <NavList>
            <NavLink to="/login">
              <Button variant="danger" onClick={() => setUser(null)}>
                Logout
              </Button>
            </NavLink>
          </NavList>
        </NavMenu>
      )}
    </NavContainer>
  );
}

export default NavBar;
