import CarsList from '@/components/cars/CarsList'
import PageHeader from '@/components/shared/PageHeader'
import React from 'react'

const page = () => {
  return (
    <main className="">
      <PageHeader title="Cars" subtitle="Cars" />
      <CarsList />
    </main>
  )
}

export default page
