import React from "react";
import { ProductCategory } from "@/app/_components/category";
import { sanityClient } from "@/app/lib/sanityClient";

async function fetchCategories() {
  const query = `*[_type == "productCategory" && !defined(parentCategory)] {
    title,
    slug,
    description,
    "image": image.asset->url
  }`;

  const categories = await sanityClient.fetch(query);
  return categories;
}

export default async function Category() {
  const categories = await fetchCategories();

  return <ProductCategory categories={categories} />;
}
