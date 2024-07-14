'use client'

import Button from '@/elements/Button'
import React from 'react'
import BookingForm from '@/components/booking/Form'

const Hero = () => {
  return (
    <section class="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
      <div class="absolute inset-0 bg-[#00000040]"></div>

      <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 justify-between">
        <div class="max-w-xl">
          <h1 class="text-3xl font-extrabold text-white sm:text-5xl">
            Let us find your cab
            <strong class="block font-extrabold text-primary mt-2">
              Cabber.
            </strong>
          </h1>

          <p class="mt-4 max-w-lg text-white sm:text-lg/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div class="mt-8 flex flex-wrap gap-4 text-center">
            <Button href="/contact" variant="white" size="large">
              Contact Us
            </Button>
          </div>
        </div>
        <div className="max-w-md bg-white w-full rounded-lg md:p-10 p-4">
          <BookingForm />
        </div>
      </div>
    </section>
  )
}

export default Hero
