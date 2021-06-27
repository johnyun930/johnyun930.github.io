import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../assets/images/Logo.png'
const NavigationContainer = styled.div`
  width: 90%;
  height: 10vh;
  margin: 0 auto;
  margin-top: 20px;
  padding: 20px;
  display: flex;
`
const NavigationBar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap:25px;
  justify-content: ${(props) => props.direction ? "flex-start" : "flex-end"};
`
const MainIcon = styled.img`
  margin-top: 10px;
  width: 30px;
  height: 30px;
`
const LogoName = styled.h1`
  font-family: 'Work Sans';
  color:#566FB8;
  font-size: 2rem;
  font-weight: 600;
`
const JobTitle = styled.h3`
  font-family: 'Castoro';
  color: #7A7DA3;
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 2.7;
`
const NavButton = styled.div`
  min-width: 70px;
  text-align: center;
  font-size: 1.5rem;
  line-height: ${(props) => props.current ? "1.6" : "2"};
  font-weight: lighter;
  border-top: ${(props) => props.current ? "4px solid #566FB8" : ""};
  &:hover{
    line-height: 1.6;
    border-top: 4px solid #A7D8D9;
    color: #A7D8D9
  }
`

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skill" },
  { name: "Project", href: "/project" },
  { name: "Contact", href: "/contact" }

]

export default function Navigation() {
  const location = useLocation();
  return (
    <>
      <NavigationContainer>
        <NavigationBar direction={true}>
          <MainIcon src={Logo}></MainIcon>
          <LogoName>John Yun</LogoName>
          <JobTitle>Full Stack Developer</JobTitle>
        </NavigationBar>
        <NavigationBar direction={false}>
          {navigation.map((nav) =>
            location.pathname === nav.href ?
              <Link to={nav.href}><NavButton current={true}>{nav.name}</NavButton></Link>
              :
              <Link to={nav.href}><NavButton>{nav.name}</NavButton></Link>

          )}
        </NavigationBar>
      </NavigationContainer>
    </>

  )
}
