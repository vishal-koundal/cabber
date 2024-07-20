import Title from '@/elements/Title'
import config from '@/utils/config'
import React from 'react'
import Location from '../../../public/icons/location'
import Email from '../../../public/icons/email'
import Telephone from '../../../public/icons/telephone'

const ContactDetails = () => {
  const details = [
    {
      id: 1,
      icon: <Location />,
      title: 'Address',
      details: config.completeAddress,
      href: '',
    },
    {
      id: 2,
      icon: <Email />,
      title: 'Mail us',
      details: config.email,
      href: `mailto:${config.email}`,
    },
    {
      id: 3,
      icon: <Telephone />,
      title: 'Mobile no.',
      details: config.telephone,
      href: `tel:${config.telephone}`,
    },
  ]
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Title>Contact Us</Title>

          <p className="mt-2">We will get back to you as soon as we can!</p>
        </div>

        <div className="mt-8 sm:mt-12">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:divide-x sm:divide-gray-100">
            {details.map((item) => (
              <div
                key={item.id}
                className="flex flex-col px-4 py-8 text-center"
              >
                <dt className="order-last text-lg font-medium text-brand mt-2">
                  {item.title}
                </dt>

                <dd className="text-4xl font-extrabold text-primary md:text-5xl mx-auto">
                  {item.icon}
                </dd>
                <dt className="order-last text-lg font-medium mt-1 text-brand ">
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm hover:text-primary hover:underline font-light"
                    >
                      {item.details}
                    </a>
                  ) : (
                    <p className="text-sm hover:text-primary hover:underline font-light leading-6">
                      {item.details}
                    </p>
                  )}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default ContactDetails
