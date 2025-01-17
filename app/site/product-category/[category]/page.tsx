import Image from "next/image"
import Link from "next/link"
import { categories } from "@/data/categories"
import { Metadata } from 'next'
import { getProductsByCategory } from "@/data/products"

// type PageProps = {
//     category: string;
// };

export async function generateMetadata(params : any): Promise<Metadata> {
  const category = categories[params.category as keyof typeof categories]
  return {
    title: `${category?.name || 'Category'} - LKT Marine`,
    description: category?.description || 'Product category listing'
  }
}

export default async function ProductListingByCategory( params : any) {
  const category = categories[params.category as keyof typeof categories]

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
    )
  }

  const products = getProductsByCategory(params.category)

  return (
    <div className="bg-white">
      <div className="relative bg-gray-900 h-[300px]">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">{category.name}</h1>
            <p className="text-lg text-gray-200">{category.description}</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/site/product/${product.id}?category=${category?.id}`}
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
                  <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
  