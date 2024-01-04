import React from 'react'
import Image from 'next/image'
export default function page() {
  return (
    <div className="site-hero ">

        <div className="site-hero_img">
        
          <Image width={1800} height={600} src="/pharma.jpg" className='object-none object-center w-full max-h-96' alt="about" />
         
        </div>
      </div>
  )
}
