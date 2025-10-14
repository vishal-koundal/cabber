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
    <footer className="footer footer-center text-base-content rounded px-4 sm:px-6 lg:px-10 pt-10 pb-5">
      <nav className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
        <Link
          href="/"
          className="link link-hover text-brand hover:text-primary text-sm sm:text-base"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="link link-hover text-brand hover:text-primary text-sm sm:text-base"
        >
          About us
        </Link>
        <Link
          href="/cars"
          className="link link-hover text-brand hover:text-primary text-sm sm:text-base"
        >
          Cars
        </Link>
        <Link
          href="/contact"
          className="link link-hover text-brand hover:text-primary text-sm sm:text-base"
        >
          Contact
        </Link>
        <Link
          href="/blogs"
          className="link link-hover text-brand hover:text-primary text-sm sm:text-base"
        >
          Blog
        </Link>
      </nav>
      <nav>
        <div className="flex justify-center gap-4 mb-6">
          {socials.map((item) => (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              key={item.id}
              className="hover:opacity-80 transition-opacity"
            >
              <Image src={item.icon} height={32} width={32} alt="Social link" />
            </a>
          ))}
        </div>
      </nav>
      <aside className="border-t w-full pt-5">
        <p className="text-sm sm:text-base">
          Copyright{' '}
          <span className="text-primary">©{new Date().getFullYear()}</span> -
          All right reserved by {settings?.name || config.siteName}
        </p>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 items-center mt-2 text-center sm:text-left">
          {contactInfo.address && (
            <p className="text-xs sm:text-sm text-gray-600">
              {contactInfo.address}
            </p>
          )}
          {contactInfo.email && (
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-xs sm:text-sm text-gray-600 hover:text-primary transition-colors"
            >
              Email: {contactInfo.email}
            </a>
          )}
          {contactInfo.mobile && (
            <a
              href={`tel:${contactInfo.mobile}`}
              className="text-xs sm:text-sm text-gray-600 hover:text-primary transition-colors"
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
