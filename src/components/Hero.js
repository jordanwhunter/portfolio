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

`
const HeroH1 = styled.h1`

`
const HeroP = styled.p`

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
            Test Text
          </HeroH1>
          <HeroP>
            Test Text
          </HeroP>
          <Button>Test</Button>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
};