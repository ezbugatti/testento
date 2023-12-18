
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import { getProject } from "@/sanity/sanity-utils";

import Posts from "@/app/components/Posts/page";

type Props = {
    params : {slug: string};
}

export default async function Slugs({params} : Props ) {
   const slug = params.slug;
    const post = await getProject(slug)

    return (

        <Posts post={post} />
)}
