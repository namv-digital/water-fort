import Link from 'next/link'
import React, { useState } from 'react'

const Navigation = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <div className="container mx-auto hidden space-x-50.95px py-6 px-5  md:flex md:px-0 lg:max-w-container">
        <div>
          <Link href="/">
            <img src="/images/Logo.png" alt="" width="147.05px" />
          </Link>
        </div>
        <div className="font-semibold text-seccondery md:flex">
          <div className="my-auto mr-8">
            <Link href="/about">About</Link>
          </div>
          <div className="my-auto mr-8">
            <Link href="/solutions/OTC and Block Trading">Solutions</Link>
          </div>
          <div className="my-auto mr-8">
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
      {/* responsive navigation */}
      <div className="mx-5 flex justify-between py-6 md:hidden">
        <div>
          <Link href="/">
            <img src="/images/Logo.png" alt="" width="147.05px" />
          </Link>
        </div>
        <button onClick={() => setOpen(!open)}>
          <img src="images/icon/menu.png" width={40} alt="" />
        </button>
      </div>
      {open && (
        <div className="fixed top-0 z-50 h-screen w-screen bg-fill text-seccondery">
          <div className="mt-72 text-center text-3xl font-semibold text-seccondery">
            <button
              onClick={() => setOpen(!open)}
              className="absolute top-5 right-5"
            >
              <img
                src="images/icon/cross.png"
                alt=""
                width={35}
                className="rotate-5"
              />
            </button>
            <div onClick={() => setOpen(!open)}>
              <Link href="/">Home</Link>
            </div>
            <div onClick={() => setOpen(!open)} className="mt-5">
              <Link href="/about">About</Link>
            </div>
            <div onClick={() => setOpen(!open)} className="mt-5">
              <Link href="/solutions">Solutions</Link>
            </div>
            <div onClick={() => setOpen(!open)} className="mt-5">
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navigation
