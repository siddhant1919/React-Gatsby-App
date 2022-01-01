import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import infoblock from "../components/Reusable/infoblock"
import Demo from "../components/Reusable/Demo"
import DualInfo from "../components/Reusable/DualInfo"
import CourseCart from "../components/Cart/CourseCart"


const IndexPage = ({ data }) => (
  
  <Layout>
    {/* <Seo title="Home" />
    */}
    <HeroSection
      // img={data.img.indexPage.fluid}
      title="I Write Code" subtitle="LCO.in" heroclass="hero-section"
    />
    <Demo title="About Us" heading="About Us" />
    <CourseCart courses={data.courses} />
    <DualInfo title="Our Team" imageLink="https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?cs=srgb&dl=pexels-hitesh-choudhary-1261427.jpg&fm=jpg" />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "heromain.png" }) {
        childImageSharp {
          fluid{
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      courses: allContentfulCourses{
        edges{
          node{
          id
            title
            price
            category
            description{
            description
            }
            image {
              id
            }
          }
        }
      }
  }
`

export default IndexPage
