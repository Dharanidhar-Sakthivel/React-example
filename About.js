import React from 'react'
import HeadTitle from '../../common/HeadTitle/HeadTitle'
import AboutCard from './AboutCard'

const About = () => {
  return (
    <>
     
      <section className='about top'>
        <div className='container'>
          <AboutCard />
        </div>
      </section>

      <section className='features top'>
        <div className='container aboutCard flex_space'>
          <div className='row row1'>
            <h1>Our <span>Features</span></h1>
            <h3> <i> <u>Bills Included</u></i></h3>
            <p>Electricity, heating, Wi-Fi, water - it’s all included in your rent.</p>
             <h3> <i> <u> Sociable spaces</u> </i></h3>
            <p>Shared areas are designed to help you relax among friends.</p>
              <h3> <i> <u>Choice of Rooms</u></i></h3>
            <p>From studios to shared apartments, we've got the perfect room for you.</p>
             <button className='primary-btn'>
            Explore More <i className='fas fa-long-arrow-alt-right'></i>
            </button>
            <div className='row.image'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAabRwLpyjZVQeQcP7aooC1wJ7q2jITO5FWw&usqp=CAU" alt=''></img>
          <div className='control-btn'>
            <button className='prev'>
              <i className='fas fa-play'></i>
            </button>
          </div>
        </div>
          </div>
          </div>
      </section>
    </>
  )
}

export default About