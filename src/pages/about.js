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
            <figcaption>
              Images that are not mine are sourced in the public domain
              (Unsplash.com)
            </figcaption>
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
            I am comitted to furthering social justice in medicine and in
            greater society. Racism is a public health crisis, evidenced by
            significantly unequal health outcomes and racial biases that affect
            care. For example, this AAMC article highlights disparities in how
            we treat pain in Black pain:{" "}
            <a href="https://www.aamc.org/news-insights/how-we-fail-black-patients-pain">
              How we fail black patients in pain by Janice A. Sabin, PHD, MSW
            </a>{" "}
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
            <img
              src={
                "https://www.gatsbyjs.com/static/9a172caa0d7bafa251ede1162087bded/8f6f3/home-page_fast-to-build.jpg"
              }
            />
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
          <p>
            {" "}
            Art, be it illustration, photography, design, is an awesome field
            that lets me combine my interests in science and the humanities. I
            love that there is always something new to learn and experiment
            with. It's a relaxing activity that allows me to express myself.
            I've also been able to implement my artwork in my small business,
            which is a website about art resources and tutorials. It also has a
            strong community of artists, and we learn with each other.
            <a href="https://kalispera.xyz/portfolio/">
              {" "}
              <img src={" https://i.imgur.com/H1h0xIN.jpg"} />
            </a>
            Click on the image preview for more artwork.{" "}
          </p>

          <h3 id="dynamic-styles"> Running</h3>
          <p>
            Running will always be a favorite activity, as it is a healthy
            outlet for stress, a time to think, a time to have great
            conversations with friends, as well as to stay in shape.{" "}
          </p>

          <p>
            This sport also allows me to always have a new goal. I've achieved a
            few milestones in my journey in running: 5K, half marathon, and the
            full marathon I ran in Chicago for the awesome charity, St. Jude.
            With the help of so many others, we raised over $1,800 to advance
            children's cancer research.{" "}
          </p>
          <img
            src={
              "https://scontent.fcps1-1.fna.fbcdn.net/v/t1.0-9/72882811_10215566762667806_208745310485217280_o.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_ohc=OakEN5I-tCcAX-8hYlZ&_nc_ht=scontent.fcps1-1.fna&oh=dd4c58bc7af66ea74c3665c8f9a5c9d7&oe=5F7C67C3"
            }
          />

          <h3 id="dynamic-styles"> Coffee</h3>
          <p>
            This human is powered by coffee and naps.
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
