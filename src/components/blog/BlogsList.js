import React from 'react'
import BlogItem from './BlogItem'

const blogs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const BlogsList = () => {
  return (
    <div className="grid container  mx-auto lg:my-16 my-10 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
      {blogs.map((item) => (
        <BlogItem key={item} />
      ))}
    </div>
  )
}

export default BlogsList
