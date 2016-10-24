import React, { Component } from 'react';
import { Link } from 'react-router';
import styleVars from '../../styles/variables';
import styled from 'styled-components';

export default class Home extends Component {

  render() {
    return (
      <div>
        <div className="content-wrapper">
        
          <h1>Hello World</h1>
          
          <Section>
            <ImgEye src="/img/eye.png" />
            <SectionText>A few years ago, I was all set to begin optometry school. I'd spent years taking the necessary courses, exams, and interviews. I picked a school, enrolled in classes, and my wife and I were ready to move.</SectionText>
          </Section>
          
          <Section>
            <ImgCoding src="/img/coding.jpg" />
            <SectionText>Instead, providence landed me on the support team of a small software company. I spent years worth of early mornings, late nights, and weekends learning how to code. Eventually I could build things of value, and transitioned to the development team. I love what I do.</SectionText>
          </Section>
          
          <Section>
            <ImgReactLogo src="/img/react-logo.png" />
            <SectionText>My focus these days is on crafting memorable JavaScript-based clientside experiences, particularly with React/Redux. I'm still early in the journey, and learning a ton. #juniordevforlife</SectionText>
          </Section>

        </div>
      
        <MountainSection>
          
          <TrailQuote>
            “The trail is the thing, not the end of the trail. Travel too fast and you miss all you are traveling for.”
          </TrailQuote>
        
          <MtnLinkWrapperTL>
            <MtnLinkLine />
            <MtnLinkTL to="/projects">Projects</MtnLinkTL>
          </MtnLinkWrapperTL>
          
          <MtnLinkWrapperBL>
            <MtnLinkLine />
            <MtnLinkBL to="/learning">Learning</MtnLinkBL>
          </MtnLinkWrapperBL>
        
          <MtnLinkWrapperTR>
            <MtnLinkLine />
            <MtnLinkTR to="/posts">Posts</MtnLinkTR>
          </MtnLinkWrapperTR>
          
          <MtnLinkWrapperBR>
            <MtnLinkLine />
            <MtnLinkBR to="/about">About</MtnLinkBR>
          </MtnLinkWrapperBR>
          
        </MountainSection>
        
      </div>
    );
  }
}

// Styles

const Section = styled.div`
  display: flex;
  margin-bottom: 30px;
  background-color: ${styleVars.colors.ltBlue};
  padding: 20px;
  border-radius: 5px;
`;

const SectionText = styled.div`
  align-self: center;
`;

const ImgEye = styled.img`
  align-self: center;
  margin-right: 30px;
  margin-left: -98px;
  height: 156px;
`;

const ImgCoding = styled.img`
  align-self: center;
  margin-right: 30px;
  height: 156px;
  border-radius: 50%;
  margin-left: -102px;
`;

const ImgReactLogo = styled.img`
  align-self: center;
  margin-right: 30px;
  height: 166px;
  margin-left: -102px;
`;

const MountainSection = styled.div`
  margin-top: 100px;
  background-image: url("img/path.jpg");
  height: 400px;
  background-size: cover;
  background-position: center;
  position: relative;
  margin-bottom: 30px;
`;

const TrailQuote = styled.h2`
  text-align: center;
  color: white;
  padding: 30px;
  font-size: 24px;
  @media (max-width: 640px) {
    font-size: 20px;
  }
`;

// Mtn Link Shared
const MtnLinkWrapper = styled.div`
  position: absolute;
  color: white;
  font-weight: 600;
`;

const MtnLinkLine = styled.div`
  position: absolute;
  width: 100%;
  height: 4px;
  background-color: ${styleVars.colors.red};
  top: 50%;
  z-index: 0;
  border-radius: 15px;
  @media (max-width: 640px) {
    display: none;
  }
`;

const MtnLink = styled(Link)`
  color: white;
  display: inline-block;
  padding: 24px;
  background-color: ${styleVars.colors.red};
  font-size: 36px;
  z-index: 10000;
  border-radius: 4px;
  
  @media (max-width: 1000px) {
    padding: 22px;
    font-size: 28px;
  }
  
  @media (max-width: 800px) {
    padding: 18px;
    font-size: 22px;
  }
  
  @media (max-width: 640px) {
    padding: 6px 18px;
    font-size: 20px;
    display: block;
    background-color: rgba(0,0,0,.7);
  }
`;

// Mtn Link: Top Left
const MtnLinkWrapperTL = styled(MtnLinkWrapper)`
  right: 50%;
  bottom: 100px;
  width: 20%;
  text-align: left;
  transform: skewY(15deg);
  @media (max-width: 640px) {
    right: 55%;
    width: 40%;
    text-align: center;
  }
`;

const MtnLinkTL = styled(MtnLink)`
  transform: skewY(-15deg);
`;

// Mtn Link: Top Right
const MtnLinkWrapperTR = styled(MtnLinkWrapper)`
  left: 50%;
  bottom: 73px;
  width: 20%;
  text-align: right;
  transform: skewY(-15deg);
  @media (max-width: 640px) {
    left: 55%;
    width: 40%;
    text-align: center;
    bottom: 100px;
  }
`;

const MtnLinkTR = styled(MtnLink)`
  transform: skewY(15deg);
`;

// Mtn Link: Bottom Left
const MtnLinkWrapperBL = styled(MtnLinkWrapper)`
  right: 50%;
  bottom: 34px;
  width: 40%;
  text-align: left;
  transform: skewY(5deg);
  @media (max-width: 640px) {
    right: 58%;
    text-align: center;
  }
`;

const MtnLinkBL = styled(MtnLink)`
  transform: skewY(-5deg);
`;

// Mtn Link: Bottom Right
const MtnLinkWrapperBR = styled(MtnLinkWrapper)`
  left: 50%;
  bottom: 7px;
  width: 40%;
  text-align: right;
  transform: skewY(-5deg);
  @media (max-width: 640px) {
    left: 58%;
    text-align: center;
    bottom: 34px;
  }
`;

const MtnLinkBR = styled(MtnLink)`
  transform: skewY(5deg);
`;
