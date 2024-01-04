import React from "react";
import moment from "moment";
import { client } from "@/sanity/lib/client";

import Image from "next/image";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
const components = {
  types: {
    code: (props: any) => (
      <pre data-language={props.node.language}>
        <code> {props.node.code}</code>
    
      </pre>
      
    )
  }
}


const builder = imageUrlBuilder(client);
export default function Posts({post}: any) {
  return (
    <div className="container w-full md:max-w-3xl mx-auto pt-20">
    <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
      <div className="font-sans">
        <div className="text-base md:text-sm text-green-500 font-bold">
          &lt;{" "}
          <Link
            href="/news"
            className="text-base md:text-sm text-green-500 font-bold no-underline hover:underline"
          >
            БУСАД МЭДЭЭНҮҮД
          </Link>
        </div>
        <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
          {post?.title ? post.title : "No Title"}
        </h1>
        <div className="text-sm md:text-base font-normal text-gray-600">
        {new Date(post?.publishedAt).toDateString()}

        </div>
      </div>
      <div className="w-full hidden lg:block">
      {post?.image ? (
        <Image
          className="w-full"
          src={builder.image(post.image).width(300).height(300).url()}
          width={600}
          height={400}
          alt={post?.image}
        />
      ) : null}

      </div>
      <div className="py-6 text-justify max-w-2xl m-auto ">
    <PortableText value={post?.body ? post.body : 'No body'} components={myPortableTextComponents}/>

      </div>
    </div>

    <div className="text-base md:text-sm text-gray-500 px-4 py-6">
      Категори: {post?.categories ? post.categories : " no category"}
      <Link
        href="#"
        className="text-base md:text-sm text-green-500 no-underline hover:underline"
      ></Link>{" "}
      .{" "}
      <Link
        href="#"
        className="text-base md:text-sm text-green-500 no-underline hover:underline"
      >
        
      </Link>
    </div>

    <hr className="border-b-2 border-gray-400 mb-8 mx-4"></hr>

    <div className="container px-4">
      <div className="font-sans bg-gradient-to-b from-green-100 to-gray-100 rounded-lg shadow-xl p-4 text-center">
        <h2 className="font-bold break-normal text-xl md:text-3xl">
          И-мэйлээр мэдээ мэдээлэл авах
        </h2>
        <h3 className="font-bold break-normal text-gray-600 text-sm md:text-base">
          Имэйл хаягаа оруулан шинэ мэдээ бүрийг цаг алдалгүй авах
          боломжтой
        </h3>
        <div className="w-full text-center pt-4">
          <form action="#">
            <div className="max-w-xl mx-auto p-1 pr-0 flex flex-wrap items-center">
              <input
                type="email"
                placeholder="youremail@example.com"
                className="flex-1 mt-4 appearance-none border border-gray-400 rounded shadow-md p-3 text-gray-600 mr-2 focus:outline-none"
              />
              <button
                type="submit"
                className="flex-1 mt-4 block md:inline-block appearance-none bg-green-500 text-white text-base font-semibold tracking-wider uppercase py-4 rounded shadow hover:bg-green-400"
              >
                Дагах
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div className="flex w-full items-center font-sans px-4 py-12">
<Image alt="image" width={50} height={50} src={post?.authorImage ? post.authorImage : "No name"}></Image>


      <div className="flex-1 px-2">
        <div className="text-base font-bold  md:text-xl leading-none mb-2">
         {post?.authorName ? post.authorName : "No name"}
        </div>
        <div className="text-gray-600 text-xs md:text-base">
          {post?.authorBio ? post.authorBio : 'No Bio'}
        </div>
      </div>
    </div>
    <hr className="border-b-2 border-gray-400 mb-8 mx-4">


        
    </hr>

    <div className="font-sans flex justify-between content-center px-4 pb-12">
      <div className="text-left">
        <span className="text-xs md:text-sm font-normal text-gray-600">
          &lt; Өмнөх
        </span>
        <div>
          <Link
            href="#"
            className="break-normal text-base md:text-sm text-green-500 font-bold no-underline hover:underline"
          >
            Blog title
          </Link>
        </div>
      </div>
      <div className="text-right">
        <span className="text-xs md:text-sm font-normal text-gray-600">
          Дараагийн &gt;
        </span>
        <div>
          <Link
            href="#"
            className="break-normal text-base md:text-sm text-green-500 font-bold no-underline hover:underline"
          >
            Blog title
          </Link>
        </div>
      </div>
    </div>
  </div>
  );
}

const myPortableTextComponents = {
types: {
  image: ({value}: any) => <Image alt="image" width={500} height={800} src={builder.image(value).url()} />,
},
}