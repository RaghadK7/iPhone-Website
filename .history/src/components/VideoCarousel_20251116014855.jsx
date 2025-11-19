import { list } from 'postcss'
import React from 'react'
import { highlightsSlides } from '../utils'

function VideoCarousel() {
  return (
    <>
    <div className='flex items-center'>
        {highlightsSlides.mpap((list, i) => (
            <>
                <div key={list.id} id="slider"> 
                <div className='video-carousel_container'>

                </div>
                </div>
            </>
        ))}
        </div>
    </>
  )
}

export default VideoCarousel