import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import { GrCircleInformation, GrCode, GrOverview } from "react-icons/gr";
import styled from "styled-components"
import Img from "gatsby-image"


const AboutContainer = styled.div`
  width: 100%;
  background: #fcfcfc;
  color: #000;
  padding: 5rem calc((100vw - 1300px) / 2);
  height: 100%;
`
const TopLine = styled.div`
  color: #077bf1;
  font-size: 1rem;
  padding-left: 2rem;
  margin-bottom: 0.75rem;
`
const Description = styled.p`
  text-align: start;
  padding-left: 2rem;
  margin-bottom: 4rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: bold;
`
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
const ColumnOne = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`
const Biography = styled.div`
  padding-top: 1rem;
  padding-right: 2rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-style: italic;
  }

  p {
    color: #3b3b3b;
  }
`
const ColumnTwo = styled.div`
  display: grid;
  grid-template-columns: 100%;
  margin-top: 2rem;
  /* grid-gap: 10px; */

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`
const Image = styled(Img)`
  border-radius: 10px;
  height: 100%;
  /* margin-top: -20px; */
`
export default function About() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, name: {in: ["profile-photo"]}}) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <AboutContainer id="about">
      <TopLine>
        About Me
      </TopLine>
      <Description>
        <div css={`display: flex;`}>
          <GrOverview /><h4 css={`font-style: italic;`}>Resumes</h4>
        </div> 
        <div 
          css={`
            display: flex;
            font-size: 14px;
            margin-bottom: -40px;
          `}
        >
          <p>
            <a href="https://docs.google.com/document/d/162ZfqqYxwYgeaY4fk7pf3GdtVn_Kp-ONqWOVCWzIhqo/edit?usp=sharing" target="_blank">Resume 2021 (ATS Version)</a><br />
            <a href="https://docs.google.com/document/d/1u87owpbLG2uoPAqvoVmkuh_LEGSJuRa69OVAYm3hELU/edit?usp=sharing" target="_blank">Resume 2021 (Styled Version)</a>
          </p>
        </div>   
      </Description>
      <ContentWrapper>
        <ColumnOne>
          <Biography>
            <div css={`display: flex;`}>
              <GrCircleInformation /><h3>Brand Statement</h3>
            </div>
            
            <p>
              Full stack web/software developer with an entrepreneurial spirit, and keen sense of efficiency and time management. A passionate, goal-oriented team player that strives to always write clean, precise code focused on mobile responsive themes. Maintains a problem solving, can-do attitude and exhibits consistent eagerness to learn new technologies/techniques.
            </p>
          </Biography>
          <Biography>
            <div css={`display: flex;`}>
              <GrCode />
              <h3>Technologies</h3>
            </div>
            
            <p>
              JavaScript, React, Preact, Next, Gatsby, Svelte, Node, Express, Firebase, Vercel, MongoDB, MySQL, Handlebars, jQuery, D3, GraphQL, Material-UI, CSS3, Bootstrap, Materialize, Bulma, HTML5 
            </p>
          </Biography>
        </ColumnOne>
        <ColumnTwo>
          {data.allFile.edges.map((image, key) => (
            <Image 
              key={key}
              src={image.node.childImageSharp.src}
              fluid={image.node.childImageSharp.fluid}
            />
          ))}
        </ColumnTwo>
      </ContentWrapper>
    </AboutContainer>
  )
};