export const siteSettingsType = {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      description: 'Main headline on the homepage hero section',
    },
    {
      name: 'heroSubtext',
      title: 'Hero Subtext',
      type: 'text',
      description: 'Paragraph under the hero headline',
    },
    {
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
    },
    {
      name: 'contactPhone',
      title: 'Contact Phone',
      type: 'string',
    },
    {
      name: 'contactLocation',
      title: 'Contact Location',
      type: 'string',
    },
    {
      name: 'bookingFeeNote',
      title: 'Booking Fee Note',
      type: 'text',
      description: 'Note about the $25 booking fee shown on Contact and Services pages',
    },
  ],
}
