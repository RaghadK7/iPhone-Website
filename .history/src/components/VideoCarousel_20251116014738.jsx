import { list } from 'postcss'
import React from 'react'

function VideoCarousel() {
  return (
    <>
    <div className='flex items-center'>
        {highlightsSlides.mpap((list, i) => (
            <>
                <div key={list.id} id="slider"> </div>
                <div className='video-carousel_container'>

                </div>
            </>
        ))}
        </div>
    </>
  )
}

export default VideoCarousel