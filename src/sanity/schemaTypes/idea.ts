import { defineField, defineType } from "sanity";

export const idea = defineType({
  name: "idea",
  title: "Idea",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    //automatically generate url slug according to the title
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "author",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "views",
      type: "number",
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "category",
      type: "string",
      validation: (Rule) =>
        Rule.min(1).max(30).required().error("Please enter a category"),
    }),
    defineField({
      name: "image",
      type: "image",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "pitch",
      type: "markdown",
    }),
  ],
});
