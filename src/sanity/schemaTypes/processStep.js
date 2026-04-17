export const processStepType = {
  name: 'processStep',
  title: 'Process Step (home)',
  type: 'document',
  fields: [
    {
      name: 'stepNumber',
      title: 'Step Number (e.g. 01)',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
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
