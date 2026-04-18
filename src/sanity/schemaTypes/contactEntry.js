export const contactEntryType = {
  name: 'contactEntry',
  title: 'Contact Form Entry',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Full Name',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'service',
      title: 'Service Requested',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'message',
      title: 'Message',
      type: 'text',
      readOnly: true,
    },
    {
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
      initialValue: (new Date()).toISOString(),
      readOnly: true,
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'In Progress', value: 'progress' },
          { title: 'Completed', value: 'completed' },
        ],
      },
      initialValue: 'new',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'service',
      date: 'submittedAt',
    },
    prepare({ title, subtitle, date }) {
      return {
        title: title || 'Anonymous',
        subtitle: `${subtitle || 'Inquiry'} - ${date ? new Date(date).toLocaleDateString() : ''}`,
      };
    },
  },
}
