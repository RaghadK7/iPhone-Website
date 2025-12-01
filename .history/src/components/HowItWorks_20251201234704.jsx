import React from 'react'
import chipImg from '/assets/images/chip.jpeg'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { frameImg, frameVideo } from '../utils'

const HowItWorks = () => {
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
  }, [])

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        {/* Chip Section */}
        <div id='chip' className='flex-center w-full my-20'>
          <img src={chipImg} alt='chip' width={180} height={180} />
        </div>

        {/* Text Section */}
        <div className='flex flex-col items-center'>
          <h2 className='hiw-title'>
            A17 Pro chip
            <br /> delivers speed and efficiency
            <p className='hiw-subtitle'>
              The A17 Pro chip is a game-changer, boasting a 6-core CPU that’s up to 10% faster and a 6-core GPU that’s up to 20% faster than the A16 Bionic. 
            </p>
          </h2>
        </div>

        {/* Frame + Video Section */}
        <div className='mt-10 md:mt-20 mb-14 flex-center'>
          <div className='relative w-[400px] h-[300px] overflow-hidden'>
            {/* Video */}
            <video 
              className='absolute top-0 left-0 w-full h-full object-cover z-0'
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={frameVideo} type='video/mp4' />
            </video>

            {/* Frame Image */}
            <img 
              src={frameImg} 
              alt='frame' 
              className='absolute top-0 left-0 w-full h-full z-10 pointer-events-none' 
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
