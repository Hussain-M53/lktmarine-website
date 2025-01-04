'use client'

import CTA from "./_components/cta";
import { Hero } from "./_components/hero";
import { Testimonial } from "./_components/testimonial";
import LogoCloud from './_components/logocloud'
import Quotation from "./_components/quotation";
import { ProductCategory } from "./_components/category";
import { Footer } from "./_components/footer";
import { MissionAims } from "./_components/mission";

export default function Home() {

  return (
    <div className="">
        <Hero/>
        <CTA/>
        <MissionAims/>
        <ProductCategory/>
        <Testimonial/>
        <section id="quotation">
          <Quotation/>
        </section>
        <LogoCloud/>
        <Footer/>
    </div>
  );
}
