import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ArrowUp from '../../../public/icons/ArrowUp'

const ServiceItem = () => {
  return (
    <div className="overflow-hidden  relative group transition delay-0 duration-500 mb-4">
      <div className="relative h-[300px] overflow-hidden rounded-lg">
        <Image
          src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={450}
          height={450}
          className="rounded-lg transition ease-in-out delay-0 duration-500 group-hover:scale-[1.15] overflow-hidden h-[300px]"
        />
        {/* linear-gradient(to top, #5046e5 0%, rgba(233, 84, 64, 0.3) 100%) */}
        <div className="bg-black/10 group-hover:bg-gradient-to-t group-hover:from-[#5046e580] from-0% group-hover:to-#5046e530 to-100% absolute inset-0 pl-6 pt-5 text-white rounded-lg"></div>
      </div>
      <div className="pt-5">
        <h2 className="text-lg text-brand mt-2 font-semibold">Self Drive</h2>
        <p className="text-brand text-sm font-light mt-2">
          Lorem ipsum doler sit amit is the dummy text for testing
        </p>
        <Link
          href="/"
          className="text-sm font-medium flex items-center text-primary mt-5"
        >
          Book Now
          <ArrowUp />
        </Link>
      </div>
    </div>
  )
}

export default ServiceItem
