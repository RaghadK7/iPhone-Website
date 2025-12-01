import React from 'react'

const Footer = () => {
  return (
    <footer className='py-5 sm:px-10 px-5'>
        <div className='screen-max-width'>
      <div>
        <p className='font-semibold text-gray text-xs'> More ways to shop:
        <span className='underline text-blue'>
         Find an Apple Store{' '}

        </span>
        or {' '}
        <span className='underline text-blue'>
         other retailer

        </span>{' '}
        near you. Or call 1-800-MY-APPLE.
        </p>
         <p className='font-semibold text-gray text-xs'> Copyright © 2026 Apple Inc. All rights reserved.
            </p>
      </div>
        </div>

    </footer>
  )
}

export default Footer