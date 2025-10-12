import CarsHome from '@/components/cars/CarsHome';
import Hero from '@/components/home/Hero';
import Steps from '@/components/home/Steps';
import Services from '@/components/our-services/Services';
import Reviews from '@/components/reviews/Reviews';
import BlogsHome from '@/components/blog/BlogsHome';
import Image from 'next/image';
import {
  getAllServices,
  getFeaturedBlogs,
  getFeaturedCars,
} from '../../lib/sanity';
import { client } from '../../lib/sanity';

export default async function Home() {
  return (
    <main className="min-h-screen ">
      <Hero />
      <Steps />
      <Services />
      <CarsHome />
      <Reviews />
      <BlogsHome />
    </main>
  );
}
