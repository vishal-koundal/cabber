import React from 'react';
import BlogItem from './BlogItem';

const BlogsList = ({ blogs }) => {
  return (
    <div className="grid container  mx-auto lg:my-16 my-10 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
      {blogs.map((item) => (
        <BlogItem key={item} blog={item} />
      ))}
    </div>
  );
};

export default BlogsList;
