import React from 'react'
import "./Home.css"
import rightImg from "../../Image/3.png"

function Home() {

  return (
    <div className=' flex bg-black text-white text-center align-middle justify-around h-[100vh] home '>
      <div className=" text-center text-6xl my-auto">

        <h2 className='animate-slideright [--slideright-delay:1800ms] opacity-0'>Hey, <span className=' text-yellow-100'>Shivv</span> here...</h2>
        <h2 className='animate-slidein [--slidein-delay:1800ms] opacity-0'>from <span className=' text-yellow-100'>MUMBAI</span></h2>
      </div>
      <div className="right animate-slideout [--slideout-delay:2000ms] opacity-0 my-auto">
        <img src={rightImg} alt="author img" className=' hover:shadow-lg ' />
      </div>
    </div>
  )
}

export default Home
