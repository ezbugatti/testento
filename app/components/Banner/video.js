"use client";
import Image from "next/image";
import React from "react";

import { useState } from "react";
export default function Video() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <div>
      {videoLoaded ? null : (
        <Image width={2000} height={2000} src="/about-hero.jpg" alt="Loading" />
      )}

      <video
        autoPlay
        muted
        loop
        onCanPlayThrough={handleVideoLoad}
        style={{ display: videoLoaded ? "block" : "none" }}
      >
        <source src="banner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
