import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// ── Hardcoded config for reliability ──────────────────────────────────────────
const clientConfig = {
  projectId: 'z81qmmi3',
  dataset: 'production',
  apiVersion: '2025-01-28',
  token: 'skaKz4z3SL5MgCBk2oT7dGNxaQ3quvyuHnFCf0gKcyP0ujPDAoeRKXYqSMLGZ8RdvHJcNhaDLFfGq0kIQ14bVgJGWUrfyjrFt9m3P2ox6b72n9ptA8RpcvVtLjQh5OHtpWeDrNaUXILvoPlKDPLONHh7d4yxUBqw7CVa4JLqf00QdqLSYXUT',
  useCdn: false, // Set to false to see updates immediately
};

export const sanityClient = createClient(clientConfig);

// ── Image URL builder ─────────────────────────────────────────────────────────
const builder = imageUrlBuilder(sanityClient);

/**
 * Convert a Sanity image reference object into an optimised CDN URL.
 */
export function urlFor(source: any) {
  return builder.image(source);
}

// ── Fetchers ──────────────────────────────────────────────────────────────────

export async function getServices() {
  return sanityClient.fetch(`*[_type == "service"] | order(category asc, order asc, title asc)`);
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

export async function getHomePage() {
  return sanityClient.fetch(`*[_type == "homePage"][0]`);
}

export async function getServicesPage() {
  return sanityClient.fetch(`*[_type == "servicesPage"][0]`);
}

export async function getContactPage() {
  return sanityClient.fetch(`*[_type == "contactPage"][0]`);
}

export async function getAboutPage() {
  return sanityClient.fetch(`*[_type == "aboutPage"][0]`);
}

export async function getContactEntries() {
  return sanityClient.fetch(`*[_type == "contactEntry"] | order(submittedAt desc)`);
}
