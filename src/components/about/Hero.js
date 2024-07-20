import Button from '@/elements/Button'
import React from 'react'

const Hero = () => {
  return (
    <section class="overflow-hidden bg-[url(https://images.pexels.com/photos/313779/pexels-photo-313779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-cover bg-center bg-no-repeat">
      <div class="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24">
        <div class="text-center sm:text-left ">
          <h2 class="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
            Who we are
          </h2>

          <p class="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            officia corporis quasi doloribus iure architecto quae voluptatum
            beatae excepturi dolores.
          </p>

          <div class="mt-4 sm:mt-8">
            <Button href="/cars" variant="white" size="large">
              Book a Car
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
