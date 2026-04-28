export const contactPageType = {
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  // Singleton — only one document
  __experimental_actions: ['update', 'publish'],
  fields: [
    // ── HERO ─────────────────────────────────────────────────────────────
    {
      name: 'heroHeading',
      title: 'Hero Heading',
      type: 'string',
      description: 'Main h1 at the top of the Contact page.',
      initialValue: 'Get in Touch',
    },
    {
      name: 'heroSubtext',
      title: 'Hero Subtext',
      type: 'text',
      rows: 2,
      description: 'Short description below the hero heading.',
      initialValue: "Ready to start your journey with Toddler's Infantry? Fill out the form below to request an appointment or inquiry.",
    },

    // ── CONTACT DETAILS PANEL ─────────────────────────────────────────────
    {
      name: 'detailsHeading',
      title: 'Contact Details Heading',
      type: 'string',
      description: 'Heading above the email/phone/location items.',
      initialValue: 'Contact Details',
    },
    {
      name: 'detailsSubtext',
      title: 'Contact Details Subtext',
      type: 'text',
      rows: 2,
      description: 'Short paragraph below the heading.',
      initialValue: 'If you have urgent questions, feel free to reach out directly via email or phone.',
    },

    // ── BOOKING NOTICE ────────────────────────────────────────────────────
    {
      name: 'bookingNoticeHeading',
      title: 'Booking Notice Heading',
      type: 'string',
      description: 'Heading inside the orange booking notice box.',
      initialValue: 'Note on Payments',
    },
    {
      name: 'bookingNoticeBody',
      title: 'Booking Notice Body',
      type: 'text',
      rows: 3,
      description: 'Full text of the booking notice. Contact Info → Booking Fee Note (in Site Settings) is also available as a source.',
      initialValue: 'Appointments require a $25 booking fee. Details for offline payment will be sent upon form submission by Kareen.',
    },
  ],
}
