import BlogsList from '@/components/blog/BlogsList'
import PageHeader from '@/components/shared/PageHeader'
import React from 'react'

const page = () => {
  return (
    <main className="">
      <PageHeader title="Blogs" subtitle="Blogs" />
      <BlogsList />
    </main>
  )
}

export default page
