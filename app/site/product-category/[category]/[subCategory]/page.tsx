import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { sanityClient } from "@/app/lib/sanityClient"; // Replace with your API client
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Fetch categories dynamically from Sanity
async function fetchCategoryAndSubCategory(categorySlug: string, subCategorySlug: string) {
  const query = `{
    "category": *[_type == "productCategory" && slug.current == $categorySlug][0] {
      _id,
      name,
      description,
      "slug": slug.current,
      "image": image.asset->url,
      subCategories[]-> {
        _id,
        name,
        description,
        "slug": slug.current
      }
    },
    "subCategory": *[_type == "productSubCategory" && slug.current == $subCategorySlug][0] {
      _id,
      name,
      description,
      "slug": slug.current
    }
  }`;

  return await sanityClient.fetch(query, { categorySlug, subCategorySlug });
}

// Fetch products dynamically from Sanity
async function fetchProductsBySubCategory(subCategoryId: string) {
  const query = `*[_type == "product" && references($subCategoryId)] {
    _id,
    name,
    shortDescription,
    "images": images[].asset->url
  }`;

  return await sanityClient.fetch(query, { subCategoryId });
}

export async function generateMetadata({ params }: { params: { category: string; subCategory: string } }): Promise<Metadata> {
  const { category, subCategory } = params;
  return {
    title: `${category || "Products"} - LKT Marine`,
    description: subCategory || "Product listing",
  };
}

export default async function ProductListingBySubCategory({ params }: { params: { category: string; subCategory: string } }) {
  const { category: categorySlug, subCategory: subCategorySlug } = params;

  const { category, subCategory } = await fetchCategoryAndSubCategory(categorySlug, subCategorySlug);

  if (!category || !subCategory) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Products Not Found</h1>
          <Link href="/site" className="text-blue-600 hover:text-blue-800">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const products = await fetchProductsBySubCategory(subCategory._id);

  return (
    <div className="bg-white">
      {/* Header Section */}
      <div className="relative bg-gray-900 h-[300px]">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">{subCategory.name}</h1>
            <p className="text-lg text-gray-200">{subCategory.description}</p>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <nav className="my-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li>
              <Link href="/site/product" className="hover:text-blue-600">
                All Products
              </Link>
            </li>
            <li>&gt;</li>
            <li>
              <Link href={`/site/product/${category.slug}`} className="hover:text-blue-600 capitalize">
                {category.name?.replace("-", " ")}
              </Link>
            </li>
            <li>&gt;</li>
            <li className="hover:text-blue-600 capitalize">{subCategory.name?.replace("-", " ")}</li>
          </ol>
        </nav>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product: any) => (
            <Link
              key={product._id}
              href={`/site/product/${product._id}?category=${subCategory._id}`}
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
