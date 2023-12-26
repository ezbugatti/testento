"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'



const Nav = () => {

  const [isClick, setisClick] = useState(false);
  const toggleNavbar = () => {
    setisClick(!isClick);
  }



  return (
    <>
    <div className="relative ">
      <nav
        id="nav-toggle"
        className="flex  flex-wrap items-center justify-between w-full p-6 z-10 top-0"
      >
        <div className="flex flex-row items-center flex-shrink-0 text-gray">
          <Link href="/"> 
          <Image width={200} height={200} src="/logo.png" alt="HTML tutorial" /></Link>
          
        </div>
       
       
{/* Show lg block */}
        <div
          id="nav-content"
          className="hidden w-full pt-6 lg:items-center lg:w-auto lg:block lg:pt-0"
        >
          <div className=" font-primary lg:flex lg:flex-1">
          
            <Link className='inline-block uppercase py-2 px-6 text-gray-900 hover:text-green-700 hover-underline-animation' href="/about"> 
          
            Бидний тухай 

            </Link>
                
            <div className="group inline-block relative">
            <Link
    className="inline-block py-2 px-6 text-gray-900 hover:text-green-700 hover-underline-animation uppercase"
    href="/business"
  >
    Бизнесийн чиглэл
  </Link>

  <ul className="absolute hidden text-gray-700 pt-1 group-hover:block z-10">
    <li className="">
      <Link
        className="rounded-t bg-gray-50 hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap"
        href="/ehnt"
      >
        Эм ханган нийлүүлэх
      </Link>
    </li>
    <li className="">
      <Link
        className="bg-gray-50 hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap"
        href="/pharmacy"
      >
       Эмийн сан
      </Link>
    </li>
    <li className="">
      <Link
        className="bg-gray-50 hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap"
        href="/tender"
      >
       Эмнэлгийн тоног төхөөрөмж
      </Link>
    </li>
    
  </ul>
  </div>

            <Link
              className="inline-block py-2 px-6 text-gray-900 hover:text-green-700 hover-underline-animation uppercase"
              href="/products"
              >Бренд бүтээгдэхүүн
              </Link>
            
              <div className="group inline-block relative">
  <Link
    className="inline-block py-2 px-6 text-gray-900 hover:text-green-700 hover-underline-animation uppercase"
    href="/hr"
  >
    Хүний нөөц
  </Link>

  <ul className="absolute hidden text-gray-700 pt-1 group-hover:block z-10">
    <li className="">
      <Link
        className="rounded-t bg-gray-50 hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap"
        href="/hrBodlogo"
      >
        Хүний нөөцийн бодлого
      </Link>
    </li>
    <li className="">
      <Link
        className="bg-gray-50 hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap"
        href="/openjobs"
      >
       Нээлттэй ажлын байр
      </Link>
    </li>
    
  </ul>
</div>


            <Link
              className="inline-block uppercase py-2 px-6 text-gray-900 hover:text-green-700 hover-underline-animation"
              href="/salbaruud"
              >Салбарууд</Link>
            <Link
              className="inline-block uppercase py-2 px-6 text-gray-900 hover:text-green-700 hover-underline-animation"
              href="news"
              >Мэдээ мэдээлэл</Link>

           

            <input
              className="py-2 px-6 text-sm"
              type="search"
              name="search"
              placeholder="Хайх"
            />
            <button type="submit" className="">
              <svg
                className="text-gray-600 h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                // style="enable-background: new 0 0 56.966 56.966"
                // xml:space="preserve"
                width="18px"
                height="18px"
              >
                <path
                  d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
                />
              </svg>
            </button>
          
          </div>
        </div>

{/* Show small block */}

<div className='lg:hidden flex items-center'>
  <button className='inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
  onClick={toggleNavbar}
  >

    {isClick ? (
      <Image src="/close.png" alt="logo" width={20} height={20}/>
    ) : ( 
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256"
      fill="#1A1A1A" >
      <g fill="#0d9488" fillRule="nonzero" stroke="none" strokeWidth="1" stroke-linecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><g transform="scale(5.12,5.12)"><path d="M0,7.5v5h50v-5zM0,22.5v5h50v-5zM0,37.5v5h50v-5z"></path></g></g>
      </svg>


    )}

  </button>
</div>
      </nav>

     
      
      {
        isClick && (
          <div className='lg:hidden flex'>
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>

            <Link className='block uppercase py-2 px-6 text-gray-900 hover:text-green-700 hover-underline-animation' href="/about"> 
          
          Бидний тухай 

          </Link>
              
          <div className="group block relative">
          <Link
  className="block py-2 px-6 text-gray-900 hover:text-green-700 hover-underline-animation uppercase"
  href="/business"
>
  Бизнесийн чиглэл
</Link>

<ul className="absolute hidden text-gray-700 pt-1 group-hover:block z-10">
  <li className="">
    <Link
      className="rounded-t bg-gray-50 hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap"
      href="/ehnt"
    >
      Эм ханган нийлүүлэх
    </Link>
  </li>
  <li className="">
    <Link
      className="bg-gray-50 hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap"
      href="/pharmacy"
    >
     Эмийн сан
    </Link>
  </li>
  <li className="">
    <Link
      className="bg-gray-50 hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap"
      href="/tender"
    >
     Эмнэлгийн тоног төхөөрөмж
    </Link>
  </li>
  
</ul>
</div>

          <Link
            className="block py-2 px-6 text-gray-900 hover:text-green-700 hover-underline-animation uppercase"
            href="/products"
            >Бренд бүтээгдэхүүн
            </Link>
          
            <div className="group block relative">
<Link
  className="block py-2 px-6 text-gray-900 hover:text-green-700 hover-underline-animation uppercase"
  href="/hr"
>
  Хүний нөөц
</Link>

<ul className="absolute hidden text-gray-700 pt-1 group-hover:block z-10">
  <li className="">
    <Link
      className="rounded-t bg-gray-50 hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap"
      href="/hrBodlogo"
    >
      Хүний нөөцийн бодлого
    </Link>
  </li>
  <li className="">
    <Link
      className="bg-gray-50 hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap"
      href="/openjobs"
    >
     Нээлттэй ажлын байр
    </Link>
  </li>
  
</ul>
</div>


          <Link
            className="inline-block uppercase py-2 px-6 text-gray-900 hover:text-green-700 hover-underline-animation"
            href="/salbaruud"
            >Салбарууд</Link>
          <Link
            className="inline-block uppercase py-2 px-6 text-gray-900 hover:text-green-700 hover-underline-animation"
            href="news"
            >Мэдээ мэдээлэл</Link>

         

          <input
            className="py-2 px-6 text-sm"
            type="search"
            name="search"
            placeholder="Хайх"
          />
          <button type="submit" className="">
            <svg
              className="text-gray-600 h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              // xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              // style="enable-background: new 0 0 56.966 56.966"
              // xml:space="preserve"
              width="18px"
              height="18px"
            >
              <path
                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
              />
            </svg>
          </button>
        

            </div>
          </div>
        )
      }
    </div>
    </>
  )
}

export default Nav