import { useGSAP } from '@gsap/react'
import React, { use } from 'react'
import gsap from 'gsap' 
import { rightImg, watchImg } from '../utils'

const Highlights= () => {
  useGSAP(() => {
    gsap.to('#title', { opacity:1 , y: 0})
    gsap.to('.#link', { opacity:1 , y: 0})
  }, [])

  return (
<section id='highlights' className='w-screen overflow-hidden h-full common-padding bg-zinc  text-white py-20'>
 <div className='screen-max-width'>
  <div className='mb-12 w-full items-end justify-between'>
 <h1 id='title' className='section-heading' >Get the highlights </h1>
 <div className='flex flex-wrap items-end gap-5'>
  <p className='link'>Watch the film</p>
  <img src={watchImg} alt="watch"
  className='ml-2' />

<p className='link'>Watch the event</p>
  <img src={rightImgImg} alt="right"
  className='ml-2' />
 </div>
 </div>
 </div>
</section> 
 )
}

export default Highlights