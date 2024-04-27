import React from 'react'
import "./Css/About.css"

function About() {
  return (
    <div className=' inline-block p-10 border border-black border-2 rounded-3xl '>
      <h2 className=' text-3xl font-bold text-center pb-5 mb-2  '> <span className=' py-2 px-5 rounded-xl hover:bg-black hover:text-white'>About Me</span></h2>
      <h3 className=' text-lg font-sans flex  '> "Hello, my name is Shivpratik Hande, and I am currently an undergraduate student pursuing a Bachelor's degree in Information Technology. <br /> I have always been deeply passionate about technology and am particularly fascinated by its diverse applications. My academic journey thus far has equipped me with a strong foundation in programming, database management, system analysis, and web development.
      <br /> Through hands-on projects and coursework, I have honed my skills in various programming languages, database systems, and web development frameworks. I am driven by a desire to contribute meaningfully to the field of information technology 
      and am excited about the possibilities it offers. <br />With a blend of technical expertise and a proactive approach to learning, I am eager to embark on new challenges and opportunities in this dynamic field."</h3>
        <br />
        <h3></h3>
    </div>
  )
}

export default About
