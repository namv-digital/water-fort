import Link from 'next/link'
import React from 'react'
import { service } from '../../constant/SERVICE_MOCK_DATA'
const HomeMiddle = () => {
  return (
    <div>
      <div className="grid hidden gap-y-2 gap-x-8 bg-white py-20 md:grid md:grid-cols-3 md:px-10 lg:px-120px">
        {service.map((service) => (
          <div className="relative flex md:text-left pb-4" key={service.name}>
            <img src={service.img} alt="" className="mx-auto md:mx-0" />
          </div>
        ))}
        {service.map((service) => (
          <div className="relative text-center md:text-left" key={service.name}>
            <h2 className="w-full text-2xl font-bold text-primary">
              {service.name}
            </h2>
          </div>
        ))}
        {service.map((service) => (
          <div className="relative text-center md:text-left" key={service.name}>
            <p className="mt-2 w-full text-base text-blue-gray">
              {service.discription}
            </p>
          </div>
        ))}
        {service.map((service) => (
          <div className="relative text-center md:text-left" key={service.name}>
            <Link href={service.link}>
              <button className=" mx-auto mt-6  flex bg-primary px-6 py-2 text-white md:left-0 md:mx-0">
                Find Out More
                <img
                  src="/images/icon/arrow.png"
                  alt=""
                  className="my-auto ml-3"
                />
              </button>
            </Link>
          </div>
        ))}
      </div>
      <div className=" grid gap-10 bg-white py-20 md:hidden lg:grid-cols-3 lg:px-120px">
        {service.map((service) => (
          <div className="text-center" key={service.name}>
            <img src={service.img} alt="" className="mx-auto md:mx-0" />
            <h2 className="mt-27px text-2xl font-bold text-primary">
              {service.name}
            </h2>
            <p className="mt-2 text-base text-blue-gray">
              {service.discription}
            </p>
            <Link href={service.link}>
              <button className="mx-auto mt-6 flex bg-primary px-6 py-2 text-white md:mx-0">
                Find Out More
                <img
                  src="/images/icon/arrow.png"
                  alt=""
                  className="my-auto ml-3"
                />
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomeMiddle
