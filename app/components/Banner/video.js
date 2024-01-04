import React from "react";

export default function video() {
  return (
    <video autoPlay className="w-full" muted loop>
      <source src="/banner.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

// const [videoLoaded, setVideoLoaded] = useState(false);

// const handleVideoLoad = () => {
//   setVideoLoaded(true);
// };

// return (
//   <div>
//     {videoLoaded ? null : (
//       <Image
//         className="w-full"
//         width={2000}
//         height={2000}
//         src="/about-hero.jpg"
//         alt="Loading"
//       />
//     )}

//     <video
//       autoPlay
//       className="w-full"
//       muted
//       loop
//       onCanPlayThrough={handleVideoLoad}
//       style={{ display: videoLoaded ? "block" : "none" }}
//     >
//       <source src="banner.mp4" type="video/mp4" />
//       Your browser does not support the video tag.
//     </video>
//   </div>
// );
