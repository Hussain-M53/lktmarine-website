import Link from "next/link";
import React from "react";
import { sanityClient } from "../lib/sanityClient";

async function fetchCategories() {
  const query = `*[_type == "productCategory" && !defined(parentCategory)] {
    title,
    slug,
    description,
    "image": image.asset->url
  }`;

  const categories = await sanityClient.fetch(query);
  return categories;
}

export async function ProductCategory() {
  const categories = await fetchCategories();

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Product Range
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories?.map((item : any, i : number) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div
                className="relative h-[400px] w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${item?.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity group-hover:bg-opacity-30"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{item?.title}</h3>
                  <p className="text-sm opacity-90 mb-4">{item?.description}</p>
                  <Link href={`/site/product-category/${item.slug.current}`}className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors">
                      View Products
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const items = [
  {
    title: "Marine Solutions",
    description: "Complete range of marine equipment and spare parts for vessels of all sizes.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3PJ1Fy3BedjqVe1Kc80pW74d0fBQa6_xdKA&s",
  },
  {
    title: "Industrial Equipment",
    description: "High-quality industrial machinery and equipment for various applications.",
    image: "https://img.freepik.com/premium-photo/industrial-equipment-offshore-platform-showcasing-pumps-pipes-against-turbulent-sea-backdrop_1003615-55996.jpg",
  },
  {
    title: "Deck & Engine Store",
    description: "Comprehensive selection of deck equipment and engine components.",
    image: "https://shahamanatcraftint.com/wp-content/uploads/engine.jpg",
  },
];

