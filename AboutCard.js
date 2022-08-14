import React from 'react'
import "./About.css"

const AboutCard = () => {
  return (
    <>
      <div className='aboutCard mtop flex_space'>
        <div className=' row row1'>
          <h4> About Us</h4>
          <h1> We
            <span> Provide stylish homes that</span> puts you at the heart of the action
          </h1>
          <h3> Not Just a Landlord</h3>
          <p>Having provided a home for students for almost 10 years, we know what students want and need. We also know that every student’s different. We’ve used this insight to create places to live where you can feel at home, no matter where you’ve come from or where you want to go. Places where you can make the leap to university and get the most out of your time there.</p>
          <h3>Home for Success</h3>
          <p>We know that university isn’t always plain sailing. But we also passionately believe that with the right support and surroundings, students can successfully navigate themselves through the lows as well as the highs of this exciting, sometimes challenging, time.</p>
          <button className='primary-btn'>
            Explore More <i className='fas fa-long-arrow-alt-right'></i>
          </button>
        </div>
        <div className='row.image'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRHjbFgnZC91DX9a1y-NfWEesXsGHZ-7bwxg&usqp=CAU" alt=''></img>
          <div className='control-btn'>
            <button className='prev'>
              <i className='fas fa-play'></i>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutCard