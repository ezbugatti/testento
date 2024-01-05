
import { PortableTextBlock} from 'sanity';
export type Project = {
    _id: string;
    _createdAt: Date,
    name: string;
    title: string;
    slug: string;
    image: string;
    url: string;
    publishedAt: Date;
    authorName: string;
    picture: string;
    authorImage: string;
    authorBio: string;
    featuredText: string;
    body: string;
    content: PortableTextBlock[];
    categories: string;
    category: string;
    useTitle: string;
    useZaalt: string;
    fetchedCategories: any;
};
