import config from '@/utils/config'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const socials = [
  {
    id: 1,
    icon: '/icons/youtube.png',
    href: config.youtube,
  },
  {
    id: 2,
    icon: '/icons/facebook.png',
    href: config.facebook,
  },
  {
    id: 3,
    icon: '/icons/instagram.png',
    href: config.instagram,
  },
]
const Footer = () => {
  return (
    <footer className="footer footer-center bg-light text-base-content rounded px-10 pt-10 pb-5">
      <nav className="grid grid-flow-col gap-4">
        <Link
          href="/"
          className="link link-hover text-brand hover:text-primary"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="link link-hover text-brand hover:text-primary"
        >
          About us
        </Link>

        <Link
          href="/cars"
          className="link link-hover text-brand hover:text-primary"
        >
          Cars
        </Link>
        <Link
          href="/contact"
          className="link link-hover text-brand hover:text-primary"
        >
          Contact
        </Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          {socials.map((item) => (
            <a href={item.href} key={item.id} className="">
              <Image src={item.icon} height={37} width={37} />
            </a>
          ))}
        </div>
      </nav>
      <aside className="border-t w-full pt-5">
        <p>
          Copyright{' '}
          <span className="text-primary">©${new Date().getFullYear()}</span> -
          All right reserved by {config.siteName}
        </p>
      </aside>
    </footer>
  )
}

export default Footer
