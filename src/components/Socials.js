import React from 'react'
import styled from "styled-components"
import { socialData } from "../data/SocialData"

const SocialsContainer = styled.div`
  width: 100%;
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem calc((100vw - 1300px) / 2);
`;
const Heading = styled.h1`
  text-align: start;
  font-size: clamp(1.5rem, 5vw, 2rem);
  margin-bottom: 3rem;
  padding: 0 2rem;
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  };
  
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  };
`;
const SocialsBox = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-items: center;
`;
const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: black;
`;
const Title = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  margin-bottom: 0.5rem;
  margin-left: 10px;
`;
export default function Socials() {
  return (
    <SocialsContainer id="socials">
      <Heading>
        <u>Stay Connected</u>
      </Heading>
      <Wrapper>
        {socialData.map((item, index) => {
          return (
            <SocialsBox key={index}>
              <a 
                href={item.src} 
                target="_blank"
              >
                <Icon>{item.icon}</Icon>
              </a>
                <Title>{item.title}</Title>
            </SocialsBox>
          )
        })}
      </Wrapper>
    </SocialsContainer>
  )
};