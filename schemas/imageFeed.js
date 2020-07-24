export default {
  name: "afbeeldingen",
  title: "Afbeeldingen",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    // {
    //   name: "slug",
    //   title: "Slug",
    //   type: "slug",
    //   options: {
    //     source: "title",
    //     maxLength: 96,
    //   },
    // },
    {
      name: "post",
      title: "Post",
      type: "reference",
      to: { type: "post" },
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "seasons",
      title: "Seasons",
      type: "array",
      of: [{ type: "reference", to: { type: "season" } }],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
  ],

  // preview: {
  //   select: {
  //     title: "title",
  //     media: "mainImage",
  //     seasons: "seasons",
  //   },
  //   prepare(selection) {
  //     const { author } = selection
  //     return Object.assign({}, selection, {
  //       subtitle: author && `by ${author}`,
  //     })
  //   },
  // },
}
