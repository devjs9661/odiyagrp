import React, { useState } from "react";
import HeroSection from './HeroSection';
import heroImg from "../HeroImage.png"
import '../style/About.css'


export const About = (props) => {

    return (
    <div className="animatedcontainer">
      <div className="image">
      
        <img src={heroImg} alt="Sample" />
      </div>
      <div className="text">
        <b>Potluck on the event of Holi...</b><br /><br />
      The New Zealand Odia Society is a vibrant and welcoming community for individuals and families from Odisha, India, residing in New Zealand.
      Our mission is to foster a sense of belonging and celebrate the rich cultural heritage of Odisha through festivals, social events, and 
      community initiatives. We aim to preserve and promote Odia traditions while embracing the diversity of New Zealand, building a bridge between two beautiful cultures.
      Join us in celebrating our heritage, sharing traditions, and creating lifelong memories as we grow together as a community.
      </div>
    </div>
    )
}