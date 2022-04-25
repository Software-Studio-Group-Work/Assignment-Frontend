import React, { useState } from "react";
import {
  SideBarContainer,
  SideMenu,
  SideList,
  SideLink,
  MobileMenu,
} from "./SideBar.styles";
import { AiOutlineHome } from "react-icons/ai";
import {
  MdOutlineFeed,
  MdOutlineAnnouncement,
  MdOutlinePlace,
} from "react-icons/md";
import { FaLandmark } from "react-icons/fa";
import { FiMenu, FiX, FiUser } from "react-icons/fi";
import "./SideBar.css";

function SideBar({ isAuth, role }) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const handleMenuClick = () => setClick(false);
  return (
    <div>
      <MobileMenu onClick={handleClick}>
        {click ? <FiX /> : <FiMenu />}
      </MobileMenu>
      <div className={click ? "menu active" : "menu"}>
        <SideBarContainer>
          <SideMenu>
            <SideList onClick={handleMenuClick}>
              <SideLink to="/">
                <AiOutlineHome />
                <span>หน้าแรก</span>
              </SideLink>
            </SideList>
            {isAuth && (
              <SideList onClick={handleMenuClick}>
                <SideLink to="/myfeed">
                  <MdOutlineFeed />
                  <span>My Feed</span>
                </SideLink>
              </SideList>
            )}
            <SideList onClick={handleMenuClick}>
              <SideLink to="/landmarks">
                <FaLandmark />
                <span>สถานที่สำคัญ</span>
              </SideLink>
            </SideList>
            {role === "admin" && (
              <>
                <SideList onClick={handleMenuClick}>
                  <SideLink to="/create-announce">
                    <MdOutlineAnnouncement />
                    <span>เพิ่มประกาศ</span>
                  </SideLink>
                </SideList>
                <SideList onClick={handleMenuClick}>
                  <SideLink to="/create-landmark">
                    <MdOutlinePlace />
                    <span>เพิ่มสถานที่สำคัญ</span>
                  </SideLink>
                </SideList>
              </>
            )}
            {isAuth && (
              <SideList onClick={handleMenuClick}>
                <SideLink to="/user">
                  <FiUser />
                  <span>My Profile</span>
                </SideLink>
              </SideList>
            )}
          </SideMenu>
        </SideBarContainer>
      </div>
    </div>
  );
}

export default SideBar;
