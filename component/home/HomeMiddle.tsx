import Link from 'next/link'
import React from 'react'
import { service } from '../../constant/SERVICE_MOCK_DATA'
const HomeMiddle = () => {
  return (
    <div>
      <div className=" grid gap-10 bg-white py-20 lg:grid-cols-3 lg:px-120px">
        {service.map((service) => (
          <div className='text-center md:text-left'>
            <img src={service.img} alt="" className="mx-auto md:mx-0" />
            <h2 className="mt-27px text-2xl font-bold text-primary md:w-2/3">
              {service.name}
            </h2>
            <p className='text-base text-blue-gray mt-2 md:w-2/3'>
              {service.discription}
            </p>
            <Link href={service.link}>
              <button className="mt-6 flex mx-auto md:mx-0 bg-primary px-6 py-2 text-white">
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
