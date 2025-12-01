import React from 'react'
import chipImg from '/assets/images/chip.jpeg'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { frameImg, frameVideo } from '../utils'
import { animateWithGsap } from '../utils/animation'
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
        
        
        animateWithGsap('.g_fadeIn', { y: 0, opacity: 1 }, { delay: 0.5 })
        animateWithGsap('.fadeIn_text', { y: 0, opacity: 1 }, { delay: 0.7 })
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
                    <div className='flex-center'>
                        <div className='relative w-full max-w-4xl'>
                            
                            <img 
                                src={frameImg} 
                                alt='frame' 
                                className='relative z-20 w-full h-auto block'
                            />
                           
                            <video 
                                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none object-cover w-5/6 h-5/6' 
                                playsInline 
                                preload='none' 
                                muted 
                                autoPlay 
                                ref={videoRef}
                            >
                                <source src={frameVideo} type='video/mp4' />
                            </video>
                        </div>
                    </div>

                    <p className='text-gray font-semibold text-center mt-3'>Honkai: Star Rail</p>
                    
                    <div className='hiw-text-container'>
                        <div className='flex flex-1 justify-center flex-col'> 
                            <p className='hiw-text g_fadeIn'>
                                A17 Pro is an entirely new class of iPhone chip that delivers our {' '}
                                <span className='text-white'>
                                    Best performance ever
                                </span>
                                , while maximizing efficiency to preserve battery life.
                            </p>
                        </div>

                        <div className='flex flex-1 justify-center flex-col'>
                            <p className='hiw-text fadeIn_text'>
                                Mobile {' '}
                                <span className='text-white'>
                                    gaming reaches new heights
                                </span>
                                with incredible graphics and console-level experiences.
                            </p>
                        </div>

                       
                            
                        </div>
                     
                </div>
                    <div className='flex-1 flex justify-center flex-col g_fadeIn'>
                            <p className='hiw-text'>New </p>
                            <p className='hiw-bigtext'>Pro-class GPU</p>
                            <p className='hiw-text'>with 6 cores</p>

                    </div>
            </div>
        </section>
    )
}

export default HowItWorks