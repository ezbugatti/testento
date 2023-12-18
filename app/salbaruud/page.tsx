import React from 'react'
import MyIframe from '../components/MyFrame/page'


const salbaruud = () => {
  return (

        <div className='wrapper'>
        <div className="flex">
          <div className="w-auto md:hidden">
            <h2
              className="flex text-center text-gray-900 font-primary uppercase justify-center text-2xl"
            >
              Салбарын байршил
            </h2>
            <div className="w-auto items-center mt-4">
            <iframe className='aspect-square h-auto w-full md:h-96' src="https://www.google.com/maps/d/u/0/embed?mid=1LMrDXF3pnT3EAQYKKkTCFX0Js2pbKDs&ehbc=2E312F" ></iframe>
            </div>
            <div
              className="font-thin pt-10 leading-relaxed text-justify justify-between "
            >
              Энто эмийн сангийн 14 салбартай бөгөөд та өөрийн ойрт ойрхон салбаруудаас эм бараагаа авах боломжтой.
              Холбогдох утас: 

            
          </div>
          </div>
          <div className="w-3/6 hidden md:block mt-4">
            <div
              className="w-full text-gray-800 font-primary uppercase text-center text-2xl font-semibold"
            >
              салбарын байршил
            </div>
            
            <div
              className="font-normal pt-10 pr-16 leading-relaxed text-justify justify-between lg:flex  "
            >
            Энто эмийн сангийн 14 салбартай бөгөөд та өөрийн ойрт ойрхон салбаруудаас эм бараагаа авах боломжтой.
              Холбогдох утас: 
            </div>
          </div>

          <div className="w-2/4 hidden md:block">
          <MyIframe/>
          </div>
        </div>
        <div className="flex mt-20">
          <div className="w-auto md:hidden">
            <h2
              className="flex text-center text-gray-900 font-primary uppercase justify-center text-2xl"
            >
              Оффис, Эм ханган нийлүүлэх төв
            </h2>
            <div className="w-auto items-center mt-4">
            <iframe className='aspect-square h-auto w-full md:h-96' src="https://www.google.com/maps/d/u/0/embed?mid=1qkehnMWNhaPJK2baJ03mAvyQ96PMFho&ehbc=2E312F" ></iframe>
            </div>
            <div
              className="font-thin pt-10 leading-relaxed text-justify justify-between "
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi vel enim iure, distinctio, et expedita praesentium repellat sunt veniam unde ratione aut? Nam consequuntur quaerat enim unde quia, ea ullam!

            
          </div>
          </div>
          

          <div className="w-2/4 hidden md:block">
          <iframe className='aspect-square h-auto w-full md:h-96' src="https://www.google.com/maps/d/u/0/embed?mid=1qkehnMWNhaPJK2baJ03mAvyQ96PMFho&ehbc=2E312F" ></iframe>
          </div>
          <div className="w-3/6 hidden md:block mt-4">
            <div
              className="w-full text-gray-800 font-primary uppercase text-center text-2xl font-semibold"
            >
              Оффис, Эм ханган нийлүүлэх төв
            </div>
            
            <div
              className="font-normal pt-10 pl-16 leading-relaxed text-justify justify-between lg:flex  "
            >
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi vel enim iure, distinctio, et expedita praesentium repellat sunt veniam unde ratione aut? Nam consequuntur quaerat enim unde quia, ea ullam!
            </div>
          </div>
        </div>
</div>

  )
}

export default salbaruud
