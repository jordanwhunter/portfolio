import React from 'react'
// import { useStaticQuery, graphql } from 'gatsby';
import { GrCircleInformation, GrCode, GrDocumentImage } from "react-icons/gr"
// import { v4 as uuidv4} from "uuid"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
// import profilePicture from "../assets/images/profile-photo.jpg"


const AboutContainer = styled.div`
  width: 100%;
  background: #fcfcfc;
  color: #000;
  padding: 5rem calc((100vw - 1300px) / 2);
  height: 100%;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
`;
const TopLine = styled.div`
  color: #077bf1;
  font-size: 1rem;
  padding-left: 2rem;
  margin-bottom: 0.75rem;
`;
const Description = styled.div`
  text-align: start;
  padding-left: 2rem;
  margin-bottom: 4rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: bold;
`;
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const ColumnOne = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`;
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
`;
const ColumnTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 2rem;
  grid-gap: 10px;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;
// const Image = styled.div`
//   border-radius: 10px;
//   /* height: 100%; */
//   margin-top: -50px;

//   @media screen and (max-width: 375px) {
//     margin-top: 0;
//   }
// `;
export default function About() {
  // const data = useStaticQuery(graphql`
  //   query MyQuery {
  //     allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, name: {in: ["profile-photo"]}}) {
  //       edges {
  //         node {
  //           childImageSharp {
  //             gatsbyImageData(layout: FIXED)
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);
  
  const id = '_' + Math.random().toString(36).substr(2, 9);
  
  return (
    <AboutContainer id="about">
      <TopLine key={id + 1}>
        About Me
      </TopLine>
      <Description key={id + 2}>
        <div css={`display: flex;`}>
          <GrDocumentImage />
          <div css={`font-style: italic;`}>Resumes</div>
        </div> 
        <div 
          css={`
            display: flex;
            font-size: 14px;
            margin-bottom: -40px;
          `}
        >
          <div>
            <a href="https://docs.google.com/document/d/162ZfqqYxwYgeaY4fk7pf3GdtVn_Kp-ONqWOVCWzIhqo/edit?usp=sharing" target="_blank" rel="noreferrer">Resume 2021 (ATS Version)</a><br />
            <a href="https://docs.google.com/document/d/1u87owpbLG2uoPAqvoVmkuh_LEGSJuRa69OVAYm3hELU/edit?usp=sharing" target="_blank" rel="noreferrer">Resume 2021 (Styled Version)</a>
          </div>
        </div>   
      </Description>
      <ContentWrapper key={id + 3}>
        <ColumnOne key={id + 4}>
          <Biography key={id + 5}>
            <div key={id + 18} css={`display: flex;`}>
              <GrCircleInformation /><h3>Brand Statement</h3>
            </div>
            
            <p key={id + 19}>
              Full stack web/software developer with an entrepreneurial spirit, and keen sense of efficiency and time management. A passionate, goal-oriented team player that strives to always write clean, precise code focused on mobile responsive themes. Maintains a problem solving, can-do attitude and exhibits consistent eagerness to learn new technologies/techniques.
            </p>
          </Biography>
          <Biography 
            key={id + 6} 
            css={`
              margin-top: -32px;

              @media screen and (max-width: 414px) {
                margin-top: -25px;
              }

              @media screen and (max-width: 375px) {
                margin-top: -20px;
              }
              
              @media screen and (max-width: 320px) {
                margin-top: -8px;
              }
              
              @media screen and (max-width: 280px) {
                margin-top: -10px;
              }
            `}
          >
            <div key={id + 16} css={`display: flex;`}>
              <GrCode />
              <h3>Technologies</h3>
            </div>
            
            <p key={id + 17}>
              JavaScript, TypeScript, CSS3, HTML5, React, Preact, Next, Gatsby, Svelte, Node, Express, Deno, Firebase, Vercel, MongoDB, MySQL, Handlebars, jQuery, D3, GraphQL, Material-UI, Bootstrap, Materialize, Bulma 
            </p>
            <br /><br />
            <StaticImage 
              src="../assets/images/technologies.png"
              alt="Technologies"
              placeholder="blurred"
              layout="constrained"
              // width={300}
              // height={500}
              imgStyle={{
                alignContent: "center",
                alignItems: "center",
                justifyContent: "center",
                justifyItems: "center",
                borderRadius: "20px",
              }}
            />
          </Biography>
        </ColumnOne>
        <ColumnTwo key={id + 7}>
          {/* {data.allFile.edges.map((image, key) => (
            <Image
              id={key} 
              key={id + 15}
              src={image.node.childImageSharp.src}
              fluid={image.node.childImageSharp.fluid}
              image={image.node.childImageSharp.gatsbyImageData}
              css={`
                border-radius: 10px;
                height: 100%;
                margin-top: -50px;

                @media screen and (max-width: 375px) {
                  margin-top: 0;
                }
              `}
            />
          ))} */}

          <StaticImage 
            src="../assets/images/headshot.jpg"
            alt="Head Shot"
            placeholder="blurred"
            layout="constrained"
            // width={300}
            // height={500}
            imgStyle={{
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
              justifyItems: "center",
              borderRadius: "20px",
            }}
          />

        </ColumnTwo>
      </ContentWrapper>
    </AboutContainer>
  );
};