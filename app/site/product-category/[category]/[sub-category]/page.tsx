import Image from "next/image"
import Link from "next/link"
import { categories } from "@/data/categories"
import { Metadata } from 'next'

type PageProps = {
  params: {
    category: string;
    subCategory: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const category = categories[params.category as keyof typeof categories]
  const subCategory = category?.subCategories.find(sub => sub.id === params.subCategory)
  
  return {
    title: `${subCategory?.name || 'Products'} - LKT Marine`,
    description: subCategory?.description || 'Product listing'
  }
}

export default async function ProductListingBySubCategory({ params }: PageProps) {
  const category = categories[params.category as keyof typeof categories]
  const subCategory = category?.subCategories.find(sub => sub.id === params.subCategory)

  if (!category || !subCategory) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Products Not Found</h1>
          <Link href="/site" className="text-blue-600 hover:text-blue-800">
            Return to Home
          </Link>
        </div>
      </div>
    )
  }

  // Update the hero section to use subCategory data
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 h-[300px]">
        <Image
          src={subCategory.image}
          alt={subCategory.name}
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

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Map through products from your products data */}
          {/* You'll need to filter products based on category and subCategory */}
        </div>
      </div>
    </div>
  )
}
  