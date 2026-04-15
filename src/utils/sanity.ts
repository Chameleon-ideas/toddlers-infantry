import { sanityClient } from "sanity:client";

export async function getServices() {
  const query = `*[_type == "service"] | order(title asc)`;
  const services = await sanityClient.fetch(query);
  return services;
}

export async function getServiceBySlug(slug: string) {
  const query = `*[_type == "service" && slug.current == $slug][0]`;
  const service = await sanityClient.fetch(query, { slug });
  return service;
}
