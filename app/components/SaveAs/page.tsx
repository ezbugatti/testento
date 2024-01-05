"use client"
import saveAs from "file-saver";
import React from "react";
import Image from "next/image";

export default function SaveAs() {
  const saveEnto = () => {
    saveAs("/logo.png");
  };
  const saveMed = () => {
    saveAs("/entomed.png");
  };
  const savePharma = () => {
    saveAs("/entopharma.png");
  };
  return (
    <div className="grid grid-cols-3 gap-4">
  <div>
      <Image width={150} height={100} className="pb-2"  src="/logo.png" alt="HTML tutorial" />
      <button
        className="border rounded-lg  py-2 px-6 bg-teal-500 text-white hover:bg-teal-700"
        onClick={saveEnto}
      >
                ЛОГО ТАТАХ

      </button>

      </div>
      <div>
      <Image width={150} height={100} src="/entopharma.png" alt="HTML tutorial" />
      <button
        className="border rounded-lg  py-2 px-6 bg-teal-500 text-white hover:bg-teal-700"
        onClick={savePharma}
      >
                ЛОГО ТАТАХ

      </button>
      </div>
      <div>
      <Image width={150} height={40} src="/entomed.png" alt="HTML tutorial"/>
      <button
        className="border  rounded-lg py-2 px-6 bg-teal-500 text-white hover:bg-teal-700"
        onClick={saveMed}
      >
        ЛОГО ТАТАХ
      </button>
      </div>
    </div>
  );
}
