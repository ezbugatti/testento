import Ehnt from '../components/Ehnt/page'
import Image from 'next/image'
const hrBodlogo = () => {
  return (
<>
<div className='wrapper'>
<div className="flex">
          <div className="w-auto md:hidden">
            <h2
              className="flex text-gray-900 font-primary uppercase justify-center text-2xl"
            >
              хүний нөөцийн бодлого
            </h2>
            <div className="w-auto items-center mt-4">
            <Image width={800} height={600}
                src="/hrb.jpg"
                className="transform rounded-md ml-6"
                alt="hr"
              />
            </div>
            <div
              className="font-thin pt-10 leading-relaxed text-justify justify-between "
            >
              Манай компанийн Хүний нөөцийн менежментийн бодлогын гол суурь концепц нь сургалт хөгжил, ур чадварт суурилсан ажлын байранд ажиллуулах, карьер өсөх өргөн боломжоор хангах юм. Бид ажилтнуудынхаа ур чадварыг хөгжүүлэх, мэргэшүүлэхэд ихээхэн анхаарч, тухайн ажилтны дур сонирхол, суурь авьяас чадварт нийцүүлэн тохирох ажлын байранд хөрвүүлэн ажиллуулж, хариуцлагатай, үнэнч шударга зарчмыг дээдлэн, үр дүнд суурилсан цалин урамшууллын бодлого барьдаг. Манай ажилтнууд ажлын байрны өргөн сонголттойгоор богино хугацаанд мэргэжлийн болон ерөнхий ур чадвараа ихээхэн сайжруулж, хурдацтай өсөн дэвжиж, МУ болон ОУ-ын байгууллагатай мөр зэрэгцэн, хөгжил цэцэглэлтийг хамтдаа бүтээдэг

            
          </div>
          </div>
          <div className="w-3/6 hidden md:block mt-4">
            <h2
              className="flex text-gray-900 font-primary uppercase text-center text-2xl"
            >
              хүний нөөцийн бодлого
            </h2>
            
            <div
              className="font-thin pt-10 leading-relaxed text-justify justify-between lg:flex "
            >
            Манай компанийн Хүний нөөцийн менежментийн бодлогын гол суурь концепц нь сургалт хөгжил, ур чадварт суурилсан ажлын байранд ажиллуулах, карьер өсөх өргөн боломжоор хангах юм. Бид ажилтнуудынхаа ур чадварыг хөгжүүлэх, мэргэшүүлэхэд ихээхэн анхаарч, тухайн ажилтны дур сонирхол, суурь авьяас чадварт нийцүүлэн тохирох ажлын байранд хөрвүүлэн ажиллуулж, хариуцлагатай, үнэнч шударга зарчмыг дээдлэн, үр дүнд суурилсан цалин урамшууллын бодлого барьдаг. Манай ажилтнууд ажлын байрны өргөн сонголттойгоор богино хугацаанд мэргэжлийн болон ерөнхий ур чадвараа ихээхэн сайжруулж, хурдацтай өсөн дэвжиж, МУ болон ОУ-ын байгууллагатай мөр зэрэгцэн, хөгжил цэцэглэлтийг хамтдаа бүтээдэг
            </div>
          </div>

          <div className="w-2/4 hidden md:block">
            <Image width={1200} height={600}
              src="/hrb.jpg"
              className="w-full items-center transform rounded-2xl ml-6"
              alt="hr"
            />
          </div>
        </div>
        </div>
        </>
  )
}

export default hrBodlogo