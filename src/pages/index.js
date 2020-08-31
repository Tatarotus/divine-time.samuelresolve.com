import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

export default function Home({ data }) {
  const divineTime = data.allRestApiTime.edges[0].node

  const [currentYear, setCurrentYear] = useState("")
  const [currentDay, setCurrentDay] = useState("")
  const [currentHour, setCurrentHour] = useState("")

  useEffect(() => {
    setCurrentYear(divineTime.currentYear)
    setCurrentHour(divineTime.currentHour)
    setCurrentDay(divineTime.currentDay)
  }, [divineTime])

  return (
    <section className="flex flex-col items-center justify-center w-screen h-screen bg-gray-800">
      <div>
        <div className="flex justify-center text-white">
          <div className="flex items-center">
            <div className="c-year">
              {currentYear ? (
                <Image
                  draggable={false}
                  className="w-48"
                  fluid={data[currentYear].childImageSharp.fluid}
                  alt={`${currentYear} planet`}
                />
              ) : null}
            </div>
            <span className="mx-4 text-5xl">:</span>
          </div>
          <div className="flex items-center">
            <div className="c-day">
              {currentDay ? (
                <Image
                  draggable={false}
                  className="w-48"
                  fluid={data[currentDay].childImageSharp.fluid}
                  alt={`${currentDay} planet`}
                />
              ) : null}
            </div>
            <span className="mx-4 text-5xl">:</span>
          </div>
          <div className="flex items-center">
            <div className="c-hour">
              {currentHour ? (
                <Image
                  draggable={false}
                  className="w-48"
                  fluid={data[currentHour].childImageSharp.fluid}
                  alt={`${currentHour} planet`}
                />
              ) : null}
            </div>
          </div>
        </div>
        <div className="flex justify-around w-full mt-4 text-lg font-bold text-white">
          <h1>Year</h1>
          <h1>Day</h1>
          <h1>Hour</h1>
        </div>
      </div>
    </section>
  )
}

export const query = graphql`
  {
    allRestApiTime {
      edges {
        node {
          currentDay
          currentHour
          currentYear
        }
      }
    }
    jupiter: file(relativePath: { eq: "jupiter.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mars: file(relativePath: { eq: "mars.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mercury: file(relativePath: { eq: "mercury.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    moon: file(relativePath: { eq: "moon.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    saturn: file(relativePath: { eq: "saturn.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sun: file(relativePath: { eq: "sun.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    venus: file(relativePath: { eq: "venus.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
