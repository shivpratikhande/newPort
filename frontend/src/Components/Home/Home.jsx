import React from 'react'
import "./Home.css"
import rightImg from "../../Image/3.png"

function Home() {

  return (
    <div className='home  '>
        <div className="left">

      <h2 className='animate-slideright [--slideright-delay:200ms] opacity-0'>Hey, <span>Shivv</span> here...</h2>
      <h2>from <span>MUMBAI</span></h2>
        </div>
        <div className="right animate-slideout [--slideout-delay:200ms] opacity-0">
            <img src={rightImg} alt="author img" className=' hover:shadow-lg ' />
        </div>
    </div>
  )
}

export default Home
