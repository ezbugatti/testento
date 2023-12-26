import { getProjects} from "@/sanity/sanity-utils"

import { Project } from "@/types/Project";
import Banner from './components/Banner/page'
import Intro from "./components/Intro/page";
import Zaxiral from "./components/Zaxiral/page";
import Stat from "./components/Stat/page";
import Link from "next/link";
import Section from "./components/Section/page";
import Direction from "./components/Direction/page";
import Partners from "./components/Partners/page";

export default async function Home() {
  const posts = await getProjects();
  return (
<>
<Banner />
<Intro />
<div className="wrapper">
          <Zaxiral />
        </div>
        <Stat />
        <div className="news-section">
          <div className="pt-20 pb-8 px-4">
            <div className="section-title text-gray-800 text-2xl text-bold text-center uppercase mb-6">
              <span>Мэдээ мэдээлэл</span>
            </div>

            <Link
              href="/news"
              className="float-right relative inline-flex items-center justify-items-center p-0.5 overflow-hidden text-xs font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-500 to-teal-500 group-hover:from-teal-500 group-hover:to-teal-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-teal-200 dark:focus:ring-teal-800"
            >
              <span className="relative px-4 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 ">
                Бүгдийг үзэх
              </span>
            </Link>
          </div>

          <div className="news-section__cards">
            <div  className="news-section__news-cards md:flex md:flex-1 md:grid-cols-1 w-full gap-6  px-6 ">
              {posts.map((post : Project) => (
          
                <Link key={post._id} href={`/post/${post.slug}`}>
                       <Section post={post} />
                  </Link>
             
              ))}
         
            </div>
          </div>


          
        </div>
        <Direction />
        <div className="wrapper">
          <Partners/>
        </div>


</>

  )
}
