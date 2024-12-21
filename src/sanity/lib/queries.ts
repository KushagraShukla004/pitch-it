import { defineQuery } from "next-sanity";

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

//"!" this means "if" here
export const IDEAS_QUERY = defineQuery(`
  *[_type == "idea" && defined(slug.current) && !defined($search) || title match $search || category match $search || author->name match $search] | order(_createdAt desc) {
  _id, 
  title, 
  slug,
  _createdAt,
  author -> {
    _id, name, image, bio
  }, 
  views,
  description,
  category,
  image,
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

export const IDEAS_BY_AUTHOR_QUERY = defineQuery(`
  *[_type == "idea" && author._ref == $id] | order(_createdAt desc) {
  _id, 
  title, 
  slug,
  _createdAt,
  author -> {
    _id, name, image, bio
  }, 
  views,
  description,
  category,
  image,
}
`);

// coalesce(views,0) is coz If `views` is null, fallback to 0
export const IDEA_VIEWS_QUERY = defineQuery(`
  *[_type == "idea" && _id == $id][0]{
    _id,
    "views": coalesce(views, 0), 
  }
`);

export const PLAYLIST_BY_SLUG_QUERY =
  defineQuery(`*[_type == "playlist" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  select[]->{
    _id,
    _type,
    _createdAt,
    _updatedAt,
    _rev,
    title,
    slug,
    author->{
      _id,
      name,
      username,
      slug,
      image,
      bio
    },
    views,
    description,
    category,
    image,
    pitch
  }
}`);
