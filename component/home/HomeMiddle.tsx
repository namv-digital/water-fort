import Link from 'next/link'
import React from 'react'
import { service } from '../../constant/SERVICE_MOCK_DATA'
const HomeMiddle = () => {
  return (
    <div>
      <div className=" grid gap-y-2 gap-x-8 bg-white py-20 lg:grid-cols-3 lg:px-120px">
        {service.map((service) => (
          <div className="relative text-center md:text-left">
            <img src={service.img} alt="" className="mx-auto md:mx-0" />
          </div>
        ))}
        {service.map((service) => (
          <div className="relative text-center md:text-left">
            <h2 className="w-full text-2xl font-bold text-primary">
              {service.name}
            </h2>
          </div>
        ))}
        {service.map((service) => (
          <div className="relative text-center md:text-left">
            <p className="mt-2 w-full text-base text-blue-gray">
              {service.discription}
            </p>
          </div>
        ))}
        {service.map((service) => (
          <div className="relative text-center md:text-left">
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
    </div>
  )
}

export default HomeMiddle
