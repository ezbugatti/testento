import React from "react";
import moment from "moment";
import { urlFor } from "../../getUrlFor";
import Image from "next/image";
import Link from "next/link";

export default function section({post}: any) {
  return (
    <div key={post?._id ? post._id : 'no id'} z-0="true" className="news-section__news-card">
      <div
        z-0="true"
        role="img"
        className="news-section__news-card-imageWrapper focus:outline-none cursor-pointer relative overflow-hidden"
      >
        {post?.image && (
            <Image
              className="w-full transition-all object-cover  transform ease-in-out hover:scale-105 duration-700 focus:outline-none"
              src={urlFor(post.image).height(400).url()}
              width={600}
              height={400}
              alt={post?.image}
            />
          )}
      

        <div className="py-2 px-4 w-full flex justify-between bg-teal-700 news-section__news-card-text">
          <div
            z-0="true"
            className="focus:outline-none  text-sm text-white font-semibold tracking-wide"
          >
            {post?.authorName ? post.authorName : "No name"}
          </div>

          <div
            z-0="true"
            className="focus:outline-none text-sm text-white font-semibold tracking-wide"
          >
            {moment(post?.publishedAt ? post.publishedAt : 'Not published').subtract(10, "days").calendar()}
          </div>
        </div>
        <div className="news-section__news-card-text">
          <div className="news-section__featured-card-title">{post?.title ? post.title : 'no title'}</div>
          <div className="news-section__news-card-title card-title">
            {post?.featuredText ? post.featuredText : 'no feature' }
          </div>
          <Link href="#" className="readmore group">
            <span className="readmores">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="readmorespan ease">Цааш унших...</span>
            <span className="relative invisible ease">Цааш унших...</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
