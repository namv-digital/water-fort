import React from 'react'
import Navigation from './Navigation'
import Head from 'next/head'
import Footer from './Footer'
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Waterfort</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='font-saolText'>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
