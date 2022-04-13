import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useState } from 'react'

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const route = useRouter();
  return (
    <div className='bg-white py-5'>
      <div className="container mx-auto hidden justify-between  px-5  md:flex md:px-0 lg:max-w-container">
        <div className='cursor-pointer flex items-center'>
          <Link href="/">
            <img src="/images/Logo.png" alt="" width="40%" />
          </Link>
        </div>
        <div className="font-semibold text-seccondery md:flex">
          <div className="my-auto mr-10">
            <Link href="/about"><p className={`${route.asPath === "/about" && "text-ring-color"} cursor-pointer text-base`}>ABOUT</p></Link>
          </div>
          <div className="my-auto mr-10">
            <Link href="/solutions"><p className={`${route.asPath === "/solutions" && "text-ring-color"} cursor-pointer text-base`}>SOLUTIONS</p></Link>
          </div>
          <div className="my-auto">
            <Link href="/contact"><p className={`${route.asPath === "/contact" && "text-ring-color"} cursor-pointer text-base`}>CONTACT</p></Link>
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
              className="absolute top-7 right-5"
            >
              <img
                src="images/icon/cross.png"
                alt=""
                width={35}
                className=""
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
