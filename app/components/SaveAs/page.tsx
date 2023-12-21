import saveAs from "file-saver";
import React from "react";


export default function SaveAs() {
  const saveFile = () => {
    saveAs("/logo.png", "logo.png");
  };
  return (
    <div>Hello</div>
    // <div>
    //   <img src="logo.png" alt="HTML tutorial" />
    //   <button
    //     className="border rounded-lg mt-4 py-2 px-6 bg-teal-500 text-white hover:bg-teal-700"
    //     onClick={saveFile}
    //   >
    //     ТАТАХ
    //   </button>
    //   <img src="logo.png" alt="HTML tutorial" />
    //   <button
    //     className="border rounded-lg mt-4 py-2 px-6 bg-teal-500 text-white hover:bg-teal-700"
    //     onClick={saveFile}
    //   >
    //     ТАТАХ
    //   </button>
    //   <img src="logo.png" alt="HTML tutorial" />
    //   <button
    //     className="border rounded-lg mt-4 py-2 px-6 bg-teal-500 text-white hover:bg-teal-700"
    //     onClick={saveFile}
    //   >
    //     ТАТАХ
    //   </button>
    // </div>
  );
}
