import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h3 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            A curious person dedicated to service, life-long learning, running,
            and coffee.
          </h3>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Large imagery is at the heart of this theme</figcaption>
          </figure>

          <h3 id="dynamic-styles">Service</h3>
          <p>
            After seeing the impact the physician I shadowed had on her
            underserved community, I realized the amount of opportunities this
            field has for serving others.
          </p>

          <p>
            {" "}
            I was adopted from China, and I know that my life could have played
            out quite differently nad I want to pay it forward to people who
            might not have had the same chance as I did.{" "}
          </p>

          <p>
            {" "}
            In college, some of my most meaningful experiences were when I got
            to be involved in the community and try to make a positive
            difference. Particularly, my volunteer opportunity in an Adopt A
            Grandparent Program gave me memories that I will carry with me for
            the rest of my life. The stories I received from my adopted
            grandparent had so much wisdom.
          </p>

          <p>
            {" "}
            Through its very nature, medicine is a career that will provide me
            ample opportunities to pay it forward and make a positive impact on
            others.{" "}
          </p>

          <h3 id="dynamic-styles"> Life-Long Learning</h3>
          <p>
            I commit to life-long learning, both in and out of the classroom. In
            medicine, offers an ever evolving body of knowledge.{" "}
          </p>

          <p>
            In fact, creating this website involved learning how to use a new
            command line tool and templating system.{" "}
          </p>

          <p>
            {" "}
            For other projects, I've used the Hugo Static Site Generator, but
            this website is created using Gatsby, which works more as a
            progressive web app.
          </p>

          <p>
            {" "}
            I enjoy learning about science and medicine, but I also love
            learning about different perspectives encapsulated by humanities
            subjects. I have a wide range of interests, from politics, to
            exercise (especially running) physiology/nutrition, politics, social
            justice issues, sleep, memory, anatomical variation, open source,
            and art techniques.{" "}
          </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
