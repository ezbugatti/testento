// import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import { Project } from "@/types/Project";
export async function getProjects(): Promise<Project[]> {
    const client = createClient({
        projectId: "ec3wxlo6",
    dataset: "production",
    apiVersion: "2023-03-04",
    });

    
    return await client.fetch(
        groq`*[_type == "post" && defined(slug.current)]{
                _id,
                _createdAt,
                title,
                body,
                "slug": slug.current,
                "image": mainImage.asset->url,
                publishedAt,
                featuredText,
                "authorName": author->name,
                "authorImage": author->image.asset->url,

        }`
        
    )
    
}

export async function getProject(slug: string): Promise<Project> {
    const clients = createClient({
        projectId: "ec3wxlo6",
    dataset: "production",
    apiVersion: "2023-03-04",
    });

    
    return await clients.fetch(
        groq`*[_type == "post" && slug.current == $slug][0]{
                _id,
                _createdAt,
                title,
                body,
                "slug": slug.current,
                "image": mainImage.asset->url,
                publishedAt,
                featuredText,
                "authorName": author->name,
                "authorImage": author->image.asset->url,
        }`,
        { slug }
        
    )
    
}