export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      required: true,
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      required: true,
      validation: (Rule) => Rule.unique(),
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
      required: true,
    },
  ],
  orderings: [
    {
      title: "Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
}
