export const testimonialType = {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
    },
    {
      name: 'author',
      title: 'Author Name',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location (e.g. Calgary)',
      type: 'string',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
  orderings: [{ title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
}
