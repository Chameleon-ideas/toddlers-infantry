export const serviceType = {
  name: 'service',
  title: 'Service (home)',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'price',
      title: 'Price Info',
      type: 'string',
      description: 'e.g. "From $35/hr" or "$500 Flat Fee"',
    },
    {
      name: 'icon',
      title: 'Icon (Emoji)',
      type: 'string',
      description: 'Optional emoji shown on the homepage services preview card.',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Group name, e.g. "Essential Care" or "Specialized Support". Services are grouped by this value on the Services page.',
      options: {
        list: [
          { title: 'Essential Care', value: 'Essential Care' },
          { title: 'Specialized Support', value: 'Specialized Support' },
        ],
      },
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first within their category. Leave blank to sort alphabetically.',
      initialValue: 0,
    },
  ],
  orderings: [
    {
      title: 'Category & Order',
      name: 'categoryOrder',
      by: [
        { field: 'category', direction: 'asc' },
        { field: 'order', direction: 'asc' },
        { field: 'title', direction: 'asc' },
      ],
    },
  ],
};

