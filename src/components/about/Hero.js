import Button from '@/elements/Button';
import config from '@/utils/config';
import React from 'react';

const Hero = ({ settings }) => {
  return (
    <section className="overflow-hidden bg-[url(/images/about.webp)] bg-cover bg-center bg-no-repeat">
      <div className="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="text-center sm:text-left ">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
            Who we are
          </h2>

          <p className=" max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
            {settings?.description || config.description}
          </p>

          <div className="mt-4 sm:mt-8">
            <Button href="/cars" variant="white" size="large">
              Book a Car
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
