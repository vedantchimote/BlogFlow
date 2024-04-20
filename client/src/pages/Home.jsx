import BlogCard from '@/components/custom/BlogCard'
import React from 'react'

const Home = () => {
  return (
    <div className='w-full p-8'>
      <h1 className='font-extrabold'>All Blogs</h1>
      <div className='p-4 '>
        <BlogCard/>
      </div>
    </div>
  )
}

export default Home
