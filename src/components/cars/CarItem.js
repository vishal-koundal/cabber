import Image from 'next/image'
import React from 'react'

const CarItem = () => {
  return (
    <div className="border border-borderLight hover:border-brand rounded-lg overflow-hidden transition-all duration-300">
      <div className="pt-6 px-6 pb-4">
        <h2 className="text-xl text-brand">BMW 7 Series Sedan</h2>
        <p className="text-grayDark text-sm font-light mt-2">
          Lorem ipsum doler sit amit is the dummy text for testing
        </p>
      </div>
      <div className="relative">
        <Image
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={500}
          height={270}
        />
        <div className="flex items-center absolute bottom-5 left-5">
          <div className="bg-white rounded-full h-12 w-12 bg-borderLight flex items-center justify-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              aria-hidden="true"
              height="1.25em"
              width="1.25em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z"></path>
            </svg>
          </div>
          <span className="text-white ml-3">Passengers 4</span>
        </div>
      </div>
    </div>
  )
}

export default CarItem
