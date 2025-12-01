import React from 'react'
import chipImg from '/assets/images/chip.jpeg'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { frameImg, frameVideo } from '../utils'
import { useRef } from 'react'

const HowItWorks = () => {
    const videoRef = useRef();
    
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
                <div id='chip' className='flex-center w-full my-20'>
                    <img src={chipImg} alt='chip' width={180} height={180} />
                </div>

                <div className='flex flex-col items-center'>
                    <h2 className='hiw-title'>
                        A17 Pro chip
                        <br /> delivers speed and efficiency
                        <p className='hiw-subtitle'>
                            The A17 Pro chip is a game-changer, boasting a 6-core CPU that's up to 10% faster and a 6-core GPU that's up to 20% faster than the A16 Bionic.
                        </p>
                    </h2>
                </div>

                <div className='mt-10 md:mt-20 mb-14'>
                    <div className='relative flex-center'>
                        <div className='relative inline-block'>
                            {/* الفيديو خلف الإطار */}
                            <video 
                                className='absolute inset-0 pointer-events-none object-cover' 
                                playsInline 
                                preload='none' 
                                muted 
                                autoPlay 
                                ref={videoRef}
                            >
                                <source src={frameVideo} type='video/mp4' />
                            </video>
                            {/* الإطار فوق الفيديو */}
                            <img 
                                src={frameImg} 
                                alt='frame' 
                                className='relative z-10 w-full h-auto block'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks