import React from 'react'
import {AiOutlineMail, AiFillPhone} from 'react-icons/ai'
import {BiTime} from 'react-icons/bi'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import Link from 'next/link'

const Head = () => {
  return (
   <div
      className="hidden flex-wrap items-center justify-between bg-teal-600 w-full py-2 px-6 top-0 md:block lg:flex"
    >
      <div className="flex flex-row items-center flex-shrink-0 ">
      <Link href="https://e.ento.mn"  target="_blank"className="inline-flex items-center justify-center p-1 text-base font-medium text-gray-700 rounded-lg bg-teal-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
    <AiOutlineShoppingCart size={20} />
                                    
    <span className="w-full pl-2 hover:underline ">Онлайн Захиалга</span>
    <svg className="w-4 h-4 ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
</Link> 
        
      </div>


     



      <div className="w-full pt-6 lg:flex lg:items-center lg:w-auto lg:pt-0">
        <ul className="font-medium text-white lg:flex lg:flex-1">
          <li className='flex items-center'>
          <AiOutlineMail/>
            <Link
              className="target: inline-block py-2 px-2 text-gray-100 hover:text-white"
              href="#"
              >  support@ento.mn
            </Link>
          </li>
          <li className='flex items-center px-4'>
          <AiFillPhone/>
            <Link
              className="inline-block py-2 px-2 text-gray-100 hover:text-white"
              href="#"
              >701212111</Link
            >
          </li>
          <li className='flex items-center '>
          <BiTime/>
            <Link
              className="inline-block py-2 px-2 text-gray-100 hover:text-white"
              href="#"
              > 09AM - 18PM
            </Link>
          </li>
        </ul>
      </div>
   </div>
  )
}
export default Head;