import type { NextPage } from 'next'
import AboutBanner from '../component/about/AboutBanner'
import Body from '../component/about/Body'
import Layout from '../component/Layout'
import Navigation from '../component/Navigation'

const About: NextPage = () => {
  return (
      <Layout>
        <Navigation />
         <AboutBanner />
         <Body />
      </Layout>
  )
}

export default About
