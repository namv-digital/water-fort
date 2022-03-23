import Link from 'next/link'
import React from 'react'
import { service } from '../../constant/SERVICE_MOCK_DATA'
const HomeMiddle = () => {
  return (
    <div>
      <div className="-mt-16 grid gap-10 rounded-large bg-white py-20 lg:grid-cols-3 lg:px-120px">
        {service.map((service) => (
          <div className="text-center">
            <img src={service.img} alt="" className="mx-auto" />
            <h2 className="mt-27px text-2xl font-bold text-primary">
              {service.name}
            </h2>
            <Link href={service.link}>
              <button className="mx-auto mt-10 flex rounded-md border-2 border-button px-6 py-2 text-button">
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
