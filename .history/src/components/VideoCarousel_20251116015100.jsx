import { list } from 'postcss'
import React from 'react'
import { highlightsSlides } from '../utils'

const VideoCarousel = ()=> {
  return (
    <>
    <div className='flex items-center'>
        {highlightsSlides.map((list, i) => (
           
                <div key={list.id} id="slider"> 
                <div className='video-carousel_container'>

                </div>
                </div>
           
        ))}
        </div>
    </>
  )
}

export default VideoCarousel