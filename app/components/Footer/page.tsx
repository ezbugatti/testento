import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper bg-gray-800 py-10">
        <div className="footer-menus flex flex-wrap w-full justify-evenly px-10 text-gray-200/80">
          <div className="footer-menu__wrapper text-justify mb-4  w-1/2 md:w-1/4">
            <span className="footer-menu__title text-gray-100  text-sm md:text-lg  font-bold hover:text-white">Бидний тухай</span>
            <ul className="footer-menu__list text-xs md:text-base mt-3 ">
              <li className="footer-menu__item hover:text-white">
                <Link href="#">Захирлын мэндчилгээ</Link>
              </li>
              <li className="footer-menu__item hover:text-white">
                <Link href="/about">Танилцуулга видео</Link>
              </li>
              <li className="footer-menu__item hover:text-white">
                <Link href="/about">Бүтэц зохион байгуулалт</Link>
              </li>
              <li className="footer-menu__item hover:text-white">
                <Link href="/about">Лого файл татах</Link>
              </li>
            
            </ul>
           
          </div>
          <div className="footer-menu__wrapper text-justify mb-4  w-1/2 md:w-1/4">
            <span className="footer-menu__title text-gray-100  text-sm font-bold md:text-lg hover:text-white ">Мэдээ мэдээлэл</span>
            <ul className="footer-menu__list  text-xs md:text-base mt-3">
              <li className="footer-menu__item hover:text-white">
               <Link href="/news">Мэдээ</Link>
              </li>
              <li className="footer-menu__item hover:text-white">
              <Link href="/news">Мэдээний ангилал</Link>
              </li>
              <li className="footer-menu__item hover:text-white">
              <Link href="/news">Нийгмийн хариуцлага</Link>
              </li>
              <li className="footer-menu__item hover:text-white">
              <Link href="/news"></Link>
              </li>
            </ul>
           
          </div>
          <div className="footer-menu__wrapper text-justify w-1/2 mb-4 md:w-1/4">
            <span className="footer-menu__title text-gray-100  text-sm  font-bold md:text-lg hover:text-white">Хүний нөөц</span>
            <ul className="footer-menu__list mt-3 text-xs md:text-base ">
              <li className="footer-menu__item hover:text-white">
              <Link href="/hrBodlogo">Хүний нөөцийн бодлого</Link>
              </li>
              <li className="footer-menu__item hover:text-white">
              <Link href="/openjobs">Нээлттэй ажлын байр</Link>
              </li>

              <li className="footer-menu__item hover:text-white">
              <Link href="/hr">Сонгон шалгаруулалт</Link>
              </li>
              <li className="footer-menu__item hover:text-white" >
              <Link href="/hr">Санал хүсэлт</Link>
              </li>
            </ul>
            
          </div>
          <div className="footer-menu__wrapper text-justify  w-1/2  mb-4 md:w-1/4">
            <span className="footer-menu__title text-gray-100 text-sm font-bold md:text-lg hover:text-white">Холбоо барих</span>
            <ul className="footer-menu__list text-xs mt-3 md:text-base">
              <li className="footer-menu__item hover:text-white">
                Утас: 70121211
              </li>
              <li className="footer-menu__item hover:text-white">
                Хаяг: Улаанбаатар хот, Сүхбаатар дүүрэг, Нарны зам
              </li>
              <li className="footer-menu__item hover:text-white">
                Факс: 70121211
              </li>
              <li className="footer-menu__item hover:text-white">
               Email: support@ento.mn
              </li>
            </ul>
            
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer