import React from "react";
import Image from "next/image";
const Partners = () => {
  return (
    <div className="container mx-auto pt-16">
      <div className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-16">
        <div className="px-4">
          <div className="section-title text-gray-800 text-2xl text-bold text-center uppercase">
            <span>бизнес хамтрагчид</span>
          </div>
        </div>
      </div>
      <div className="xl:py-16 lg:py-16 md:py-16 sm:py-16 px-15 flex flex-wrap">
        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r :border-r border-gray-200 xl:pb-10 pb-16 items-center ">
          <Image width={100} height={100}
            className="focus:outline-none  "
            src="/partner1.png"
            alt="Adidas"
          />
        </div>
        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r border-gray-200 xl:pb-10 pb-16 items-center">
          <Image width={100} height={100}

            className="focus:outline-none "
            src="/partner2.png"
            alt="Chanel"
            role="img"
          />
        </div>
        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b border-gray-200 xl:pb-10 pb-16 pt-4 items-center">
          <Image width={100} height={100}
       className="focus:outline-none "
            src="/partner3.png"
            alt="Nike"
            role="img"
          />
        </div>
        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center lg:border-b xl:border-b lg:border-l xl:border-l border-gray-200 xl:pb-10 pb-16 items-center">
          <Image width={100} height={100}

            className="focus:outline-none "
            src="/partner4.png"
            alt="Toyota"
            role="img"
          />
        </div>
        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center">
          <Image width={100} height={100}

            className="focus:outline-none "
            src="/partner5.png"
            alt="GS1"
            role="img"
          />
        </div>
        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center">
          <Image width={100} height={100}

            className="focus:outline-none "
            src="/partner6.png"
            alt="BlackBerry"
            role="img"
          />
        </div>
        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pt-10 lg:pt-10 md:pt-2 pt-16">
          <Image width={100} height={100}

            className="focus:outline-none "
            src="/partner7.png"
            alt="Mini"
            role="img"
          />
        </div>
        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-l lg:border-l border-gray-200 xl:pt-10 lg:pt-10 md:pt-2 pt-16">
          <Image width={100} height={100}
            className="focus:outline-none "
            src="/partner8.png"
            alt="Honda"
            role="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
