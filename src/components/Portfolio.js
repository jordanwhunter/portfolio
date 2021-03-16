import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import { Button } from "./Button"
import Img from "gatsby-image"
import styled from "styled-components"

const PortfolioContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #fff;
  color: #fff;
`
const PortfolioHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #000;
`
const PortfolioImg = styled(Img)`
  height: 100%;
  max-width: 100%;
  position: absolute;
  border-radius: 10px;
  filter: brightness(100%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  /* &:hover {
    filter: brightness(50%)
  } */
`
const PortfolioWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  justify-items: center;
  padding: 0 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }

`
const PortfolioInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  justify-items: center;
  padding: 0 2rem;
  visibility: hidden;
  opacity: 0;
  transition: opacity .2s, visibility .2s;
  
  @media screen and (max-width: 280px) {
    padding: 0 1rem;
    justify-content: center;
    align-content: center;
  }
`
const PortfolioCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 500px;
  position: relative;
  border-radius: 10px;
  transition: 0.2s ease;

  &:hover ${PortfolioInfo}{
    visibility: visible;
    opacity: 1;
  }
  &:hover ${PortfolioImg}{
    filter: brightness(50%)
  }
`
const TextWrap = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  position: absolute;
  top: 375px;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  width: 87%;
`
const PortfolioTitle = styled.div`
  font-weight: 400;
  font-size: 1rem;
  margin-left: 0.5rem;

  @media screen and (max-width: 280px) {
    font-size: 12px;
  }
`
const PortfolioDescription = styled.div`
  font-size: 1rem;

  @media screen and (max-width: 280px) {
    font-size: 12px;
  }
`
const PortfolioTechnologies = styled.div`
  font-size: 1rem;

  @media screen and (max-width: 280px) {
    font-size: 12px;
  }
`
const ButtonLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`
const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 100%;
  height: -400px;
  z-index: 2;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
    justify-content: center;
    align-content: center;
  }
`
const CustomButton = styled(Button)`
  display: flex;
  align-items: center;
  position: relative;
  top: -60px;
  font-size: 14px;
  width: 100%;

  @media screen and (max-width: 480px) {
    background: none;
    border: none;
    padding: 0 !important;
    font-family: arial, sans-serif;
    color: #fff;
    text-decoration: underline;
    cursor: pointer;
    width: 100%;
    font-size: 12px;
    justify-content: center;
  }
`

export default function Portfolio({ heading }) {
  const data = useStaticQuery(graphql`
    query PortfolioQuery {
      allPortfolioJson {
        edges {
          node {
            alt
            button1
            button2
            description
            name
            technologies
            demo
            repo
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        } 
      }
    }
  `)

  function getPortfolio(data) {
    const portfolioArray = []
    data.allPortfolioJson.edges.forEach((item, index) => {
      portfolioArray.push(
        <PortfolioCard key={index}>
          <PortfolioImg 
            src={item.node.img.childImageSharp.fluid.src}
            fluid={item.node.img.childImageSharp.fluid}
            alt={item.node.alt}
          />
          <PortfolioInfo>
            <TextWrap>
              <PortfolioTitle
                css={`
                  margin-top: -500px;
                `}
              >
                <strong><u>Project:</u></strong> <br />
                {item.node.name}
              </PortfolioTitle>

              <PortfolioDescription
                css={`
                  margin-top: -300px;
                  
                `}
              >
                <strong><u>Description:</u></strong> <br />
                {item.node.description}
              </PortfolioDescription>
              <PortfolioTechnologies
                css={`
                  margin-top: -100px;
                 
                `}
              >
                <strong><u>Technologies:</u></strong> <br />
                {item.node.technologies}
              </PortfolioTechnologies>
            </TextWrap>
            <ButtonWrap>
              <ButtonLink
                to={`${item.node.demo}`}
                target="_blank"
              >
                <CustomButton
                  primary="true"
                  round="true"
                >
                  {item.node.button1}
                </CustomButton>
              </ButtonLink>
              <ButtonLink
                to={`${item.node.repo}`}
                target="_blank"
              >
                <CustomButton
                  primary="true"
                  round="true"
                >
                  {item.node.button2}
                </CustomButton>
              </ButtonLink>
            </ButtonWrap>
          </PortfolioInfo>
        </PortfolioCard>
      )
    })

    return portfolioArray
  }

  return (
    <PortfolioContainer  id="portfolio">
      <PortfolioHeading>
        {heading}
      </PortfolioHeading>
      <PortfolioWrapper>
        {getPortfolio(data)}
      </PortfolioWrapper>
    </PortfolioContainer>
  )
};