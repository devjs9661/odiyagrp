import React, { useState } from "react";
import HeroSection from './HeroSection';
import '../style/Home.css'
import Mission1 from '../Mission1.png'
import Mission2 from '../Mission2.png'
import Mission3 from '../Mission3.png'
import Mission4 from '../Mission4.png'
import Mission5 from '../Mission5.png'
import Mission6 from '../Mission6.png'

export const Home = (props) => {

    return (
        <div className="HomeContainer">
            <div className="ImageContainer">
            <img src={Mission1} alt="Sample" />
            <img src={Mission2} alt="Sample" />
            <img src={Mission3} alt="Sample" />
            <img src={Mission4} alt="Sample" />
            <img src={Mission5} alt="Sample" />
            <img src={Mission6} alt="Sample" />
            </div>
        </div>
    )
}