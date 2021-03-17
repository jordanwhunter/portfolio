import React, { useState } from "react"
import { Link } from "gatsby"
import { FaBars } from "react-icons/fa"
import { menuData } from "../data/MenuData"
import { Button } from "./Button"
import styled from "styled-components"
import signature from "../assets/images/signature.png"
import video from "../assets/videos/hero-video.mp4"

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`
const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`
const SigImg = styled.img`
  width: 75px;
  margin-left: 20px;
`
const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  position: fixed;
  z-index: 5;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`
const HeroBG = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
const Video = styled.video`
  width: 100%;
  height: 100%; 
  -o-object-fit: cover;
  object-fit: cover;
  filter: brightness(100%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
`
const MenuLinks = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 50vh;
  width: 100vw;
  background: transparent;
  position: absolute;
  top: 0;
  right: 0;
  transform: ${
    ({nav}) => nav
      ? "translateX(0)"
      : "translateX(100%)"
  };

  ul {
    list-style-type: none;
    z-index: 5;
    &:hover ${HeroBG} {
      filter: brightness(50%)
    }
  }

  li {
    margin-top: 1rem;
  }

  a {
    text-decoration: none;
    color: #fff;
    font-size: 1.5rem;
    transition: color 300ms;

    

    :hover {
      color: gray;
    }
  }

  @media screen and (min-width: 769px) {
    display: none;
  }

`
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -40px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const Header = () => {
  const [nav, showNav] = useState(false);

  return (
    <Nav>
      <NavLink to="/">
        <SigImg src={signature} />
      </NavLink>
      <Bars onClick={() => showNav(!nav)}/>
      <MenuLinks nav={nav}>
        <HeroBG>
          <Video
            src={video}
            type="video/mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </HeroBG>
        <ul>
          <li>
            <a href="/#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#socials">Socials</a>
          </li>
          <li>
            <a href="/#newsletter">Newsletter</a>
          </li>
        </ul>
      </MenuLinks>
      <NavMenu>
        {menuData.map((item, index) => (
          <NavLink to={`/#${item.link}`} key={index}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
      <NavBtn>
        <a href="mailto:jordanwhunter.mail@gmail.com" target="_blank" css={`text-decoration: none;`}>
          <Button primary="true" round="true">Email Me</Button>
        </a>
      </NavBtn>
    </Nav>
  )
}

export default Header