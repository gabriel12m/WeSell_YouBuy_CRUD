/*  Com este ficheiro pretende criar-se as bases para a realização da NavBar + SideBar
    São criados vários divs e vários links com css incorporado de modo a otimizar o tempo
    e aumentar a qualidade visual dos mesmos*/

import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FcIcons from "react-icons/fc";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";

const Nav = styled.div`
  background: #240046;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  color: #7b2cbf;
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:hover {
    color: #9d4edd;
  }
`;

const Nome = styled.div`
  color: #ff6d00;
  margin-left: 2rem;
  font-size: 2rem;
  font-weight: bold;
  font-family: Courier;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  float: left;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #240046;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 250ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

// esta função gera todos os componentes que apresentam e compõem a Navbar

const NavBar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <Nav>
        <NavIcon to="#">
          <FcIcons.FcMenu onClick={showSidebar} />
        </NavIcon>
        <Nome>We Sell, You Buy</Nome>
      </Nav>
      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          <NavIcon to="#">
            <AiIcons.AiOutlineClose onClick={showSidebar} />
          </NavIcon>
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </SidebarWrap>
      </SidebarNav>
    </>
  );
};

export default NavBar;
