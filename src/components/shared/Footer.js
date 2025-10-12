import config from '@/utils/config';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = ({ settings }) => {
  const socialLinks = settings?.socialLinks || {};
  const contactInfo = settings?.contactInfo || {};

  const socials = [
    {
      id: 1,
      icon: '/icons/youtube.png',
      href: socialLinks.youtube || config.youtube,
    },
    {
      id: 2,
      icon: '/icons/facebook.png',
      href: socialLinks.facebook || config.facebook,
    },
    {
      id: 3,
      icon: '/icons/instagram.png',
      href: socialLinks.instagram || config.instagram,
    },
  ];

  return (
    <footer className="footer footer-center  text-base-content rounded px-10 pt-10 pb-5">
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
        <Link
          href="/blogs"
          className="link link-hover text-brand hover:text-primary"
        >
          Blog
        </Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          {socials.map((item) => (
            <a href={item.href} target="_blank" key={item.id} className="">
              <Image src={item.icon} height={37} width={37} />
            </a>
          ))}
        </div>
      </nav>
      <aside className="border-t w-full pt-5">
        <p>
          Copyright{' '}
          <span className="text-primary">©{new Date().getFullYear()}</span> -
          All right reserved by {settings?.name || config.siteName}
        </p>
        <div className="md:flex gap-5 items-center mt-2">
          {contactInfo.address && (
            <p className="text-sm text-gray-600 ">{contactInfo.address} |</p>
          )}
          {contactInfo.email && (
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-sm text-gray-600 hove:text-primary"
            >
              Email: {contactInfo.email} |
            </a>
          )}
          {contactInfo.mobile && (
            <a
              href={`tel:${contactInfo.mobile}`}
              className="text-sm text-gray-600 hove:text-primary"
            >
              Phone: {contactInfo.mobile}
            </a>
          )}
        </div>
      </aside>
    </footer>
  );
};

export default Footer;
