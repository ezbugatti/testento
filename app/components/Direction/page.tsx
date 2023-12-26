import React from 'react'
import Image from 'next/image'
const Direction = () => {
  return (
    <div className="news-section">
      <div className="pt-20 pb-12 px-10">
        <div className="section-title text-gray-800 text-2xl text-bold text-center uppercase">
          <span>Үйл ажиллагаа</span>
          
        </div>
   
        
      
        </div>

        
       
     
     
        <div className="news-section__cards">
          
          <div className="news-section__news-cards md:flex md:flex-1 md:grid-cols-1 w-full m gap-6 px-20 mx-4 ">
            
          


            <div z-0="true" className="news-section__news-card">
            <div z-0="true" role="img" className="news-section__news-card-imageWrapper focus:outline-none cursor-pointer relative overflow-hidden">
                                            <Image  height={600} // Desired size with correct aspect ratio
                width={400} aria-label="gaming" className="transition-all object-cover  transform ease-in-out hover:scale-105 duration-700 focus:outline-none w-full" src="/pharma.jpg" alt="games" />
                                           
                <div className="news-section__news-card-text">
                <div className="news-section__featured-card-title">
                  ЭНТО ФАРМ
                </div>
               
                <a href="#" className="readmore group">
                  <span className="readmores">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </span>
                  <span className="readmorespan ease">Цааш унших...</span>
                  <span className="relative invisible ease">Цааш унших...</span>
                  </a>
                
              </div>
                                        </div>
                                        </div>
                                        <div z-0="true" className="news-section__news-card">
            <div z-0="true" role="img" className="news-section__news-card-imageWrapper focus:outline-none cursor-pointer relative overflow-hidden">
                                            <Image height={800} 
                width={400}  z-0="true" role="img" aria-label="gaming" className="transition-all object-cover  transform ease-in-out hover:scale-105 duration-700 focus:outline-none w-full" src="/tonog.jpg" alt="games" />
                                           
                <div className="news-section__news-card-text">
                <div className="news-section__featured-card-title">
                  ЭНТО МЕД
                </div>
               
                <a href="#" className="readmore group">
                  <span className="readmores">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </span>
                  <span className="readmorespan ease">Цааш унших...</span>
                  <span className="relative invisible ease">Цааш унших...</span>
                  </a>
                
              </div>
                                        </div>
                                        </div>

                                        <div z-0="true" className="news-section__news-card">
            <div z-0="true" role="img" className="news-section__news-card-imageWrapper focus:outline-none cursor-pointer relative overflow-hidden">
                                            <Image
                height={500} // Desired size with correct aspect ratio
                width={500}
                 z-0="true" role="img" aria-label="gaming" className="transition-all object-cover  transform ease-in-out hover:scale-105 duration-700 focus:outline-none w-full" src="/medee1.jpg" alt="games" />
                                           
                <div className="news-section__news-card-text">
                <div className="news-section__featured-card-title">
                  ЭНТО ЭМЧ
                </div>
               
                <a href="#" className="readmore group">
                  <span className="readmores">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </span>
                  <span className="readmorespan ease">Цааш унших...</span>
                  <span className="relative invisible ease">Цааш унших...</span>
                  </a>
                
              </div>
                                        </div>
                                        </div>

           
            
           
          </div>
        </div>
      </div>

  )
}

export default Direction