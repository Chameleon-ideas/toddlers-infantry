export const servicesPageType = {
  name: 'servicesPage',
  title: 'Services Page',
  type: 'document',
  // Singleton — only one document
  __experimental_actions: ['update', 'publish'],
  fields: [
    // ── PAGE HEADER ───────────────────────────────────────────────────────
    {
      name: 'pageHeading',
      title: 'Page Heading',
      type: 'string',
      description: 'Main h1 at the top of the Services page.',
      initialValue: 'Exceptional Care Services',
    },
    {
      name: 'pageSubtext',
      title: 'Page Subtext',
      type: 'text',
      rows: 2,
      description: 'Short description below the heading.',
      initialValue: 'From newborn support to developmental guidance, we offer specialized services tailored to your family.',
    },

    // ── BOOKING NOTE BOX ──────────────────────────────────────────────────
    {
      name: 'bookingNoteIcon',
      title: 'Booking Note Icon',
      type: 'string',
      description: 'Emoji shown before the booking note heading (e.g. 📅).',
      initialValue: '📅',
    },
    {
      name: 'bookingNoteHeading',
      title: 'Booking Note Heading',
      type: 'string',
      description: 'Heading inside the booking information box.',
      initialValue: 'Booking Information',
    },
    {
      name: 'bookingNoteBody',
      title: 'Booking Note Body',
      type: 'text',
      rows: 3,
      description: 'Full text inside the booking information box.',
      initialValue: 'Please note that a $25 non-refundable booking fee is required at the time of scheduling an appointment. This fee ensures your slot is reserved and is handled through our offline payment process.',
    },

    // ── SERVICE CARD CTA ──────────────────────────────────────────────────
    {
      name: 'serviceCtaLabel',
      title: 'Service Card Button Label',
      type: 'string',
      description: 'The label on the "Learn More" button that appears on every service card.',
      initialValue: 'Learn More',
    },
    {
      name: 'serviceCtaUrl',
      title: 'Service Card Button URL',
      type: 'string',
      description: 'Where the button links to (e.g. /contact).',
      initialValue: '/contact',
    },
  ],
}
