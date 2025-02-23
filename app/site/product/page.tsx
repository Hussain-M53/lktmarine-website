import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { sanityClient } from "@/app/lib/sanityClient"; 
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";

const PRODUCTS_PER_PAGE = 6; // Set the number of products per page

async function fetchAllProducts(page = 1) {
  const start = (page - 1) * PRODUCTS_PER_PAGE;
  const query = `*[_type == "product"] | order(_createdAt desc) [${start}...${start + PRODUCTS_PER_PAGE}] {
    _id,
    title,
    slug,
    description,
    body,
    "images": images[].asset->url
  }`;

  return await sanityClient.fetch(query);
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Products - LKT Marine",
    description: "Product listing",
  };
}

export default async function AllProductListing({ searchParams }: { searchParams: Promise<{ page: string }> }) {
  const page = parseInt((await searchParams)?.page) || 1; // Get current page from search params
  const productsListing = await fetchAllProducts(page); // Fetch products for the current page

  const total = await sanityClient.fetch(`count(*[_type == "product"])`); // Fetch total number of products
  const totalPages = Math.ceil(total / PRODUCTS_PER_PAGE); // Calculate total pages

  if (!productsListing || productsListing.length === 0) {
    return (
      <div className="min-h-screen bg-gray-400 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Products Not Found</h1>
          <Link href="/site" className="text-blue-600 hover:text-blue-800">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Header Section */}
      <div className="relative bg-gray-900 h-[300px]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">All Products</h1>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {productsListing.map((product: any) => (
            <Link
              key={product._id}
              href={`/site/product/${product.slug.current}`}
              className="group"
            >
              <div className="w-full h-[300px] overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={product.images[0]}
                  alt={product.title}
                  width={500}
                  height={500}
                  className="h-full w-full object-cover group-hover:opacity-75 transition duration-300"
                />
              </div>
              <div className="mt-4 bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-gray-900">{product.title}</h3>
                <p className="mt-2 text-sm text-gray-500 line-clamp-2">{product.description}</p>
                <div className="mt-4 flex items-center text-blue-600">
                  <span className="text-sm font-medium">View Details</span>
                  <svg
                    className="ml-2 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
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
              <PaginationPrevious
                href={page > 1 ? `?page=${page - 1}` : undefined}
                className={page === 1 ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>

            <PaginationItem>
              <PaginationLink href="?page=1" isActive={page === 1}>1</PaginationLink>
            </PaginationItem>

            {totalPages > 1 && (
              <PaginationItem>
                <PaginationLink href="?page=2" isActive={page === 2}>2</PaginationLink>
              </PaginationItem>
            )}

            {page > 3 && totalPages > 4 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            {page > 2 && page < totalPages - 1 && (
              <PaginationItem>
                <PaginationLink href={`?page=${page}`} isActive>{page}</PaginationLink>
              </PaginationItem>
            )}

            {page < totalPages - 2 && totalPages > 4 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            {totalPages > 2 && (
              <PaginationItem>
                <PaginationLink href={`?page=${totalPages}`} isActive={page === totalPages}>
                  {totalPages}
                </PaginationLink>
              </PaginationItem>
            )}

            <PaginationItem>
              <PaginationNext
                href={page < totalPages ? `?page=${page + 1}` : undefined}
                className={page === totalPages ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
