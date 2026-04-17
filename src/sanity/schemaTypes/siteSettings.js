export const siteSettingsType = {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    // ── BRANDING ─────────────────────────────────────────────────────────
    {
      name: 'logo',
      title: 'Site Logo',
      type: 'image',
      description: 'Upload your logo here. It will appear in the navigation bar and footer across all pages. Recommended: PNG with transparent background, min 300px wide.',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          initialValue: "Toddler's Infantry Logo",
        },
      ],
    },

    // ── FOOTER ────────────────────────────────────────────────────────────
    {
      name: 'footerTagline',
      title: 'Footer Tagline',
      type: 'text',
      rows: 2,
      description: 'Short brand description shown below the logo in the footer.',
      initialValue: "Premium newborn and baby care services dedicated to nurturing your child's growth and happiness.",
    },
    {
      name: 'footerLinks',
      title: 'Footer Quick Links',
      type: 'array',
      description: 'Navigation links listed in the "Quick Links" column.',
      of: [
        {
          type: 'object',
          name: 'link',
          title: 'Link',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
            },
            {
              name: 'url',
              title: 'URL',
              type: 'string',
              description: 'e.g. /about or /services',
            },
          ],
          preview: {
            select: { title: 'label', subtitle: 'url' },
          },
        },
      ],
    },
    {
      name: 'footerCopyrightName',
      title: 'Copyright Company Name',
      type: 'string',
      description: 'The name that appears in "© 2025 [Name]. All rights reserved."',
      initialValue: "Toddler's Infantry",
    },

    // ── CONTACT INFO ──────────────────────────────────────────────────────
    {
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      initialValue: 'care@toddlersinfantry.com',
    },
    {
      name: 'contactPhone',
      title: 'Contact Phone',
      type: 'string',
      initialValue: '(555) 123-4567',
    },
    {
      name: 'contactLocation',
      title: 'Contact Location',
      type: 'string',
      initialValue: 'Alberta, Canada',
    },
    {
      name: 'bookingFeeNote',
      title: 'Booking Fee Note',
      type: 'text',
      description: 'Note about the $25 booking fee shown on Contact and Services pages',
    },

    // ── LEGACY ────────────────────────────────────────────────────────────
    {
      name: 'heroHeadline',
      title: 'Hero Headline (Legacy)',
      type: 'string',
      description: 'Superseded by Home Page → Hero Heading. Kept for reference.',
    },
    {
      name: 'heroSubtext',
      title: 'Hero Subtext (Legacy)',
      type: 'text',
      description: 'Superseded by Home Page → Hero Subtext. Kept for reference.',
    },
  ],
}

