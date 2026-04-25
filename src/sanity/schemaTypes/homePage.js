export const homePageType = {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  // Singleton: only one document of this type
  __experimental_actions: ['update', 'publish'],
  fields: [
    // ── HERO ─────────────────────────────────────────────────────────────
    {
      name: 'heroHeading',
      title: 'Hero Heading',
      type: 'string',
      description: 'Main headline. Use the pipe character | to split into two lines, e.g. "Nurturing Your | Little Wonders"',
      initialValue: 'Nurturing Your | Little Wonders',
    },
    {
      name: 'heroSubtext',
      title: 'Hero Subtext',
      type: 'text',
      rows: 2,
      description: 'Short paragraph below the heading.',
      initialValue:
        "Professional, high-end newborn and infant care tailored to your family's needs. Trustworthy support for your baby's first steps.",
    },
    {
      name: 'heroCtaPrimary',
      title: 'Hero Primary Button Label',
      type: 'string',
      initialValue: 'Book an Appointment',
    },
    {
      name: 'heroCtaPrimaryUrl',
      title: 'Hero Primary Button URL',
      type: 'string',
      initialValue: '/contact',
    },
    {
      name: 'heroCtaSecondary',
      title: 'Hero Secondary Button Label',
      type: 'string',
      initialValue: 'Explore Services',
    },
    {
      name: 'heroCtaSecondaryUrl',
      title: 'Hero Secondary Button URL',
      type: 'string',
      initialValue: '/services',
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      description: 'The image displayed in the hero section blob on the right. Recommended: square photo, min 800×800px.',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Describe the image for screen readers (e.g. "Kareen caring for a newborn")',
          initialValue: 'Baby Care',
        },
      ],
    },

    // ── SERVICES SECTION ─────────────────────────────────────────────────
    {
      name: 'servicesSectionTitle',
      title: 'Services Section Title',
      type: 'string',
      initialValue: 'Our Excellence',
    },
    {
      name: 'servicesSectionSubtext',
      title: 'Services Section Subtext',
      type: 'text',
      rows: 2,
      initialValue: 'We provide specialized care that goes beyond just watching your baby.',
    },

    // ── PROCESS SECTION ──────────────────────────────────────────────────
    {
      name: 'processSectionTitle',
      title: 'Process Section Title',
      type: 'string',
      initialValue: 'How It Works',
    },
    {
      name: 'processSectionSubtext',
      title: 'Process Section Subtext',
      type: 'text',
      rows: 2,
      initialValue: 'A simple, stress-free process to get the care your family deserves.',
    },
    {
      name: 'processSteps',
      title: 'Process Steps',
      type: 'array',
      description: 'Add, remove, and reorder the "How It Works" steps. Drag to reorder.',
      of: [
        {
          type: 'object',
          name: 'step',
          title: 'Step',
          fields: [
            {
              name: 'stepNumber',
              title: 'Step Number',
              type: 'string',
              description: 'Display label, e.g. "01", "02"',
              initialValue: '01',
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
              rows: 2,
            },
          ],
          preview: {
            select: { title: 'title', subtitle: 'stepNumber' },
          },
        },
      ],
    },

    // ── TESTIMONIALS SECTION ─────────────────────────────────────────────
    {
      name: 'testimonialsSectionTitle',
      title: 'Testimonials Section Title',
      type: 'string',
      initialValue: 'From Our Families',
    },
    {
      name: 'testimonialsSectionSubtext',
      title: 'Testimonials Section Subtext',
      type: 'text',
      rows: 2,
      initialValue: 'Join the many Alberta families who have found peace of mind with us.',
    },

    // ── FAQ SECTION ──────────────────────────────────────────────────────
    {
      name: 'faqSectionTitle',
      title: 'FAQ Section Title',
      type: 'string',
      initialValue: 'Common Questions',
    },
    {
      name: 'faqSectionSubtext',
      title: 'FAQ Section Subtext',
      type: 'text',
      rows: 2,
      initialValue: 'Everything you need to know about our nanny and newborn services.',
    },

    // ── CTA SECTION ──────────────────────────────────────────────────────
    {
      name: 'ctaHeading',
      title: 'CTA Heading',
      type: 'string',
      initialValue: 'Ready to give your baby the best care?',
    },
    {
      name: 'ctaSubtext',
      title: 'CTA Subtext',
      type: 'text',
      rows: 2,
      initialValue:
        "Schedule a consultation with Kareen today and experience the Toddler's Infantry difference.",
    },
    {
      name: 'ctaButtonLabel',
      title: 'CTA Button Label',
      type: 'string',
      initialValue: 'Start Your Journey',
    },
    {
      name: 'ctaButtonUrl',
      title: 'CTA Button URL',
      type: 'string',
      initialValue: '/contact',
    },
  ],
}
