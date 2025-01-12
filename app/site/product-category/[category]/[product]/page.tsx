import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Product {
  name: string;
  shortDescription: string;
  description: string;
  images: string[];
  specifications: Record<string, string>;
  features: string[];
  applications: string[];
}

type Props = {
  params: {
    category: string;
    product: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function ProductPage({ params }: Props) {
  const product: Product = {
    name: "CLIMAX CX-3 Industrial Grease",
    shortDescription: "High-Performance Multi-Purpose Industrial Grease",
    description: "CLIMAX CX-3 is a premium quality, multi-purpose industrial grease designed for heavy-duty applications. This advanced formulation provides exceptional protection against wear, rust, and corrosion while maintaining excellent stability under high temperatures and extreme pressure conditions.",
    images: [
      "/products/industrial-grease-1.jpg",  // Replace with actual image paths
      "/products/industrial-grease-2.jpg",
      "/products/industrial-grease-3.jpg",
      "/products/industrial-grease-4.jpg",
    ],
    specifications: {
      "NLGI Grade": "2",
      "Operating Temperature": "-20°C to 180°C",
      "Base Oil Viscosity": "220 cSt @ 40°C",
      "Dropping Point": "260°C",
      "Color": "Blue",
      "Texture": "Smooth",
      "Water Resistance": "Excellent",
      "Package Size": "15kg, 50kg, 180kg"
    },
    features: [
      "Extended service life in high-temperature applications",
      "Superior mechanical stability",
      "Excellent water resistance and rust protection",
      "High load carrying capacity",
      "Enhanced oxidation resistance",
      "Reduces friction and wear",
      "Excellent pumpability in centralized systems"
    ],
    applications: [
      "Heavy industrial machinery",
      "Marine equipment",
      "Construction equipment",
      "Mining operations",
      "Steel mills",
      "Paper mills"
    ]
  }

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><Link href="/site/product-category" className="hover:text-blue-600">All Products</Link></li>
            <li>&gt;</li>
            <li><Link href={`/site/product-category/${params.category}`} className="hover:text-blue-600 capitalize">{params.category.replace('-', ' ')}</Link></li>
            <li>&gt;</li>
            <li className="text-gray-900 font-medium">{product.name}</li>
          </ol>
        </nav>

        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12">
          {/* Image Gallery */}
          <div className="lg:max-w-lg lg:self-start">
            <Tabs defaultValue="0" className="flex flex-col-reverse">
              <TabsList className="grid grid-cols-4 gap-4 mt-4">
                {product.images.map((image, idx) => (
                  <TabsTrigger 
                    key={image} 
                    value={idx.toString()}
                    className="relative aspect-square overflow-hidden rounded-lg border-2 border-gray-200 hover:border-blue-500 transition-colors"
                  >
                    <Image
                      src={image}
                      alt=""
                      fill
                      className="object-cover object-center"
                    />
                  </TabsTrigger>
                ))}
              </TabsList>

              <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100">
                {product.images.map((image, idx) => (
                  <TabsContent key={image} value={idx.toString()}>
                    <Image
                      src={image}
                      alt={product.name}
                      fill
                      className="object-cover object-center"
                    />
                  </TabsContent>
                ))}
              </div>
            </Tabs>
          </div>

          {/* Product Details */}
          <div className="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2">
            <div className="flex flex-col space-y-8">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>
                <p className="mt-2 text-lg font-medium text-blue-600">{product.shortDescription}</p>
                <p className="mt-4 text-gray-600 leading-relaxed">{product.description}</p>
              </div>

              {/* Features */}
              <div className="border-t border-gray-200 pt-8">
                <h2 className="text-xl font-semibold text-gray-900">Key Features</h2>
                <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-2 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specifications */}
              <div className="border-t border-gray-200 pt-8">
                <h2 className="text-xl font-semibold text-gray-900">Technical Specifications</h2>
                <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 p-4 rounded-lg">
                      <dt className="text-sm font-medium text-gray-500">{key}</dt>
                      <dd className="mt-1 text-sm font-semibold text-gray-900">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Applications */}
              <div className="border-t border-gray-200 pt-8">
                <h2 className="text-xl font-semibold text-gray-900">Applications</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.applications.map((application) => (
                    <span key={application} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700">
                      {application}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Button */}
              <div className="border-t border-gray-200 pt-8">
                <Link
                  href="/site/contact"
                  className="flex w-full items-center justify-center rounded-lg bg-blue-600 px-8 py-4 text-base font-medium text-white hover:bg-blue-700 transition-colors"
                >
                  Request Quotation
                  <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}