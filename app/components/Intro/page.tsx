import React from 'react'

const Intro = () => {
  return (
    <div className="relative container mt-10 mx-auto animate-fade-up animate-delay-[2ms] animate-ease-in-out">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <div
        className="card m-2 cursor-pointer border border-gray-400 rounded-lg hover:shadow-2xl hover:border-opacity-0 transform  transition-all duration-500 text-white bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        <div className="m-3">
          <h2 className="text-lg mb-2 text-white">АЛСЫН ХАРАА</h2>
          <div
            className="font-medium text-sm text-gray-100 hover:text-white transition-all duration-200"
          >
            ҮНДЭСНИЙ эрх ашгийг дээдэлсэн САЛБАРЫН хөгжилд хувь нэмрээ
            оруулсан ЭРҮҮЛ МЭНДИЙН ТЭРГҮҮЛЭГЧ байгууллага болно
          </div>
        </div>
      </div>
      <div
        className="card m-2 cursor-pointer border border-gray-400 rounded-lg hover:shadow-2xl hover:border-opacity-0 transform  transition-all duration-500 text-white bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        <div className="m-3">
          <h2 className="text-lg mb-2">ЭРХЭМ ДЭЭДЛЭХ ЗОРИЛГО</h2>
          <div
            className="font-medium text-sm text-gray-100 hover:text-white transition-all duration-200"
          >
            <b>ЭРХЭМ</b> хэрэглэгч, түнш, ажилтнуудын <b>НАНДИН</b> хамтын ажиллагаан дээр үндэслэсэн

            <b>ТЭНГЭРЛЭГ</b>

            <b>ОРШИХУЙ</b>
          </div>
        </div>
      </div>
      <div
        className="card m-2 cursor-pointer border border-gray-400 rounded-lg hover:shadow-2xl hover:border-opacity-0 transform  transition-all duration-500 text-white bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        <div
          className="m-3 "
        >
          <h2 className="text-lg mb-2 text-white">ЗОРИЛГО</h2>
          <div
            className="font-medium text-sm text-gray-100 hover:text-white transition-all duration-200"
          >
            Эрүүл мэндийн Найдвартай бүтээгдэхүүн, үйлчилгээг Хэрэглэгчиддээ
            Итгэл, сэтгэлийн угаас Хүндэтгэлтэй харилцаагаар хүргэх
          </div>
        </div>
      </div>
      <div
        className="card m-2 cursor-pointer border border-gray-400 rounded-lg hover:shadow-2xl hover:border-opacity-0 transform  transition-all duration-500 text-white bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        <div
          className="m-3 r"
        >
        
          <h2 className="text-lg mb-2">ЗОРИЛТ</h2>
          <p
            className="font-medium text-sm text-gray-100 hover:text-white transition-all duration-200"
          >
            Эерэг хандлага …
            <br />
            Хүндэтгэлтэй харилцаа …
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Intro