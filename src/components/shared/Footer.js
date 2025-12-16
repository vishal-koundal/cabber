'use client';
import Link from 'next/link';
import Image from 'next/image';

import config from '@/utils/config';
import Logo from './Logo';

export default function Footer({ settings }) {
  const year = new Date().getFullYear();
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
    {
      id: 4,
      icon: '/icons/whatsapp.png',
      href: socialLinks.whatsapp || config.whatsapp,
    },
  ];
  return (
    <footer className="bg-brand text-light">
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* Top Links Row */}
        <div className="grid gap-8 md:grid-cols-3 md:text-left">
          {/* Branding */}
          <div>
            <div className="-ml-4">
              <Link className="text-3xl font-bold leading-none" href="/">
                <Logo />
              </Link>
            </div>
            <p className="mt-3 text-sm text-light/80">{config.description}</p>
          </div>

          {/* Main Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-3">Helper Links</h4>
            <ul className="space-y-2 text-sm text-light/80">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/cars" className="hover:text-white transition">
                  Cars
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-white transition">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-3">Contact Info</h4>
            <ul className="space-y-2 text-sm text-light/80">
              <li>
                <span className="font-medium text-white">Email:</span>{' '}
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-white hover:underline hover:text-gray-300"
                >
                  {contactInfo.email}
                </a>
              </li>

              <li>
                <span className="font-medium text-white">Phone:</span>{' '}
                <a
                  href={`tel:${contactInfo.telephone}`}
                  className="text-white hover:underline hover:text-gray-300"
                >
                  {contactInfo.mobile}
                </a>
              </li>
              <li>
                <span className="font-medium text-white">Address:</span>{' '}
                <p className="text-white hover:underline hover:text-gray-300">
                  {contactInfo.address}
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-white/20"></div>

        {/* Copyright */}
        <div className="mt-6 text-center">
          <p className="text-sm text-light/80">
            &copy; {year} {config.siteName}. All rights reserved by{' '}
            {settings?.name || config.siteName}
          </p>

          <div className="flex justify-center gap-4 mb-0 mt-4">
            {socials.map((item) => (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                key={item.id}
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src={item.icon}
                  height={32}
                  width={32}
                  alt="Social link"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
