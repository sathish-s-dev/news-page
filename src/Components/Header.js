import React, { useState } from 'react'
import styled from 'styled-components';

function Header() {
  const [NavStatus, setNavStatus] = useState(false);
  return (
    <Container>
      <LogoWrap>
        <Logo src="./images/logo.svg"></Logo>
      </LogoWrap>
      <NavMenu>
        <Menu>
          <a href='#' ><li>Home</li></a>
          <a href='#' ><li>New</li></a>
          <a href='#' ><li>Popular</li></a>
          <a href='#' ><li>Trending</li></a>
          <a href='#' ><li>Catagories</li></a>
        </Menu>
      </NavMenu>
      <RightMenu>
      <Hamburger onClick={() => {setNavStatus(true)}}>
          <img src="./images/icon-menu.svg" />
        </Hamburger>
      <HamburgerMenu show = {NavStatus}>
        <MenuNav>
        <Customclose onClick={() => {setNavStatus(false)}}>
          <img src="./images/icon-menu-close.svg" />
        </Customclose>
          <a href='#' ><li>Home</li></a>
          <a href='#' ><li>New</li></a>
          <a href='#' ><li>Popular</li></a>
          <a href='#' ><li>Trending</li></a>
          <a href='#' ><li>Catagories</li></a>
        </MenuNav>
      </HamburgerMenu>
      </RightMenu>
    </Container>
  )
}

const Container = styled.div`
width: 100vw;
height: 70px;
max-width: 1024px;
overflowX: hidden;
padding: 25px;
display: flex;
justify-content: space-between;
`
const LogoWrap= styled.div`
width: 30px;

`
const Logo = styled.img`
width: 100%;`
const NavMenu = styled.div`
@media (min-width:400px){
  display: none;
}
@media (min-width:500px){
  display: inline-block;
}
`
const Menu = styled.ul`
list-style: none;
display: flex;
column-gap: 30px;
justify-content:space-between;
a{
  text-decoration: none;
}

`
const RightMenu = styled.div`
position: relative;
@media (min-width:500px){
  display: none;
}
`
const HamburgerMenu = styled.div`
position: absolute;
right: 0;
top:0;
background-color: white;
width: 160px;
transition: all ease-in-out 0.25s;
transform: ${props => props.show ? "translateX(0)" : "translateX(200px)"};
@media (min-width:400px){
  display: inline-block;
}
@media (min-width:500px){
  display: none;
}`
const Hamburger = styled.div`
display:flex;
justify-content:flex-end;
img{
  width: 25px;
  :hover{
    cursor:pointer;
    opacity: 0.8;
  }
  }
  @media (min-width:500px){
    display: none;
  }
}
`
const Customclose = styled.div`
display: flex;
justify-content: flex-end;
img{
  width: 15px;
  &:hover{
    transform: scale(1.2);
    cursor: pointer;
  }
}
`
const MenuNav = styled.ul`
display: flex;
flex-direction: column;
list-style: none;
a{
  color: black;
  text-decoration: none;
  padding: 12px;
  border-bottom: 1px solid rgba(0,0,0, 0.2);
  &:hover{
    background-color: rgba(0,0,0, 0.3);
    color: whitesmoke;
  }
}
`

export default Header