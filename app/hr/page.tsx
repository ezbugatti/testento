import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

import Image from "next/image";
import TextReveal from "../components/TextReveal/page";
const hr = () => {
  return (
<>
      <div className="flex h-96 items-center justify-center bg-gradient-to-tr to-teal-300 from-cyan-700 p-10">
          <div className="w-max">
            <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold">
             Бидэнтэй Нэгдэхийг Хүсвэл
            </h1>
            <TextReveal/>
          </div>
        </div>
      <div className="wrapper">
        
      <div className="hidden md:flex w-full flex-1 ">
      
        <div className="w-3/6 ">
          <Image  width={600} height={400} className="rounded-2xl" src="/hrm.jpg" alt="zaxiral"/>
         
          </div>

          <div className="w-3/6 pl-10 ">
          <h1 className="justify-between text-2xl text-gray-900 font-semibold "> АЖИЛЛАХ ТААТАЙ ОРЧИН</h1>
          <ul className="text-base text-gray-900 pt-24 ">
            <li className="flex flex-1 pb-2 items-center "><BsFillCheckCircleFill color="green" className="mr-8 "/> Чадварлаг мэргэжлийн нөхөрсөг хамт олон</li>
            <li className="flex flex-1 pb-2 items-center "><BsFillCheckCircleFill color="green"  className="mr-8"/> Ажилтан бүрт өсөн дэвших боломж адил тэгш олгогдсон</li>
            <li className="flex flex-1  pb-2 items-center"><BsFillCheckCircleFill color="green"  className="mr-8"/> Гүйцэтгэлд тулгуурласан урамшууллын тогтолцоотой</li>
            <li className="flex flex-1 pb-2 items-center"><BsFillCheckCircleFill color="green"  className="mr-8"/> Бизнесийн бусад салбарт хөрвөн ажиллах боломж</li>
            <li className="flex flex-1 pb-2 items-center "><BsFillCheckCircleFill color="green"  className="mr-8"/> Өрсөлдөхүйц цалин урамшуулал</li>
            
          </ul>
         
          </div>
        </div>

        <div className="w-full md:hidden">
      
      <div className="w-full md:hidden">
      <h1 className="flex text-center text-2xl text-gray-900 font-semibold "> АЖИЛЛАХ ТААТАЙ ОРЧИН утас</h1>
        <Image  width={600} height={400} className="rounded-2xl bg-cover" src="/hrm.jpg" alt="zaxiral"/>
       
        </div>

        <div className="w-full pl-10 md:hidden">
        
        <ul className="text-base text-gray-900 pt-6 ">
          <li className="flex  pb-2 items-center "><BsFillCheckCircleFill color="green" className="mr-8 "/> Чадварлаг мэргэжлийн нөхөрсөг хамт олон</li>
          <li className="flex pb-2 items-center "><BsFillCheckCircleFill color="green"  className="mr-8"/> Ажилтан бүрт өсөн дэвших боломж адил тэгш олгогдсон</li>
          <li className="flex  pb-2 items-center"><BsFillCheckCircleFill color="green"  className="mr-8"/> Гүйцэтгэлд тулгуурласан урамшууллын тогтолцоотой</li>
          <li className="flex pb-2 items-center"><BsFillCheckCircleFill color="green"  className="mr-8"/> Бизнесийн бусад салбарт хөрвөн ажиллах боломж</li>
          <li className="flex pb-2 items-center "><BsFillCheckCircleFill color="green"  className="mr-8"/> Өрсөлдөхүйц цалин урамшуулал</li>
          
        </ul>
       
        </div>
      </div>


      <div className="w-full md:hidden mt-4">
      
      <div className="w-full md:hidden ">
      <h1 className="flex text-center text-2xl text-gray-900 font-semibold "> АЖИЛЛАХ ТААТАЙ ОРЧИН утас</h1>
        <Image  width={600} height={400} className="rounded-2xl bg-cover" src="/hrm.jpg" alt="zaxiral"/>
       
        </div>

        <div className="w-full pl-10 md:hidden">
        
        <ul className="text-base text-gray-900 pt-6 ">
          <li className="flex  pb-2 items-center "><BsFillCheckCircleFill color="green" className="mr-8 "/> Чадварлаг мэргэжлийн нөхөрсөг хамт олон</li>
          <li className="flex pb-2 items-center "><BsFillCheckCircleFill color="green"  className="mr-8"/> Ажилтан бүрт өсөн дэвших боломж адил тэгш олгогдсон</li>
          <li className="flex  pb-2 items-center"><BsFillCheckCircleFill color="green"  className="mr-8"/> Гүйцэтгэлд тулгуурласан урамшууллын тогтолцоотой</li>
          <li className="flex pb-2 items-center"><BsFillCheckCircleFill color="green"  className="mr-8"/> Бизнесийн бусад салбарт хөрвөн ажиллах боломж</li>
          <li className="flex pb-2 items-center "><BsFillCheckCircleFill color="green"  className="mr-8"/> Өрсөлдөхүйц цалин урамшуулал</li>
          
        </ul>
       
        </div>
      </div>



        </div>
        <div className="hidden w-full md:flex bg-gray-50 flex-1">
        
          <div className="w-3/6 pl-10 ">
          <h1 className="text-center text-2xl text-gray-900 font-semibold mt-4 "> АЖИЛЛАХ ТААТАЙ ОРЧИН</h1>
          <ul className="w-full text-base text-gray-900 pt-24 ">
            <li className="flex flex-1 pb-2 items-center "><BsFillCheckCircleFill color="green" className="mr-8 "/> Чадварлаг мэргэжлийн нөхөрсөг хамт олон</li>
            <li className="flex flex-1 pb-2 items-center "><BsFillCheckCircleFill color="green"  className="mr-8"/> Ажилтан бүрт өсөн дэвших боломж адил тэгш олгогдсон</li>
            <li className="flex flex-1  pb-2 items-center"><BsFillCheckCircleFill color="green"  className="mr-8"/> Гүйцэтгэлд тулгуурласан урамшууллын тогтолцоотой</li>
            <li className="flex flex-1 pb-2 items-center"><BsFillCheckCircleFill color="green"  className="mr-8"/> Бизнесийн бусад салбарт хөрвөн ажиллах боломж</li>
            <li className="flex flex-1 pb-2 items-center "><BsFillCheckCircleFill color="green"  className="mr-8"/> Өрсөлдөхүйц цалин урамшуулал</li>
            
          </ul>
         
          </div>
          <div className="w-3/6 ">
          <Image  width={600} height={400} className="rounded-2xl" src="/hrm.jpg" alt="zaxiral"/>
         
          </div>
        </div>
        

       
      <div className="wrapper">
      <div className="section-title text-2xl text-bold text-center uppercase mb-6">
          <span>СОНГОН ШАЛГАРУУЛАЛТ</span>
          
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14 lg:p-20"> 
  
        
        <div className="w-full transform hover:-translate-y-5 transition-all duration-700 ">
          <div className="cursor-pointer px-8 py-6">
            <span className="font-bold text-dark bg-gray-300 rounded-3xl py-2 px-3">1</span>
            <img src="https://www.monos.mn/assets/busad/hr-icon1.gif" className="h-96 w-auto object-fill fill-current" alt="" />
            <p className="text-dark text-lg font-bold my-2">Ажлын байр зарлах</p>
            <p>Та манай ажлын байрны мэдээллийг “АЖЛЫН БАЙР” цэснээс авна уу!</p>
          </div>
        </div>
        <div className="w-full transform hover:-translate-y-5 transition-all duration-700">
          <div className=" cursor-pointer px-8 py-6 ">
            <span className="font-bold text-dark bg-gray-300 rounded-3xl py-2 px-3">2</span>
            <img src="https://www.monos.mn/assets/busad/hr-icon2.gif" className="h-96 w-auto object-fill fill-current" alt="" />
            <p className="text-dark text-lg font-bold my-2">АНКЕТ ХҮЛЭЭН АВАХ</p>
            <p>Та манай ажлын байрны мэдээллийг “АЖЛЫН БАЙР” цэснээс авна уу!</p>
          </div>
        </div>
        <div className="w-full transform hover:-translate-y-5 transition-all duration-700">
          <div className=" cursor-pointer px-8 py-6">
            <span className="font-bold text-dark bg-gray-300 rounded-3xl py-2 px-3">3</span>
            <img src="https://www.monos.mn/assets/busad/hr-icon3.gif" className="h-96 w-auto object-fill fill-current" alt="" />
            <p className="text-dark text-lg font-bold my-2">АНКЕТЫН ШАЛГАРУУЛАЛТ</p>
            <p>Та манай ажлын байрны мэдээллийг “АЖЛЫН БАЙР” цэснээс авна уу!</p>
          </div>
        </div>
        <div className="w-full transform hover:-translate-y-5 transition-all duration-700" >
          <div className="cursor-pointer px-8 py-6 ">
            <span className="font-bold text-dark bg-gray-300 rounded-3xl py-2 px-3">4</span>
            <img src="https://www.monos.mn/assets/busad/hr-icon4.gif" className="h-96 w-auto object-fill fill-current" alt="" />
            <p className="text-dark text-lg font-bold my-2 ">АНХАН ШАТНЫ ЯРИЛЦЛАГА</p>
            <p>Та манай ажлын байрны мэдээллийг “АЖЛЫН БАЙР” цэснээс авна уу!</p>
          </div>
        </div>
        <div className="w-full transform hover:-translate-y-5 transition-all duration-700">
          <div className="cursor-pointer px-8 py-6 ">
            <span className="font-bold text-dark bg-gray-300 rounded-3xl py-2 px-3">5</span>
            <img src="https://www.monos.mn/assets/busad/hr-icon6.gif" className="h-96 w-auto object-fill fill-current" alt="" />
            <p className="text-dark text-lg font-bold my-2">ХОЁРДУГААР ШАТНЫ ЯРИЛЦЛАГА</p>
            <p>Та манай ажлын байрны мэдээллийг “АЖЛЫН БАЙР” цэснээс авна уу!</p>
          </div>
        </div>
        <div className="w-full transform hover:-translate-y-5 transition-all duration-700">
          <div className="cursor-pointer px-8 py-6 ">
            <span className="font-bold text-dark bg-gray-300 rounded-3xl py-2 px-3">6</span>
            <img src="https://www.monos.mn/assets/busad/hr-icon7.gif" className="h-96 w-auto object-fill fill-current" alt="" />
            <p className="text-dark text-lg font-bold my-2">ХӨДӨЛМӨРИЙН ГЭРЭЭ ХИЙХ</p>
            <p>Шалгаруулалтад тэнцэж, шаардлага хангасан ажил горилогчид ажлын санал тавих, гэрээ хийх</p>
          </div>
        </div>

        </div>
        </div>
        
        </>
  );
};

export default hr;
