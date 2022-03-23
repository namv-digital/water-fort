import type { NextPage } from 'next'
import Body from '../component/about/Body'
import Layout from '../component/Layout'
import Navigation from '../component/Navigation'

const About: NextPage = () => {
  return (
    <div>
      <Layout>
        <div className='bg-fill pb-28'>
          <Navigation />
          <h1 className='container mx-auto lg:max-w-container text-4xl font-bold text-primary mt-14 md:mt-20  px-5 md:px-0'>About</h1>
        </div>
        <Body />
      </Layout>
    </div>
  )
}

export default About

