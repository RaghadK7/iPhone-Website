import React from 'react'
import chipImg from '/assets/images/chip.jpeg'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

const HowItWorks =()=> {
    useGSAP(() => {
        gsap.from('#chip', {
            scrollTrigger: {
                trigger: '#chip',
                start: '20% bottom',
        },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: 'power2.inOut',
    })
    }, []);
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div  id='chip' className='flex-center w-full my-20'>
       <img src={chipImg} alt='chip' width={180} height={180} />
        </div>
        <div className='flex flex-col items-center'>
        <h2 className='hiw-title'>
            A17 Pro chip
            <br />  delivers speed and efficiency
            <p className='hiw-subtitle'>
            The A17 Pro chip is a game-changer, boasting a 6-core CPU that’s up to 10% faster and a 6-core GPU that’s up to 20% faster than the A16 Bionic. This means smoother graphics, quicker load times, and an overall enhanced performance for all your favorite apps and games.

            </p>


        </h2>
        </div>

      </div>
        </section>
        
        )
}

export default HowItWorks