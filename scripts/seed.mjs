/**
 * seed.mjs — Populates Sanity with all fallback content from the codebase.
 * Run with:  node scripts/seed.mjs
 *
 * It will:
 *   1. Delete every existing document in all relevant types
 *   2. Create fresh documents from the hardcoded fallback values
 */

import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'z81qmmi3',
  dataset: 'production',
  apiVersion: '2025-01-28',
  // ── YOU MUST SET THIS ────────────────────────────────────────────────────────
  // Generate a write token at: https://sanity.io/manage → project → API → Tokens
  // Choose "Editor" permissions (read + write, no delete for datasets)
  token: process.env.SANITY_TOKEN,
  useCdn: false,
});

// ── Helpers ──────────────────────────────────────────────────────────────────

async function deleteAll(type) {
  const docs = await client.fetch(`*[_type == $type]{ _id }`, { type });
  if (!docs.length) return;
  const tx = client.transaction();
  docs.forEach((d) => tx.delete(d._id));
  await tx.commit();
  console.log(`  🗑  Deleted ${docs.length} existing "${type}" document(s)`);
}

async function createDoc(doc) {
  const created = await client.create(doc);
  console.log(`  ✅  Created "${doc._type}" → ${created._id}`);
  return created;
}

// Singletons need createOrReplace by a fixed ID so they stay unique
async function upsertSingleton(doc) {
  const existing = await client.fetch(`*[_type == $t][0]{ _id }`, { t: doc._type });
  const id = existing?._id ?? doc._type; // reuse existing ID or use type name as ID
  const saved = await client.createOrReplace({ ...doc, _id: id });
  console.log(`  ✅  Upserted singleton "${doc._type}" → ${saved._id}`);
}

// ── DATA ────────────────────────────────────────────────────────────────────

const siteSettings = {
  _type: 'siteSettings',
  footerTagline: "Premium newborn and baby care services dedicated to nurturing your child's growth and happiness.",
  footerCopyrightName: "Toddler's Infantry",
  contactEmail: 'care@toddlersinfantry.com',
  contactPhone: '(555) 123-4567',
  contactLocation: 'Alberta, Canada',
  footerLinks: [
    { _key: 'link-home',     label: 'Home',     url: '/' },
    { _key: 'link-about',    label: 'About Us', url: '/about' },
    { _key: 'link-services', label: 'Services', url: '/services' },
    { _key: 'link-contact',  label: 'Contact',  url: '/contact' },
  ],
};

const homePage = {
  _type: 'homePage',
  // Hero
  heroHeading: 'Nurturing Your | Little Wonders',
  heroSubtext: "Professional, high-end newborn and infant care tailored to your family's needs. Trustworthy support for your baby's first steps.",
  heroCtaPrimary:    'Book an Appointment',
  heroCtaPrimaryUrl: '/contact',
  heroCtaSecondary:    'Explore Services',
  heroCtaSecondaryUrl: '/services',
  // Services section
  servicesSectionTitle:   'Our Excellence',
  servicesSectionSubtext: 'We provide specialized care that goes beyond just watching your baby.',
  // Process section
  processSectionTitle:   'How It Works',
  processSectionSubtext: 'A simple, stress-free process to get the care your family deserves.',
  // Inline process steps
  processSteps: [
    {
      _key: 'step-01',
      stepNumber: '01',
      title: 'Initial Consultation',
      description: "We speak with you to understand your baby's current routine and your specific needs.",
    },
    {
      _key: 'step-02',
      stepNumber: '02',
      title: 'Custom Care Plan',
      description: 'Kareen designs a personalized care or sleep training strategy for your family.',
    },
    {
      _key: 'step-03',
      stepNumber: '03',
      title: 'Dedicated Support',
      description: 'Our expert team begins the care journey, providing continuous support and guidance.',
    },
  ],
  // Testimonials section
  testimonialsSectionTitle:   'From Our Families',
  testimonialsSectionSubtext: 'Join the many Alberta families who have found peace of mind with us.',
  // FAQ section
  faqSectionTitle:   'Common Questions',
  faqSectionSubtext: 'Everything you need to know about our nanny and newborn services.',
  // CTA
  ctaHeading:     'Ready to give your baby the best care?',
  ctaSubtext:     "Schedule a consultation with Kareen today and experience the Toddler's Infantry difference.",
  ctaButtonLabel: 'Start Your Journey',
  ctaButtonUrl:   '/contact',
};

const servicesPage = {
  _type: 'servicesPage',
  pageHeading: 'Exceptional Care Services',
  pageSubtext:  'From newborn support to developmental guidance, we offer specialized services tailored to your family.',
  bookingNoteIcon:    '📅',
  bookingNoteHeading: 'Booking Information',
  bookingNoteBody:    'Please note that a $25 non-refundable booking fee is required at the time of scheduling an appointment. This fee ensures your slot is reserved and is handled through our offline payment process.',
  serviceCtaLabel: 'Learn More',
  serviceCtaUrl:   '/contact',
};

const contactPage = {
  _type: 'contactPage',
  heroHeading: 'Get in Touch',
  heroSubtext:  "Ready to start your journey with Toddler's Infantry? Fill out the form below to request an appointment or inquiry.",
  detailsHeading: 'Contact Details',
  detailsSubtext:  'If you have urgent questions, feel free to reach out directly via email or phone.',
  bookingNoticeHeading: 'Note on Payments',
  bookingNoticeBody:    'Appointments require a $25 booking fee. Details for offline payment will be sent upon form submission by Kareen.',
};

