import { sanityClient } from "sanity:client";

export async function getServices() {
  return sanityClient.fetch(`*[_type == "service"] | order(category asc, title asc)`);
}

export async function getServicesByCategory() {
  const services = await getServices();
  const grouped: Record<string, typeof services> = {};
  for (const s of services) {
    const cat = s.category || 'Other';
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(s);
  }
  return Object.entries(grouped).map(([category, items]) => ({ category, items }));
}

export async function getTestimonials() {
  return sanityClient.fetch(`*[_type == "testimonial"] | order(order asc)`);
}

export async function getFaqItems() {
  return sanityClient.fetch(`*[_type == "faqItem"] | order(order asc)`);
}

export async function getProcessSteps() {
  return sanityClient.fetch(`*[_type == "processStep"] | order(order asc)`);
}

export async function getSiteSettings() {
  return sanityClient.fetch(`*[_type == "siteSettings"][0]`);
}
