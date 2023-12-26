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
    <div className="">
      <Image width={100} height={100}  src="/logo.png" alt="HTML tutorial" />
      <button
        className="border rounded-lg mt-4 py-2 px-6 bg-teal-500 text-white hover:bg-teal-700"
        onClick={saveEnto}
      >
        ТАТАХ
      </button>
      <Image width={100} height={100}  className="mt-4" src="/entopharma.png" alt="HTML tutorial" />
      <button
        className="border rounded-lg mt-4 py-2 px-6 bg-teal-500 text-white hover:bg-teal-700"
        onClick={savePharma}
      >
        ТАТАХ
      </button>
      <Image width={100 } height={100}  src="/entomed.png" alt="HTML tutorial" />
      <button
        className="border rounded-lg py-2 px-6 bg-teal-500 text-white hover:bg-teal-700"
        onClick={saveMed}
      >
        ТАТАХ
      </button>
    </div>
  );
}