const aboutPage = {
  _type: 'aboutPage',
  // Page Header
  heroHeading: 'Our Story & Approach',
  heroSubtext:  'Dedicated to providing the most nurturing and professional newborn care in Alberta.',
  // About section
  aboutHeading:    'Nurturing the Future, One Small Step at a Time',
  aboutParagraph1: "At Toddler's Infantry, we believe that the first months and years of a child's life are the most critical. Founded by Kareen, our agency was born out of a passion for supporting new families through the beautiful yet challenging transition of early parenthood.",
  aboutParagraph2: 'Our approach is centered on trust, professionalism, and personalized care. We don\'t just provide "babysitting"; we provide specialized newborn care that focuses on developmental milestones, sleep health, and physical support for both the baby and the parents.',
  // Approach items
  approachItems: [
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
  // Bio / Team section
  teamSectionHeading: 'Meet Kareen',
  teamSectionSubtext: "The vision and heart behind Toddler's Infantry.",
  bioText:     'Kareen has over 15 years of experience in newborn and baby care. Her journey started as a neonatal nurse and evolved into a specialized consultancy for sleep training and postpartum support. She leads a team of dedicated professionals who share her mission: to ensure every family feels confident and every baby feels loved.',
  bioCtaLabel: 'Book a consultation with Kareen',
  bioCtaUrl:   '/contact',
};

const services = [
  {
    _type: 'service',
    title: 'Newborn Care',
    icon: '👶',
    description: 'Expert night and day care for your little ones.',
    price: 'From $35/hr',
    category: 'Essential Care',
  },
  {
    _type: 'service',
    title: 'Sleep Training',
    icon: '🌙',
    description: 'Gentle methods to help your baby sleep through the night.',
    price: '$500 Flat Fee',
    category: 'Specialized Support',
  },
  {
    _type: 'service',
    title: 'Postpartum Support',
    icon: '🫂',
    description: 'Emotional and physical support for new mothers.',
    price: 'From $45/hr',
    category: 'Specialized Support',
  },
  {
    _type: 'service',
    title: 'Daytime Nanny Services',
    icon: '🌞',
    description: 'Engaging and educational daytime care for infants and toddlers in the comfort of your home.',
    price: 'From $30/hr',
    category: 'Essential Care',
  },
  {
    _type: 'service',
    title: 'Travel Nanny',
    icon: '✈️',
    description: 'Expert care for your vacations, primarily in winter (though summer is also possible).',
    price: 'Custom Quote',
    category: 'Specialized Support',
  },
];

const testimonials = [
  {
    _type: 'testimonial',
    quote: 'Kareen was a lifesaver for our firstborn. Her gentle approach to sleep training worked wonders in just a week!',
    author: 'Sarah & James',
    location: 'Calgary',
  },
  {
    _type: 'testimonial',
    quote: 'Highly professional and incredibly nurturing. We felt 100% confident leaving our newborn in their hands.',
    author: 'Michael T.',
    location: 'Edmonton',
  },
];

const faqItems = [
  {
    _type: 'faqItem',
    question: 'Is Kareen involved in every case?',
    answer: 'Yes, Kareen personally oversees every care plan and conducts initial consultations to ensure the highest standards.',
  },
  {
    _type: 'faqItem',
    question: 'Do you provide overnight support?',
    answer: 'Absolutely. We offer specialized overnight newborn care to help parents get the rest they need while ensuring the baby is safe and fed.',
  },
  {
    _type: 'faqItem',
    question: 'How do payments work?',
    answer: 'We handle all payments offline. A $25 scheduling fee is required to book, with the remainder settled via direct invoice.',
  },
];

const processSteps = [
  {
    _type: 'processStep',
    stepNumber: '01',
    title: 'Initial Consultation',
    description: "We speak with you to understand your baby's current routine and your specific needs.",
  },
  {
    _type: 'processStep',
    stepNumber: '02',
    title: 'Custom Care Plan',
    description: 'Kareen designs a personalized care or sleep training strategy for your family.',
  },
  {
    _type: 'processStep',
    stepNumber: '03',
    title: 'Dedicated Support',
    description: 'Our expert team begins the care journey, providing continuous support and guidance.',
  },
];

// ── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log('\n🚀  Starting Sanity seed...\n');

  // ── Singletons ──
  console.log('📄 Site Settings');
  await upsertSingleton(siteSettings);

  console.log('\n📄 Home Page');
  await upsertSingleton(homePage);

  console.log('\n📄 Services Page');
  await upsertSingleton(servicesPage);

  console.log('\n📄 Contact Page');
  await upsertSingleton(contactPage);

  console.log('\n📄 About Page');
  await upsertSingleton(aboutPage);

  // ── Repeatable documents ──
  console.log('\n📋 Services');
  await deleteAll('service');
  for (const s of services) await createDoc(s);

  console.log('\n📋 Testimonials');
  await deleteAll('testimonial');
  for (const t of testimonials) await createDoc(t);

  console.log('\n📋 FAQ Items');
  await deleteAll('faqItem');
  for (const f of faqItems) await createDoc(f);

  console.log('\n📋 Process Steps (standalone)');
  await deleteAll('processStep');
  for (const p of processSteps) await createDoc(p);

  console.log('\n✨  Seed complete! All content is now in Sanity.\n');
  console.log('ℹ  Note: Documents created via the API are auto-published (no draft state).');
}

main().catch((err) => {
  console.error('\n❌  Seed failed:', err.message);
  process.exit(1);
});
