import React from 'react'
import chipImg from '/assets/images/chip.jpeg'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

const HowItWorks =()=> {
    useGSAP(() => {
        gsap.from('#chip', { duration: 1, y: 50, opacity: 0, ease: 'power3.out' });

    }, []);
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div  id='chip' className='flex-center w-full my-20'>
       <img src={chipImg} alt='chip' width={180} height={180} />
        </div>

      </div>
        </section>
        
        )
}

export default HowItWorks