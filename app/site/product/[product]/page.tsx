import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { sanityClient } from "@/app/lib/sanityClient";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from '@portabletext/react';

const builder = imageUrlBuilder(sanityClient);
const urlFor = (source: any) => builder.image(source);

async function getProduct(slug: string) {
    const query = `
    *[_type == "product" && slug.current == $slug][0] {
      title,
      images,
      productCategory->{
        _id,
        title
      },
      body,
      description,
      features,
      specifications,
      applications
    }
  `;
    return await sanityClient.fetch(query, { slug });
}

async function getProductsBySubCategory(categoryId: string) {
    const query = `
    *[_type == "product" && references($categoryId)] | order(_createdAt desc) {
      _id,
      title,
      images,
      slug
    }
  `;
    return await sanityClient.fetch(query, { categoryId });
}

export default async function ProductPage({ params }: { params: Promise<{ product: string }> }) {
    const product = await getProduct((await params).product);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900">Product Not Found</h1>
                    <p className="mt-2 text-gray-600">The product you're looking for doesn't exist.</p>
                    <Link
                        href="/site"
                        className="mt-4 inline-block text-blue-600 hover:text-blue-800"
                    >
                        Return to Home
                    </Link>
                </div>
            </div>
        );
    }

    const category = product?.productCategory?._id || '';
    const relatedProducts = await getProductsBySubCategory(category);

    return (
        <div className="bg-gray-50">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <nav className="my-8">
                    <ol className="flex items-center space-x-2 text-sm text-gray-500">
                        <li>
                            <Link href="/site/product" className="hover:text-blue-600">
                                All Products
                            </Link>
                        </li>
                        <li>&gt;</li>
                        <li>
                            <Link
                                href={`/site/product-category/${category}`}
                                className="hover:text-blue-600 capitalize"
                            >
                                {product.productCategory.title}
                            </Link>
                        </li>
                        <li>&gt;</li>
                        <li className="text-gray-900 font-medium">{product.title}</li>
                    </ol>
                </nav>

                <div className="lg:grid lg:grid-cols-2 lg:gap-x-12">
                    {/* Image Gallery */}
                    <div className="lg:max-w-lg lg:self-start">
                        <Tabs defaultValue="0" className="flex flex-col-reverse">
                            <TabsList className="grid grid-cols-4 gap-4 mt-4">
                                {product?.images.map((image: any, idx: number) => (
                                    <TabsTrigger
                                        key={idx}
                                        value={idx.toString()}
                                        className="relative aspect-square overflow-hidden rounded-lg border-2 border-gray-200 hover:border-blue-500 transition-colors"
                                    >
                                        <Image
                                            src={urlFor(image).url()}
                                            alt=""
                                            fill
                                            className="object-cover object-center"
                                        />
                                    </TabsTrigger>
                                ))}
                            </TabsList>

                            <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100">
                                {product?.images.map((image: any, idx: number) => (
                                    <TabsContent key={idx} value={idx.toString()}>
                                        <Image
                                            src={urlFor(image).url()}
                                            alt={product?.title}
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
                                <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.title}</h1>
                                <p className="mt-2 text-lg font-medium text-blue-600">{product.description}</p>
                                <div className="mt-4">
                                    <PortableText value={product.body} />
                                </div>
                            </div>

                            {/* Features */}
                            {product.features && product.features.length > 0 && (
                                <div className="border-t border-gray-200 pt-8">
                                    <h2 className="text-xl font-semibold text-gray-900">Key Features</h2>
                                    <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        {product.features.map((feature: string) => (
                                            <li key={feature} className="flex items-start">
                                                <svg className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="ml-2 text-gray-600">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Specifications */}
                            {product.specifications && product.specifications.length > 0 && (
                                <div className="border-t border-gray-200 pt-8">
                                    <h2 className="text-xl font-semibold text-gray-900">Specifications</h2>
                                    <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        {product.specifications.map((specification: string) => (
                                            <li key={specification} className="flex items-start">
                                                <svg className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="ml-2 text-gray-600">{specification}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Applications */}
                            {product.applications && product.applications.length > 0 && (
                                <div className="border-t border-gray-200 pt-8">
                                    <h2 className="text-xl font-semibold text-gray-900">Applications</h2>
                                    <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        {product.applications.map((application: string) => (
                                            <li key={application} className="flex items-start">
                                                <svg className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="ml-2 text-gray-600">{application}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                <div className="mt-16">
                    <h2 className="text-2xl font-semibold text-white py-4 bg-[#024caa] text-center">Related Products</h2>
                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 mt-6">
                        {relatedProducts.map((relatedProduct: any) => (
                            <Link
                                key={relatedProduct._id}
                                href={`/site/product/${relatedProduct.slug.current}`}
                                className="group block rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100">
                                    <Image
                                        src={urlFor(relatedProduct.images[0]).url()}
                                        alt={relatedProduct.title}
                                        width={500}
                                        height={500}
                                        className="h-full w-full object-cover object-center group-hover:opacity-75 transition duration-300"
                                    />
                                </div>
                                <div className="mt-4 p-4">
                                    <h3 className="text-lg font-medium text-gray-900">{relatedProduct.title}</h3>
                                    <p className="mt-2 text-sm text-gray-500">{relatedProduct.shortDescription}</p>
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
        </div>
    );
}
