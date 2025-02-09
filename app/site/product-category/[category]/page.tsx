import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { sanityClient } from "@/app/lib/sanityClient"; // Replace with your Sanity client
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

async function fetchCategoryDetails(slug: string) {
  const query = `*[_type == "productCategory" && slug.current == $slug][0] {
    _id,
    title,
    description,
    "image": image.asset->url,
    seo
  }`;
  return await sanityClient.fetch(query, { slug });
}

async function fetchProductsByCategory(categoryId: string) {
  const query = `*[_type == "product" && references($categoryId)] {
    _id,
    name,
    shortDescription,
    "images": images[].asset->url
  }`;
  return await sanityClient.fetch(query, { categoryId });
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const slug = (await params).category;
  const category = await fetchCategoryDetails(slug);

  return {
    title: category?.seo?.title || `${category?.title || "Category"} - LKT Marine`,
    description: category?.seo?.description || category?.description || "Product category listing",
    openGraph: {
      title: category?.seo?.title || category?.title,
      description: category?.seo?.description || category?.description,
      images: category?.seo?.image ? [{ url: category.seo.image.asset._ref }] : undefined,
    },
  };
}

export default async function ProductListingByCategory({ params }: { params: Promise<{ category: string }> }) {
  const slug = (await params).category; 
  const category = await fetchCategoryDetails(slug);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Category Not Found</h1>
          <Link href="/site" className="text-blue-600 hover:text-blue-800">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const products = await fetchProductsByCategory(category._id);

  return (
    <div className="bg-white">
      <div className="relative bg-gray-900 h-[300px]">
        <Image src={category.image} alt={category.title} fill className="object-cover opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">{category.title}</h1>
            <p className="text-lg text-gray-200">{category.description}</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <nav className="my-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li>
              <Link href="/site/product" className="hover:text-blue-600">
                All Products
              </Link>
            </li>
            <li>&gt;</li>
            <li className="hover:text-blue-600 capitalize">{category.title}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product: any) => (
            <Link
              key={product._id}
              href={`/site/product/${product._id}?category=${slug}`}
              className="group"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="h-full w-full object-cover object-center group-hover:opacity-75 transition duration-300"
                />
              </div>
              <div className="mt-4 bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{product.shortDescription}</p>
                <div className="mt-4 flex items-center text-blue-600">
                  <span className="text-sm font-medium">View Details</span>
                  <svg
                    className="ml-2 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
