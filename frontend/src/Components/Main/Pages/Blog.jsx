import React from 'react'
import "./Css/Blog.css"

function Blog() {
  return (
    <div className=' inline-block p-10 border-black border-2 rounded-3xl '>
      <div className=' '>
      <h2 className=' text-3xl font-bold text-center pb-5 mb-2  '> <span className=' py-2 px-5 rounded-xl hover:bg-black hover:text-white'>Blogs</span></h2>
      <h3 className=' text-lg font-sans   '>
        <p className=''>I do write some blogs regarding the trending techstack in the internet World.</p>
         <p>In my blog contributions, I aim to share valuable knowledge with the community, offering insights, tutorials, and practical advice to assist fellow developers and enthusiasts. I believe in creating a collaborative environment where shared experiences can empower others in navigating the ever-evolving tech landscape. My goal is to simplify complex concepts, address common challenges,
          and explore emerging trends, fostering a professional and inclusive community. </p>
        <p>By sharing my expertise, I hope to inspire and contribute to a thriving network of individuals
          dedicated to continuous learning and innovation in the field of technology. </p>     </h3>
      </div>
      
    </div>

  )
}

export default Blog

