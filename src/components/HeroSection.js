import React from 'react';
import styled from 'styled-components';
import Spline from '@splinetool/react-spline';
import heroImg from "../HeroImage.png"

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  background-color:rgb(234, 237, 242);
  color: black;
  height: 60vh;
`;

const TextContainer = styled.div`
  max-width: 600px;
  height: 60vh;
`;

const Heading = styled.h1`
  font-size: 2rem;

`;

const SubHeading = styled.p`
  font-size: 1.2rem;
`;
const HeroImg = styled.p`
  width: 95%;
  height: 100%;
  align-items: right;
  justify-content: right;
  animation: fadeInLeft 1s ease-in-out;
  flex-direction: column;
`;


//<ThreeDModel />
const HeroSection = () => {
  return (
    <div>
    <HeroContainer>
      <TextContainer>
        <Heading>Welcome to the New Zealand Odia Society</Heading>
        <SubHeading>The New Zealand Odia Society is a vibrant and welcoming community for individuals and families from Odisha, India, residing in New Zealand.</SubHeading>
        <SubHeading>Our mission is to foster a sense of belonging and celebrate the rich cultural heritage of Odisha through festivals, social events, and 
          community initiatives. We aim to preserve and promote Odia traditions while embracing the diversity of New Zealand, building a bridge between two beautiful cultures.</SubHeading>

        <SubHeading>Join us in celebrating our heritage, sharing traditions, and creating lifelong memories as we grow together as a community.</SubHeading>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
            Get Started
          </button>
      </TextContainer>

      <img src={heroImg} alt="Hero"
       className="HeroImg"/>
    </HeroContainer>

    
    </div>


  );
};

export default HeroSection;
