import React from 'react'
import {useLocation, Link} from "react-router-dom"
import "./HeadTitle.css"

const HeadTitle = () => {
  const location = useLocation()
  return (
    <>
      <section className='image-heading'>
        <div className='container'>
          <h1>{location.pathname.split("/")[1]}</h1>

          <button>
            <link to='/home'></link>
             <h1>{location.pathname.split("/")[1]}</h1>

          </button>
        </div>
      </section>
    </>
  )
}

export default HeadTitle
