import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId:'32wddwdo',
  dataset:  'production', 
  apiVersion: "2023-05-03", 
  useCdn: true,
});
