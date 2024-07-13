import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogItem = () => {
  return (
    <div className="overflow-hidden  relative group transition delay-0 duration-500 mb-4">
      <div className="relative h-[300px] overflow-hidden rounded-lg">
        <Image
          src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={450}
          height={300}
          className="rounded-lg transition ease-in-out delay-0 duration-500 group-hover:scale-[1.15] overflow-hidden h-[300px]"
        />
        {/* linear-gradient(to top, #E95440 0%, rgba(233, 84, 64, 0.3) 100%) */}
        <div className="bg-black/10 group-hover:bg-gradient-to-t group-hover:from-[#E95440] from-0% group-hover:to-[233, 84, 64, 0.3] to-100% absolute inset-0 pl-6 pt-5 text-white rounded-lg">
          <time class="" datetime="2024-04-18T17:07:15+00:00">
            <span class="text-5xl">18.</span>
            <br /> <span class="text-base">April, 2024</span>
          </time>
        </div>
      </div>
      <div className="pt-5">
        <span className="font-semibold text-sm text-primary">Car Rent</span>
        <h2 className="text-lg text-brand mt-2 font-semibold">
          BMW 7 Series Sedan
        </h2>
        <p className="text-brand text-sm font-light mt-2">
          Lorem ipsum doler sit amit is the dummy text for testing
        </p>
        <Link
          href="/"
          className="border border-brand h-12 w-12 rounded-full flex items-center justify-center mt-5"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            aria-hidden="true"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default BlogItem
