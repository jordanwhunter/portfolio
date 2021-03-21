import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { Button } from "./Button"
// import { v4 as uuidv4} from "uuid"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

const PortfolioContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #fff;
  color: #fff;
  position: relative;

  @media screen and (max-width: 768px) {
    overflow-y: auto;
    display: flex;
    flex-direction: column;
  }
`;
const PortfolioHeading = styled.div`
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #000;
`;
const PortfolioImg = styled.div`
  /* height: 100%; */
  /* max-width: 100%; */
  position: absolute;
  border-radius: 10px;
  filter: brightness(100%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
`;
const PortfolioWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 60px;
  justify-items: center;
  padding: 0 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  };
  
  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  };
  
  @media screen and (max-width: 768px) {
    grid-gap: 550px;
  };
  
  @media screen and (max-width: 540px) {
    grid-gap: 150px;
  };

  @media screen and (max-width: 375px) {
    grid-gap: 0px;
  }
  
  @media screen and (max-width: 280px) {
    grid-gap: -1px;
  }

`;
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
  };
`;
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
  };
  &:hover ${PortfolioImg}{
    filter: brightness(50%)
  };
`;
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

  @media screen and (max-width: 420px) {
    top: 350px;
  }
  
  @media screen and (max-width: 396px) {
    top: 300px;
  }

  @media screen and (max-width: 280px) {
    top: 280px;
  }
`;
const PortfolioTitle = styled.div`
  font-weight: 400;
  font-size: 1rem;
  margin-left: 0.5rem;

  @media screen and (max-width: 280px) {
    font-size: 12px;
  };
  
`;
const PortfolioDescription = styled.div`
  font-size: 1rem;

  @media screen and (max-width: 280px) {
    font-size: 12px;
    margin: 30px;
  };
`;
const PortfolioTechnologies = styled.div`
  font-size: 1rem;



  @media screen and (max-width: 280px) {
    font-size: 12px;
    top: -5px;
    position: absolute;
  };
`;
// const ButtonLink = styled.div`
//   text-decoration: none;
//   cursor: pointer;
// `;
const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 100%;
  /* height: -400px; */
  z-index: 1;
  gap: 10px;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
    justify-content: center;
    align-content: center;
  };
`;
const CustomButton = styled(Button)`
  display: flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  width: 100%;
  cursor: pointer;
  top: 425px;

  @media screen and (max-width: 410px) {
    background: none;
    border: none;
    padding: 0 !important;
    font-family: arial, sans-serif;
    color: #fff;
    text-decoration: underline;
    cursor: pointer;
    width: 10%;
    font-size: 12px;
    justify-content: center;
    top: 400px;
  };

  @media screen and (max-width: 375px) {
    top: 350px;
  }
  
  @media screen and (max-width: 280px) {
    top: 270px;
  }
`;
const CustomP = styled.p`
  font-size: 12px;
`;

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
                gatsbyImageData(
                  layout: CONSTRAINED
                  placeholder: BLURRED
                  width: 1000
                )
              }
            }
          }
        } 
      }
    }
  `);

  const id = '_' + Math.random().toString(36).substr(2, 9) + 1;

  function getPortfolio(data) {
    const portfolioArray = []
    data.allPortfolioJson.edges.forEach((item, index) => {
      portfolioArray.push(
        <PortfolioCard key={index}>
          {/* <PortfolioImg 
            src={item.node.img.childImageSharp.fluid.src}
            fluid={item.node.img.childImageSharp.fluid}
            alt={item.node.alt}
            key={id + 8}
          /> */}
          <PortfolioImg>
            <GatsbyImage 
              // src={item.node.img.childImageSharp.gatsbyImageData}
              image={item.node.img.childImageSharp.gatsbyImageData}
              alt={item.node.alt}
              key={id + 8}
              imgStyle={{
                // objectFit: "contain",
                borderRadius: "10px",
                height: "88%",
                position: "absolute",
                gridGap: "10px"
              }}
            />
          </PortfolioImg>
          <PortfolioInfo key={id + 9}>
            <TextWrap key={id + 14}>
              <PortfolioTitle
                key={id + 15}
                css={`
                  margin-top: -500px;
                `}
              >
                <strong><u>Project:</u></strong> <br />
                {item.node.name}
              </PortfolioTitle>

              <PortfolioDescription
                key={id + 16}
                css={`
                  margin-top: -300px;
                `}
              >
                <strong><u>Description:</u></strong> <br />
                {item.node.description}
              </PortfolioDescription>
              <PortfolioTechnologies
                key={id + 17}
                css={`
                  margin-top: -100px;
                 
                `}
              >
                <strong><u>Technologies:</u></strong> <br />
                {item.node.technologies}
              </PortfolioTechnologies>
            </TextWrap>
            <ButtonWrap key={id + 10}>
              <div key={id + 20}> 
                <a
                  href={`${item.node.demo}`}
                  target="_blank"
                  css={`
                    text-decoration: none;
                    cursor: pointer;
                  `}
                  key={id + 11}
                  rel="noreferrer"
                >
                  <CustomButton
                    primary="true"
                    round="true"
                    key={id + 12}
                  >
                    {item.node.button1}
                  </CustomButton>
                </a>
              </div>


              <div key={id + 21}>
                <a
                  href={`${item.node.repo}`}
                  target="_blank"
                  css={`
                    text-decoration: none;
                    cursor: pointer;
                  `}
                  key={id + 13}
                  rel="noreferrer"
                >
                  <CustomButton
                    primary="true"
                    round="true"
                    key={id + 14}
                  >
                    {item.node.button2}
                  </CustomButton>
                </a>
              </div>
            </ButtonWrap>
          </PortfolioInfo>
        </PortfolioCard>
      )
    })

    return portfolioArray;
  };

  return (
    <PortfolioContainer  id="portfolio">
      <PortfolioHeading>
        {heading}
        <CustomP>(Tap on Mobile)</CustomP>
      </PortfolioHeading>
      <PortfolioWrapper>
        {getPortfolio(data)}
      </PortfolioWrapper>
    </PortfolioContainer>
  );
};