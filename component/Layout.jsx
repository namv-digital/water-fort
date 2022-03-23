import React from 'react'
import Navigation from './Navigation'
import Head from 'next/head'
import Footer from './Footer'
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Water Fort</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
