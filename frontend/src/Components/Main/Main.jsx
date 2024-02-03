import React from 'react'
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

  function Section(){
    return( <div className="main-containt">
    <About/>
   </div>)
  }

  return (
    <div className='container'>
      <div className="left_container">
        <img src={leftImg} className='author-img' alt="image" />
        <div className="thoughts">
        "In the dance of life, every step is a decision, every pause a reflection, and every movement shapes your journey."
        </div>
        <div className="icons">
              <img src={linkedin} alt="" />
              <img src={twitter} alt="" />
              <img src={insta} alt="" />
              <img src={github} alt="" />
              <i class="fa-brands fa-github"></i>
             
        </div>
        <div className="footer">
          <p>copyright under shivv. All rights reserved.</p>
        </div>
      </div>
      <div className="right_container">
        <nav>
            <ul>

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
 