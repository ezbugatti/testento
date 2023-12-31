
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import ProductTabs from "./tabs";
import { MdLocationOn } from "react-icons/md";

const components = {
    types: {
      code: (props: any) => (
        <pre data-language={props.node.language}>
          <code> {props.node.code}</code>
      
        </pre>
        
      )
    }
  }
export default async function ProductDetail ({products} : any) {

  return (
      <div className="container mx-auto pb-20">
        <h2 className="text-center text-3xl py-10">{products?.title ? products.title : 'no title'}</h2>
        <div className="flex justify-between gap-10">
          <div className="w-[20%] bg-gray-50 flex flex-col gap-2 px-3 pt-2">
            <h3
              className="select-none cursor-pointer flex justify-between"
            >
              <span className="font-semibold">Ангилал</span>
            </h3>

              <div key={products?._id ? products._id : "no id"}
                className="select-none cursor-pointer capitalize font-semibold"
              >
                <span>{products?.categories ? products.categories : "no categories"}</span>
              </div>
        
          </div>
          <div>
            <p className="text-gray-500 pb-4">
              {<Link href="/products">Home </Link>}/
              <span className="text-sky-400 px-1"></span>
            </p>
            <div className="grid grid-cols-2 gap-10 ">
            <div className="single-product flex flex-col bg-gray-50 gap-3 shadow-md px-4 py-7 rounded-sm overflow-hidden">
      <div className="flex justify-center">
        <Image width={800} height={400}
          className="w-full h-full object-contain"
          src={products?.image ? products.image : "image null"}
          alt={products?.title ? products.title : "product null"}
        />
      </div>
      <p className="text-sm text-gray-600">
        Brand: <span className="font-semibold capitalize">{products?.title ? products.title : 'null'}</span>
      </p>
      <p className="text-sm text-gray-600">
        Тайлбар: <span className="text-gray-700 font-semibold">{products?.featuredText ? products.featuredText : "product null"}</span>
      </p>
    </div>
    <div className="single-product flex flex-col bg-gray-50 gap-3 px-4 py-7 rounded-sm overflow-hidden">
      
      
      <ProductTabs products={products}/>
    <div className="relative space-y-4 flex flex-col justify-center bg-gray-50 py-6 sm:py-12">
      <div className="border-2 border-teal-700 rounded-md p-1 text-center bg-teal-700 text-gray-50"> Уг бүтээгдэхүүнийг авах боломжтой салбарууд</div>
      <div className="mx-auto max-w-xl">
      <div className="w-auto items-center mt-4">
            <iframe className='aspect-square h-auto w-full md:h-96' src="https://www.google.com/maps/d/u/0/embed?mid=1LMrDXF3pnT3EAQYKKkTCFX0Js2pbKDs&ehbc=2E312F" ></iframe>
            </div>
          <div className="flex-1">Та өөрт ойрхон салбар 
            дээр дарж дэлгэрэнгүй мэдээллийг авна уу.</div>
        </div>
        <div className="pt-8 text-sm font-semibold leading-7">
          <p className="text-gray-800">Хэрэв та манай харилцагч бол доорхи вэб болон 70121211 утсаар захиалга өгөх боломжтой</p>
          <p>
            <a href="https://e.ento.mn/" className="text-sky-600 hover:text-sky-800">
              Харилцагчийн онлайн захиалга &rarr; e.ento.mn</a>
          </p>
        </div>
      </div>

    </div>

      {/* <PortableText value={products?.body ? products.body : 'No body'} components={components}/> */}

    </div>
            </div>
          
          </div>
         
        </div>
  );
};
