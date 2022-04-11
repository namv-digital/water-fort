import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import HomeBottom from '../component/home/HomeBottom'
import Layout from '../component/Layout'
import Navigation from '../component/Navigation'
import SolutionBanner from '../component/solution/SolutionBanner'
import SolutionBottom from '../component/solution/SolutionBottom'
import SolutionMiddle from '../component/solution/SolutionMiddle'

const Solutions: NextPage = () => {
  const router = useRouter()
  return (
   <Layout>
     <Navigation />
     <SolutionBanner />
     <SolutionMiddle />
     <SolutionBottom />
     <HomeBottom />
   </Layout>
  )
}

export default Solutions
