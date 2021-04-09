import React, { useState } from "react"
import { Link } from "gatsby"
import { FaBars } from "react-icons/fa"
import { menuData } from "../data/MenuData"
import { Button } from "./Button"
import styled from "styled-components"
import signature from "../assets/images/signature.png"
// import video from "../assets/videos/hero-video.mp4"

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
  overflow-x: hidden;
`;
const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;
const SigImg = styled.img`
  width: 75px;
  margin-left: 20px;

  @media screen and (max-width: 375px) {
    width: 50px;
  }

  @media screen and (max-width: 280px) {
    display: none;
  }
`;
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
  };
`;
const HeroBG = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
// const Video = styled.video`
//   width: 100%;
//   height: 100%; 
//   -o-object-fit: cover;
//   object-fit: cover;
//   filter: brightness(100%);
//   transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
// `;
const MenuLinks = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-height: 75px;
  height: 100vh;
  width: 100vw;
  background: #143441;
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
  };

  span {
    display: flex;
    z-index: 5;
    margin-top: 0;

    @media screen and (max-width: 540px) {
      margin-right: 40px;
      margin-bottom: 5px;
    }

    p {
      font-size: 40px;

      @media screen and (max-width: 768px) {
        font-size: 35px;
      }
      
      @media screen and (width: 653px) {
        font-size: 30px;
      }

      @media screen and (width: 640px) {
        font-size: 30px;
      }
      
      @media screen and (max-width: 540px) {
        font-size: 25px;
      }
      
      @media screen and (max-width: 414px) {
        font-size: 20px;
      }
      
      @media screen and (max-width: 375px) {
        font-size: 18px;
      }
      
      @media screen and (max-width: 320px) {
        font-size: 14px;
      }
      
      @media screen and (max-width: 280px) {
        font-size: 12px;
      }

    }
  };

  a {
    text-decoration: none;
    color: #fff;
    font-size: 1.5rem;
    transition: color 300ms;

    

    :hover {
      color: gray;
    }
  };

  @media screen and (min-width: 769px) {
    display: none;
  };

`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -40px;

  @media screen and (max-width: 768px) {
    display: none;
  };
`;
const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    margin-right: 325px;
  };
  
  @media screen and (max-width: 736px) {
    margin-right: 295px;
  };

  @media screen and (max-width: 720px) {
    margin-right: 295px;
  };
  
  @media screen and (max-width: 680px) {
    margin-right: 240px;
  };
  
  @media screen and (max-width: 667px) {
    margin-right: 260px;
  };
  
  @media screen and (width: 640px) {
    margin-right: 250px;
  };

  @media screen and (width: 568px) {
    margin-right: 215px;
  };
  
  @media screen and (max-width: 540px) {
    margin-right: 210px;
  };
  
  @media screen and (max-width: 500px) {
    margin-right: 140px;
  };
  
  @media screen and (max-width: 375px) {
    margin-right: 115px;
  };
`;

const Header = () => {
  const [nav, showNav] = useState(false);

  return (
    <Nav>
      <NavLink to="/">
        <SigImg src={signature} />
      </NavLink>
      <Bars onClick={() => showNav(!nav)}/>
      <MenuLinks nav={nav}>
        {/* <HeroBG>
          <Video
            src={video}
            type="video/mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </HeroBG> */}
        
          <span>
            <a href="/#portfolio">
              <p>Portfolio &nbsp;</p>
            </a>
          
          
            <a href="/#about">
              <p>About &nbsp;</p>
            </a>
          
          
            <a href="/#socials">
              <p>Socials &nbsp;</p>
            </a>
          
          
            <a href="/#newsletter">
              <p>Newsletter &nbsp;</p>
            </a>
          </span>
       
      </MenuLinks>
      <NavMenu>
        {menuData.map((item, index) => (
          <NavLink to={`/#${item.link}`} key={index}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
      <NavBtn>
        <a href="mailto:jordanwhunter.mail@gmail.com" target="_blank" rel="noreferrer" css={`text-decoration: none;`}>
          <Button primary="true" round="true">Email Me</Button>
        </a>
      </NavBtn>
    </Nav>
  )
}

export default Header