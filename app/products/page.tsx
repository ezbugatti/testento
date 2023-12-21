
import Link from "next/link";
import {getCategories, getProducts } from "@/sanity/sanity-utils";
import SingleProduct from "../components/SingleProduct/page";
import {Project} from "@/types/Project";


export default async function Products () {
  const products = await getProducts(); 
  const category = await getCategories();
  return (
      <div className="container mx-auto pb-20">
        <h2 className="text-center text-3xl py-10">Брэнд бүтээгдэхүүн</h2>
        <div className="flex justify-between gap-10">
          <div className="w-[20%] bg-gray-50 flex flex-col gap-3 px-3 pt-2">
            <h3
              className="select-none cursor-pointer flex justify-between"
            >
              <span className="font-semibold">Ангилал</span>
              <span>({category.length})</span>
              
            </h3>
            {category.map((category: Project) => (
              <div key={category._id}
                className="select-none cursor-pointer capitalize font-normal"
              >
                <span>{category.title}</span>
              </div>
            ))}
          </div>
          <div>
            <p className="text-gray-500 pb-4">
              {<Link href="/">Нийт <span>{`(${products.length})`}</span> </Link>}
              <span className="text-sky-400 px-1"></span>
            </p>
            <div className="grid grid-cols-3 gap-10 ">
              {
                products.map((product) => (
                  <SingleProduct
                  key={product._id} product={product} />
                ))}
            </div>
          </div>
        </div>
      </div>
  );
};
