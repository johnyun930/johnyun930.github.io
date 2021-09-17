import React from "react";
import {
  NavigationContainer,
  NavigationBar,
  MainIcon,
  LogoName,
  JobTitle,
  NavButton,
} from "./navigation.styles";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skill" },
  { name: "Project", href: "/project" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const location = useLocation();
  return (
    <>
      <NavigationContainer>
        <NavigationBar direction={true}>
          <Link to="/">
            <MainIcon src={Logo}></MainIcon>
          </Link>
          <LogoName>John Yun</LogoName>
          <JobTitle>Full Stack Developer</JobTitle>
        </NavigationBar>
        <NavigationBar direction={false}>
          {navigation.map((nav) =>
            location.pathname === nav.href ? (
              <Link to={nav.href}>
                <NavButton current={true}>{nav.name}</NavButton>
              </Link>
            ) : (
              <Link to={nav.href}>
                <NavButton>{nav.name}</NavButton>
              </Link>
            )
          )}
        </NavigationBar>
      </NavigationContainer>
    </>
  );
}
