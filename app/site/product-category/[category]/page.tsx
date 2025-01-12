import Image from "next/image"
import Link from "next/link"
import { categories } from "@/data/categories"

export default function ProductListing({ params }: { params: { category: string } }) {
  const category = categories[params.category as keyof typeof categories]

  return (
    <div className="bg-white">
      {/* Hero Section */}
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
        {/* Sub-categories Grid */}
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
          {category.subCategories.map((subCategory) => (
            <Link
              key={subCategory.id}
              href={`/site/product-category/${subCategory?.id}`}
              className="group"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={subCategory?.image}
                  alt={subCategory?.name}
                  width={500}
                  height={500}
                  className="h-full w-full object-cover object-center group-hover:opacity-75 transition duration-300"
                />
              </div>
              <div className="mt-4 bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-gray-900">{subCategory?.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{subCategory?.description}</p>
                <div className="mt-4 flex items-center text-blue-600">
                  <span className="text-sm font-medium">View Products</span>
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
  