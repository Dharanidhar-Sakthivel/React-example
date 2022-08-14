import React from 'react'
import Card from './Card'
import GalleryData from './GalleryData'
import "./Gallery.css"
import HeadTitle from '../../common/HeadTitle/HeadTitle'
const Gallery = () => {
  return (
    <>
      
      <h1><i>Gallery</i></h1>
      <section className='gallery top'>
        <div className='container grid'>
          {GalleryData.map((value) => {
            return <Card images={value.img} title={value.title} />
            })}
        </div>
      </section>

    </>
  )
}

export default Gallery