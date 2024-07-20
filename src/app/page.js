import Hero from '@/components/home/Hero'
import Steps from '@/components/home/Steps'
import Reviews from '@/components/reviews/Reviews'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Hero />
      <Steps />
      <Reviews />
    </main>
  )
}
