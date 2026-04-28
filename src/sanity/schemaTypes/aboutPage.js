export const aboutPageType = {
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  // Singleton — only one document
  __experimental_actions: ['update', 'publish'],
  fields: [
    // ── HERO / PAGE HEADER ────────────────────────────────────────────────
    {
      name: 'heroHeading',
      title: 'Page Heading',
      type: 'string',
      description: 'Main h1 at the top of the About page.',
      initialValue: 'Our Story & Approach',
    },
    {
      name: 'heroSubtext',
      title: 'Page Subtext',
      type: 'text',
      rows: 2,
      description: 'Short description below the page heading.',
      initialValue: 'Dedicated to providing the most nurturing and professional newborn care in Alberta.',
    },

    // ── ABOUT CONTENT SECTION ─────────────────────────────────────────────
    {
      name: 'aboutHeading',
      title: 'About Section Heading',
      type: 'string',
      description: 'h2 heading inside the about content section.',
      initialValue: 'Nurturing the Future, One Small Step at a Time',
    },
    {
      name: 'aboutParagraph1',
      title: 'About Paragraph 1',
      type: 'text',
      rows: 4,
      description: 'First paragraph of the about section.',
      initialValue: "At Toddler's Infantry, we believe that the first months and years of a child's life are the most critical. Founded by Kareen, our agency was born out of a passion for supporting new families through the beautiful yet challenging transition of early parenthood.",
    },
    {
      name: 'aboutParagraph2',
      title: 'About Paragraph 2',
      type: 'text',
      rows: 4,
      description: 'Second paragraph of the about section.',
      initialValue: 'Our approach is centered on trust, professionalism, and personalized care. We don\'t just provide "babysitting"; we provide specialized newborn care that focuses on developmental milestones, sleep health, and physical support for both the baby and the parents.',
    },

    // ── APPROACH ITEMS ────────────────────────────────────────────────────
    {
      name: 'approachItems',
      title: 'Approach Items',
      type: 'array',
      description: 'The key values/approach points shown in the about section.',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'icon', title: 'Icon (emoji)', type: 'string' },
            { name: 'heading', title: 'Heading', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 2 },
          ],
          preview: {
            select: { title: 'heading', subtitle: 'icon' },
            prepare({ title, subtitle }) {
              return { title: `${subtitle ?? ''} ${title ?? ''}`.trim() };
            },
          },
        },
      ],
      initialValue: [
        {
          _key: 'approach-trust',
          icon: '✨',
          heading: 'Trust & Safety',
          description: 'All our caregivers are highly experienced, certified, and background-checked.',
        },
        {
          _key: 'approach-holistic',
          icon: '🌿',
          heading: 'Holistic Well-being',
          description: 'Supporting emotional health and physical development through gentle techniques.',
        },
      ],
    },

    // ── ABOUT IMAGE ───────────────────────────────────────────────────────
    {
      name: 'aboutImage',
      title: 'About Section Image',
      type: 'image',
      description: 'Image shown beside the about text. Leave blank to use the logo as fallback.',
      options: { hotspot: true },
      fields: [
        { name: 'alt', title: 'Alt Text', type: 'string' },
      ],
    },

    // ── TEAM / BIO SECTION ────────────────────────────────────────────────
    {
      name: 'teamSectionHeading',
      title: 'Team Section Heading',
      type: 'string',
      description: 'h2 heading of the Meet Kareen section.',
      initialValue: 'Meet Kareen',
    },
    {
      name: 'teamSectionSubtext',
      title: 'Team Section Subtext',
      type: 'string',
      description: 'Short line below the team heading.',
      initialValue: "The vision and heart behind Toddler's Infantry.",
    },
    {
      name: 'bioText',
      title: 'Bio Text',
      type: 'text',
      rows: 5,
      description: "Kareen's full biography paragraph.",
      initialValue: 'Kareen has over 15 years of experience in newborn and baby care. Her journey started as a neonatal nurse and evolved into a specialized consultancy for sleep training and postpartum support. She leads a team of dedicated professionals who share her mission: to ensure every family feels confident and every baby feels loved.',
    },
    {
      name: 'bioCtaLabel',
      title: 'Bio CTA Button Label',
      type: 'string',
      description: 'Text on the consultation button.',
      initialValue: 'Book a consultation with Kareen',
    },
    {
      name: 'bioCtaUrl',
      title: 'Bio CTA Button URL',
      type: 'string',
      description: 'URL the bio button links to.',
      initialValue: '/contact',
    },
  ],
}
