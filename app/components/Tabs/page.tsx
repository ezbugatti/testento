"use client"
import { useState } from "react";
import Image from "next/image";

import SaveAs from "../SaveAs/page";
import Zaxiral from "../Zaxiral/page";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "Танилцуулга",
      content: (
        <>
          <div className="  text-center text-3xl font-semibold">
            Танилцуулга
            <iframe
              className="pt-10 w-full aspect-video "
              width="960"
              height="540"
              src="https://www.youtube.com/embed/EMCak8zoLxY"
              title="ЭНТО компанийн танилцуулга"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </>
      ),
    },
    {
      label: "Захирлын мэндчилгээ",
      content: <Zaxiral/>,
    },
    {
      label: "Бүтэц зохион байгуулалт",
      content: (
        <Image width={1200} height={600}  className="flex rounded-2xl ml-24 " src="/entobanner.png" alt="s" />
      ),
    },
    {
      label: "Лого татах",
      content: <SaveAs />,
    },
  ];

  return (
    <div className="flex w-full text-sm font-medium text-gray-900 bg-white border-gray-100 rounded-lg ">
      <div className="w-1/4 flex flex-col ">
        {tabs.map((tab, index) => (
          <button
            key={index}
            type="button"
            className={` md:w-full px-8 py-4 font-normal text-left ${
              index === activeTab
                ? "font-bold text-gray-950 bg-teal-500 border border-gray-200 rounded-t-lg"
                : "text-gray-900 bg-white border-b border-gray-200"
            } cursor-pointer focus:outline-none `}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="w-3/4 pl-8 justify-center items-center ">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;
