

import ProductDetail from "@/app/components/ProductDetail/page";
import { getProduct } from "@/sanity/sanity-utils";


type Props = {
    params : {slug: string};
}




export default async function Slugs({params} : Props ) {
   const slug = params.slug;
    const singleProduct  = await getProduct(slug)

    return (

        <ProductDetail products={singleProduct} />
)}
