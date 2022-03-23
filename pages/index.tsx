import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../component/home/Banner'
import HomeBottom from '../component/home/HomeBottom'
import HomeMiddle from '../component/home/HomeMiddle'
import Layout from '../component/Layout'
import Navigation from '../component/Navigation'

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Banner />
        <HomeMiddle />
        <HomeBottom />
      </Layout>
    </>
  )
}

export default Home
