import React from 'react'
import "./Home.css"
import rightImg from "../../Image/3.png"

function Home() {
  return (
    <div className='home'>
        <div className="left">

      <h2>Hey, <span>Shivv</span> here...</h2>
      <h2>from <span>MUMBAI</span></h2>
        </div>
        <div className="right">
            <img src={rightImg} alt="author img" />
        </div>
    </div>
  )
}

export default Home
