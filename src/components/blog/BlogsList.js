import React from 'react';
import BlogItem from './BlogItem';

const BlogsList = ({ blogs }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      {blogs.map((item) => (
        <BlogItem key={item} blog={item} />
      ))}
    </div>
  );
};

export default BlogsList;
