import React from 'react'

import NewsPost from '../components/NewsPost/page';
import { getProjects } from '@/sanity/sanity-utils';



export default async function news()  {
  const posts = await getProjects();

  return (
    <NewsPost posts={posts} />

  )
}
