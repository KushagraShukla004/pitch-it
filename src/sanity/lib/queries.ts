import { defineQuery } from "next-sanity";

//"!" this means "if" here
export const IDEAS_QUERY = defineQuery(`
  *[_type == "idea" && (
    !defined($search) || 
    category match $search || 
    title match $search || 
    author->name match $search
  )] | order(_createdAt desc) {
    _id,
    title,
    slug,
    _createdAt,
    author -> {
      _id,
      name,
      image,
      bio
    },
    views,
    description,
    category,
    image
  }
`);

export const IDEAS_BY_ID_QUERY = defineQuery(`*[_type == "idea" && _id== $id][0]{
  _id,
    title,
    slug,
    _createdAt,
    author ->{
      _id,name,username,image,bio
    },
    views,
    description,
    category,
    image,
    pitch,
}`);

export const IDEA_VIEWS_QUERY = defineQuery(`
  *[_type == "idea" && _id == $id][0]{
      _id, 
      views
  }
`);

export const AUTHOR_BY_GITHUB_ID_QUERY = defineQuery(
  //here "id" refers to unique value given by GITHUB id
  `
  *[_type == "author" && id == $id][0]{
      _id,
      id,
      name,
      username,
      email,
      image,
      bio
  }
  `
);

export const AUTHOR_BY_ID_QUERY = defineQuery(
  //here "_id" refers to unique value given by Sanity _id
  `
  *[_type == "author" && _id == $id][0]{
      _id,
      id,
      name,
      username,
      email,
      image,
      bio
  }
  `
);
