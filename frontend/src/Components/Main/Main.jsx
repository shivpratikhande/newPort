import React, { useEffect, useState } from 'react'
 import leftImg from "../../Image/3.png"
 import "./Main.css"
import { Link } from 'react-router-dom'
import linkedin from "../../Image/icons/linkedin.svg"
import insta from "../../Image/icons/square-instagram.svg"
import twitter from "../../Image/icons/square-x-twitter.svg"
import github from "../../Image/icons/square-github.svg"
import About from './Pages/About'
import { BrowserRouter as Router, Route, Switch, Routes, BrowserRouter } from 'react-router-dom';
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Resume from './Pages/Resume'
import Skills from './Pages/Skills'


function Main() {

  return (
    <div className='bg-gray-100 flex justify-evenly w-screen h-screen pt-5 '>
      <div className=" flex flex-1 mt-24 items-center flex-col ">
        <img src={leftImg} className='author-img' alt="image" />
        <div className=" mt-16 font-bold pl-7 text-center ">
        "In the dance of life, every step is a decision, every pause a reflection, and every movement shapes your journey."
        </div>
        <div className="icons">
              <img src={linkedin} alt="" />
              <img src={twitter} alt="" />
              <img src={insta} alt="" />
              <img src={github} alt="" />
             
        </div>
        <div className=" relative m-auto">
          <p>copyright under shivv. All rights reserved.</p>
        </div>
      </div>
      <div className=" flex flex-[2.1] pl-64 flex-col items-center">
        <nav >
            <ul className=' flex gap-16 bg-black text-white p-3 pl-16 pr-16 rounded-3xl font-bold text-lg' >

                <li> <Link to = "/about" className='linkk' >About me</Link> </li>
                <li> <Link to = "/contact"className='linkk'>Contact</Link> </li>
                <li> <Link to = "/blog"className='linkk'>Blog</Link> </li>
                <li> <Link to = "/resume"className='linkk'>Resume</Link> </li>
                <li> <Link to = "/skills"className='linkk'>Skills</Link> </li>
                <li> <Link to = "/help"className='linkk'>Help</Link> </li>
               
            </ul>
        </nav>
           
        {/* <div className="main-containt">
         <About/>
        </div>

 */}
         <div className="main-content">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </div>

      </div>
    </div>
  )
}

export default Main
 