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
      <SEO
        title="About"
        keywords={[`premed`, `medical school`, `javascript`, `react`]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h3 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            About this site
          </h3>

          <p>
            I am a curious person and committed to life-long learning, both in
            and out of the classroom.{" "}
          </p>
          <p>
            Creating this website involved learning how to use a new command
            line tool (the gatsby-cli) and a templating system. I enjoy coding
            for fun because it involves an exciting mix of science and
            creativiity.{" "}
          </p>
          <p>
            {" "}
            For other projects, I've used the Hugo Static Site Generator, but
            this website is created using Gatsby, which has a slightly different
            feature set and is based the React Javascript framework. There are
            advantages to static-site generators, including security and speed.
            <img
              src={
                "https://www.gatsbyjs.com/static/9a172caa0d7bafa251ede1162087bded/8f6f3/home-page_fast-to-build.jpg"
              }
            />
          </p>
          <p> </p>
          <p> </p>

          <h3 id="dynamic-styles"> Powered by coffee</h3>
          <p>
            <img
              src={
                " https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1662&q=80"
              }
            />{" "}
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
