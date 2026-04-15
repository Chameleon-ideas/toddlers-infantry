export const faqItemType = {
  name: 'faqItem',
  title: 'FAQ Item',
  type: 'document',
  fields: [
    {
      name: 'question',
      title: 'Question',
      type: 'string',
    },
    {
      name: 'answer',
      title: 'Answer',
      type: 'text',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
  orderings: [{ title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
}
