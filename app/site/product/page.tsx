import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { sanityClient } from "@/app/lib/sanityClient"; 
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

async function fetchAllProducts() {
  const query = `*[_type == "product"] {
    _id,
    title,
    descrition,
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

export default async function AllProductListing() {
  const productsListing = await fetchAllProducts();

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
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
          {productsListing.map((product: any) => (
            <Link
              key={product._id}
              href={`/site/product/${product.slug}`}
              className="group"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={product.images[0]}
                  alt={product.title}
                  width={500}
                  height={500}
                  className="h-full w-full object-cover object-center group-hover:opacity-75 transition duration-300"
                />
              </div>
              <div className="mt-4 bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-gray-900">{product.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{product.description}</p>
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

        {/* Pagination Placeholder */}
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
