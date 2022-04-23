import React from "react";
import {
  SideBarContainer,
  SideMenu,
  SideList,
  SideLink,
} from "./SideBar.styles";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineFeed } from "react-icons/md";
import { BsSlack } from "react-icons/bs";

function SideBar({ isAuth }) {
  return (
    <SideBarContainer>
      <SideMenu>
        <SideList>
          <SideLink to="/">
            <AiOutlineHome />
            <span>หน้าแรก</span>
          </SideLink>
        </SideList>
        {isAuth && (
          <SideList>
            <SideLink to="/myfeed">
              <MdOutlineFeed />
              <span>My Feed</span>
            </SideLink>
          </SideList>
        )}
        <SideList>
          <SideLink to="/landmarks">
            <BsSlack />
            <span>สถานที่สำคัญ</span>
          </SideLink>
        </SideList>
      </SideMenu>
    </SideBarContainer>
  );
}

export default SideBar;
