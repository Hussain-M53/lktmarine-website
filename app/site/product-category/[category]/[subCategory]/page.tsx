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

const PRODUCTS_PER_PAGE = 9;

async function fetchCategoryAndSubCategory(categorySlug: string, subCategorySlug: string) {
  const query = `{
    "category": *[_type == "productCategory" && slug.current == $categorySlug][0] {
      title,
      "slug": slug.current
    }
    ,
    "subCategory": *[_type == "productCategory" && slug.current == $subCategorySlug][0] {
      _id,
      title,
      description,
      "slug": slug.current
    }
  }`;

  return await sanityClient.fetch(query, { categorySlug, subCategorySlug });
}

async function fetchProductsBySubCategory(subCategoryId: string, page = 1) {
  const start = (page - 1) * PRODUCTS_PER_PAGE;
  const query = `{
    "products": *[_type == "product" && (productCategory._ref == $subCategoryId)] | order(_createdAt desc) [$start...$end]{
      _id,
      title,
      slug,
      description,
      body,
      "images": images[].asset->url
    },
    "total": count(*[_type == "product" && productCategory._ref == $subCategoryId])
  }`;

  return await sanityClient.fetch(query, { subCategoryId, start, end: start + PRODUCTS_PER_PAGE });
}

export async function generateMetadata({ params }: { params: Promise<{ category: string, subCategory: string }> }): Promise<Metadata> {
  return {
    title: `${(await params).category || 'Products'} - LKT Marine`,
    description: (await params).subCategory || 'Product listing',
  };
}

export default async function ProductListingBySubCategory({ params, searchParams  }: { params: Promise<{ category: string, subCategory: string }> , searchParams: Promise<{page:string}> }) {
  const { category: categorySlug, subCategory: subCategorySlug } = await params;
  const { category, subCategory } = await fetchCategoryAndSubCategory(categorySlug, subCategorySlug);
  const page = parseInt((await searchParams)?.page) || 1;

  const { products, total } = await fetchProductsBySubCategory(subCategory._id);
  const totalPages = Math.ceil(total / PRODUCTS_PER_PAGE);

  if (!category || !subCategory ) {
    return (
      <div className="min-h-screen bg-gray-300 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Category Not Found</h1>
          <Link href="/site" className="text-blue-600 hover:text-blue-800">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  if (products?.length <= 0) {
    return (
      <div>
        <div className="relative bg-gray-900 h-[300px]">
          <Image src={category.image} alt={category.title} fill className="object-cover opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-4">{subCategory.title}</h1>
              <p className="text-lg text-gray-200">{subCategory.description}</p>
            </div>
          </div>
        </div>
        <div className="min-h-[calc(100vh-300px)] flex items-center justify-center bg-white">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">Products Not Found</h1>
            <Link href="/site" className="text-blue-600 hover:text-blue-800">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    )
  };

  return (
    <div className="bg-white">
      {/* Header Section */}
      <div className="relative bg-gray-900 h-[300px]">
        <Image
          src={subCategory?.image}
          alt={subCategory?.title}
          fill
          className="opacity-50 object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">{subCategory?.title}</h1>
            <p className="text-lg text-gray-200">{subCategory?.description}</p>
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
            <li>
              <Link href={`/site/product-category/${category?.slug}`} className="hover:text-blue-600 capitalize">
                {category?.title}
              </Link>
            </li>
            <li>&gt;</li>
            <li className="hover:text-blue-600 capitalize">{subCategory?.title}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product: any) => (
            <Link
              key={product._id}
              href={`/site/product/${product.slug}?category=${subCategory?.slug}`}
              className="group"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={product?.images[0]}
                  alt={product.title}
                  width={500}
                  height={500}
                  className="w-96 object-contain object-center group-hover:opacity-75 transition duration-300"
                />
              </div>
              <div className="mt-4 bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-gray-900">{product?.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{product?.description}</p>
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
        <Pagination>
          <PaginationContent>
            {page > 1 && <PaginationItem><PaginationPrevious href={`?page=${page - 1}`} /></PaginationItem>}
            {[...Array(totalPages)].map((_, i) => (
              <PaginationItem key={i}>
                <PaginationLink href={`?page=${i + 1}`} isActive={i + 1 === page}>{i + 1}</PaginationLink>
              </PaginationItem>
            ))}
            {page < totalPages && <PaginationItem><PaginationNext href={`?page=${page + 1}`} /></PaginationItem>}
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
