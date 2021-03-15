import React from 'react'
import { Button } from "./Button"
import styled from "styled-components"
import video from "../assets/videos/hero-video.mp4"

const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  color: #fff;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  margin-top: -80px;

  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    background: linear-gradient(
      180deg, 
      rgba(0, 0, 0, 0.2) 0%, 
      rgba(0, 0, 0, 0.6) 100%
    ), linear-gradient(
      180deg, 
      rgba(0, 0, 0, 0.2) 0%, 
      transparent 100%
    );
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
`
const HeroContent = styled.div`
  z-index: 3;
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vh - 1300px) / 2);
`
const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  color: #fff;
  line-height: 1.1;
  font-weight: bold; 
`
const HeroH1 = styled.h1`
  /* clamp essentially makes fonts responsive w/out adding media queries */
  /* first value (1.5rem) is smallest font will be */
  /* second value is viewport width between 2 - infinity */
  /* third value is max size */
  font-size: clamp(1.5rem, 6vw, 4rem);
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  font-weight: bold;
  padding: 0 1rem;
`
const HeroP = styled.p`
  font-size: clamp(1rem, 3vw, 3rem);
  font-weight: 400;
  margin-bottom: 2rem;
`

export default function Hero() {
  return (
    <HeroContainer>
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
      <HeroContent>
        <HeroItems>
          <HeroH1>
            Jordan Hunter
          </HeroH1>
          <HeroP>
            An avid full-stack developer residing in New York City. 
          </HeroP>
          <Button
            primary="true"
            big="true"
            round="true"
            to="/portfolio"
          >
            View Portfolio
          </Button>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
};