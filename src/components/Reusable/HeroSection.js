import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Background from '../../images/heromain.jpg';

var sectionStyle = {
  width: "100%",
  height: "400px",
  minHeight: "100vh",
  backgroundImage: "url(" + { Background } + ")"
};

function HeroSection({ img, title, subtitle, heroclass }) {
  
  return (
    // <StaticImage className={heroclass} fluid={img}>
    //   <h1 className='text-white text-uppercase text-center display-4'>{title}</h1>
    //   <div>
    //     <h4 className='text-warning'>{subtitle}</h4>
    //   </div>
    // </StaticImage>
    <div style={ sectionStyle } className={heroclass}>
      <h3>{title}</h3>
      <h6>{subtitle}</h6>
    </div>
  );
}

export default HeroSection
