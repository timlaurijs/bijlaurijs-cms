export default {
  name: "afbeeldingen",
  title: "Afbeeldingen",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Post",
      name: "post",
      type: "reference",
      to: { type: "post" },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Main image",
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Seasons",
      name: "seasons",
      type: "string",
      options: {
        list: [
          { title: "Winter", value: "winter" },
          { title: "Spring", value: "spring" },
          { title: "Summer", value: "summer" },
          { title: "Autumn", value: "autumn" },
        ],
      },
    },
    {
      title: "Published at",
      name: "publishedAt",
      type: "datetime",
    },
  ],
  orderings: [
    {
      title: "Post",
      name: "orderAsc",
      by: [{ field: "post.order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "post.title",
      media: "mainImage",
    },
  },
}
