import React from 'react'
import Image from 'next/image'
const Zaxiral = () => {
  return (
    <div>
      
        <div className="flex">
          <div className="w-auto lg:hidden">
            <h2
              className="flex text-gray-900 font-primary uppercase justify-center text-2xl"
            >
              захирлын мэндчилгээ
            </h2>
            <div className="w-auto items-center">
              <Image
                src="/zaxiral.jpg"
                height={100} // Desired size with correct aspect ratio
                width={100}
                className="transform rounded-md ml-6"
                alt="zaxiral"
              />
            </div>
            <div
              className="font-thin pt-10 leading-relaxed text-justify justify-between "
            >
              ЭНТО ХХК-тай хамт байгаа таны энэ өдрийн амар амгалан эрэн
              мэндчилье! Манай компани 1998 онд үүсэн байгуулагдаж, өнөөдрийг
              хүртэл Монгол улсын Эрүүл мэндийн салбарт тасралтгүй 25 жил
              ажилласан байна. 
              
<br/>
              Хүндэтгэсэн
              <br />
              <span className="italic"
                >ЭНТО ХХК-ийн Гүйцэтгэх захирал Ч. Эрдэнэтуяа</span
              >
            </div>
            <button className="bg-green-800 mt-4 rounded-lg py-2 px-6 hover:bg-green-600 text-gray-100 text-sm">Цааш унших</button>
            
          </div>
          <div className="w-3/6 hidden lg:block">
            <h2
              className=" text-gray-900 font-primary uppercase text-center text-2xl"
            >
              захирлын мэндчилгээ
            </h2>
            
            <div
              className="font-thin pt-10 leading-relaxed text-justify justify-between lg:flex "
            >
             ЭНТО ХХК-тай хамт байгаа таны энэ өдрийн амар амгалан эрэн
              мэндчилье! Манай компани 1998 онд үүсэн байгуулагдаж, өнөөдрийг
              хүртэл Монгол улсын Эрүүл мэндийн салбарт тасралтгүй 25 жил
              ажилласан байна. Бид шинжлэх ухааны хамгийн сүүлийн үеийн ололт
              амжилт дээр тулгуурлан бүтээгдсэн, эмчилгээний өндөр идэвхтэй,
              чанарын баталгаатай эм, эмнэлгийн хэрэгслийг импортлон, хүн
              ардынхаа эрүүл мэндийн төлөө хувь нэмрээ оруулж байгаадаа үргэлж
              таатай байдаг. Бид хамтран ажилладаг гадаад болон дотоодын
              байгууллага, харилцагч, хэрэглэгчдийнхээ найдвартай, итгэл
              хүлээсэн компани байх зорилтыг тавин ажилласаар ирсэн. Хүний
              амьдарлын эрхэм зүйлийн нэг болох эрүүл мэндийн төлөө гэсэн нэгэн
              зорилгын дор ЭНТОчууд бид нэгдэж чадсан. Бид хийж буй ажил
              бүхэндээ сэтгэлээ шингээж, хамтран ажилладаг бизнесийн түншүүд,
              харилцагч нараа ямагт хүндэтгэж, Монгол Улсынхаа эрүүл мэндийн
              салбартаа манлайлагч хамт олон бай х болно. Та бүхэнд хамт олныхоо
              нэрийн өмнөөс үргэлж баярлаж явдагаа илэрхийлэхийн ялдамд, эрүүл
              энх, сайн сайхныг хүсэн ерөөе.
              <br />
              Хүндэтгэсэн
              <br />
              ЭНТО ХХК-ийн Гүйцэтгэх захирал Ч. Эрдэнэтуяа
            </div>
          </div>

          <div className="w-2/4 hidden lg:block">
            <img
              src="zaxiral.jpg"
              className="transform rounded-2xl ml-6"
              alt="zaxiral"
            />
          </div>
        </div>
      
    </div>
  )
}

export default Zaxiral