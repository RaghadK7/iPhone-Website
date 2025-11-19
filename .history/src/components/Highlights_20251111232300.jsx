import { useGSAP } from '@gsap/react'
import React, { use } from 'react'


const Highlights= () => {
  useGSAP()) =>{
    gsap.fromTo('#title', {y: 0, opacity:1}, {
  }
  return (
<section id='highlights' className='w-screen overflow-hidden h-full common-padding bg-zinc-900 text-white py-20'>
 <div className='screen-max-width'>
 <h1 id='title' className='section-heading' >Get the highlights </h1>
 </div>
</section> 
 )
}

export default Highlights