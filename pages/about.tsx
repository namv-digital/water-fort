import type { NextPage } from 'next'
import Body from '../component/about/Body'
import Layout from '../component/Layout'
import Navigation from '../component/Navigation'

const About: NextPage = () => {
  return (
    <div>
      <Layout>
        <div className="bg-fill pb-28">
          <Navigation />
          <div className="container mx-auto mt-16 px-5 md:mt-91px md:px-0 lg:max-w-container">
            <h1 className="text-4xl font-bold text-primary">About</h1>
          </div>
        </div>
        <Body />
      </Layout>
    </div>
  )
}

export default About
