import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import infoblock from "../components/Reusable/infoblock"
import Demo from "../components/Reusable/Demo"
import DualInfo from "../components/Reusable/DualInfo"
import TeamPhotoSection from "../components/About/TeamPhotoSection"


const About = ({ data }) => (

  <Layout>
    {/* <Seo title="Home" />
    */}
    <HeroSection
    // img={data.img.indexPage.fluid}
     title="About Learn Code Online" subtitle="" heroclass="about-section"
    className="about-section" />
    <DualInfo title="From CEO" imageLink="https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?cs=srgb&dl=pexels-hitesh-choudhary-1261427.jpg&fm=jpg"/>

    <Demo title="About Us" heading="About Us"/>
    <TeamPhotoSection />
    
  </Layout>
)

export const query = graphql`
{
  fileName: file(relativePath: { eq: "about.png" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 250) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
  }
`

export default About
