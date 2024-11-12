import { defineQuery } from "next-sanity";

//"!" this means "if" here
export const IDEAS_QUERY =
  defineQuery(`*[_type == "idea" && defined(slug.current) && !defined($search) || category match $search || title match $search || author->name match $search ] | order(_createdAt desc){
  _id,
  title,
  slug,
  _createdAt,
  author ->{
    _id,name,image,bio
  },
  views,
  description,
  category,
  image
}`);
