'use client'

import React from 'react'
import Form from './Form'
import Title from '@/elements/Title'

const index = () => {
  return (
    <div className="container mx-auto px-4 md:py-24">
      <div className="text-center mb-8">
        <Title>Leave us your info</Title>
      </div>
      <Form />
    </div>
  )
}

export default index
