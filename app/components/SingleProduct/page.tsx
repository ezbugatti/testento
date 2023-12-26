import { Project } from "@/types/Project";
import Link from "next/link";
import Image from "next/image";

const SingleProduct = ({ product }: any) => {

  return (
    <Link key={product?._id ? product._id : "no id"}
          href={`/product/${product?.slug ? product.slug : "no slug"}`}
          className="hover:text-rose-50 text-gray-900 duration-300 flex justify-between items-center"
        >
    <div className="single-product flex flex-col bg-gray-50 gap-3 shadow-md hover:shadow-xl hover:scale-105 duration-300 px-4 py-7 rounded-sm overflow-hidden">
      <div className="flex justify-center">
        <Image width={800} height={600}
          className="w-72 h-48 object-contain hover:scale-110 duration-500"
          src={product?.image ? product.image : "image null"}
          alt={product?.title ? product.title : "product null"}
        />
      </div>
      
      <p className="text-sm text-gray-600">
        Brand: <span className="font-semibold capitalize">{product?.title ? product.title : 'null'}</span>
      </p>
      <p className="text-sm text-gray-600">
        Тайлбар: <span className="text-rose-500 font-semibold">{product?.featuredText ? product.featuredText : "product null"}</span>
      </p>
      <div className="flex justify-between items-center">
        
          <button className="text-emerald-900 px-2 py-1 border border-emerald-700 rounded-md hover:bg-emerald-700 hover:text-sky-50 duration-300">
            Дэлгэрэнгүй 
          </button>
      </div>
    </div>
    </Link>
  );
};

export default SingleProduct;
