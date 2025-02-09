'use client'

import CTA from "../_components/cta";
import { Hero } from "../_components/hero";
import { Testimonial } from "../_components/testimonial";
import LogoCloud from '../_components/logocloud'
import Quotation from "../_components/quotation";
import { ProductCategory } from "../_components/category";
import { MissionAims } from "../_components/mission";
import AboutUs from "../_components/aboutUs";
import { sanityClient } from "@/app/lib/sanityClient"; 

async function fetchCategories() {
  const query = `
    *[_type == "productCategory" && !defined(parentCategory)] {
      _id,
      title,
      slug,
      image
    }
  `;
  const categories = await sanityClient.fetch(query);
  return categories;
}

export default async function Home() {
  const categories = await fetchCategories();
  return (
    <div className="">
        <Hero/>
        <CTA/>
        <AboutUs/>
        <MissionAims/>
        <ProductCategory categories={categories}/>
        <Testimonial/>
        <section id="quotation">
          <Quotation/>
        </section>
        <LogoCloud/>
    </div>
  );
}
