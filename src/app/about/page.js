import ContactDetails from '@/components/contact/ContactDetails'
import Faq from '@/components/faq/Faq'
import Hero from '@/components/about/Hero'
import PageHeader from '@/components/shared/PageHeader'
import config from '@/utils/config'
import React from 'react'

const page = () => {
  return (
    <main className="">
      <PageHeader title="About" subtitle="About Us" />
      <Hero />
      <ContactDetails />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2230.0371945917636!2d-3.6093949841198762!3d56.01802837897224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887d7c7bf2cc359%3A0xf451f8e35fae96d4!2sPier%20Pizzaz!5e0!3m2!1sen!2suk!4v1670296307541!5m2!1sen!2suk"
        // height="600"
        alt="none"
        className="md:h-[500px] h-52 w-full"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      >
        <p>{config.siteName}</p>
      </iframe>
      <Faq />
    </main>
  )
}

export default page
