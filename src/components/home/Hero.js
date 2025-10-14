'use client';

import Button from '@/elements/Button';
import React from 'react';
import BookingForm from '@/components/booking/Form';
import config from '@/utils/config';
import Image from 'next/image';
import { sanityImageUrl } from '../../../lib/sanity';

const Hero = ({ settings }) => {
  const heroData = settings?.homeHero || {};
  const heroImage = heroData?.featureImage
    ? sanityImageUrl({
        source: heroData.featureImage,
        width: 1920,
        height: 1080,
      })
    : null;

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: heroImage
          ? `url(${heroImage})`
          : 'url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)',
      }}
    >
      <div className="absolute inset-0 bg-[#00000020]"></div>
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:py-24 lg:py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 justify-between">
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            {heroData.title || settings?.name}
          </h1>

          <p className="mt-4 max-w-lg text-white text-base sm:text-lg leading-relaxed mx-auto lg:mx-0">
            {heroData.description || config.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
            <Button
              href={heroData.redirect || '/contact'}
              variant="white"
              size="large"
            >
              Contact Us
            </Button>
          </div>
        </div>
        {/* <div className="max-w-md bg-white w-full rounded-lg md:p-10 p-4">
          <BookingForm />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
