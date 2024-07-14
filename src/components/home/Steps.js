import Image from 'next/image'
import React from 'react'

const data = [
  {
    id: '1',
    icon: '',
    title: 'Create Your Route',
    description:
      'Enter your pickup & dropoff locations or the number of hours you wish to book a car and driver for',
  },
  {
    id: '2',
    icon: '',
    title: 'Book your chauffeur',
    description:
      'You can easily make a reservation through our website, mobile app, or by contacting our customer service team.',
  },
  {
    id: '3',
    icon: '',
    title: 'Receive a confirmation',
    description: `Your booking is received, you'll receive a confirmation email or notification with all the details of your reservation.`,
  },
]
const Steps = () => {
  return (
    <div className="md:py-28 py-16 max-w-screen-lg mx-auto bg-white text-brand">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        {data?.map((item) => (
          <div key={item.id} className="space-y-4">
            <Image src="/logo-small.png" width={55} height={55} />

            <h3 className="text-lg ">{item.title}</h3>
            <p className="text-sm font-light">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Steps
