import CTA from "../_components/cta";
import { Hero } from "../_components/hero";
import { Testimonial } from "../_components/testimonial";
import LogoCloud from '../_components/logocloud'
import Quotation from "../_components/quotation";
import { ProductCategory } from "../_components/category";
import { MissionAims } from "../_components/mission";
import AboutUs from "../_components/aboutUs";

export default async function Home() {
  return (
    <div className="">
        <Hero/>
        <CTA/>
        <ProductCategory/>
        <AboutUs/>
        <MissionAims/>
        <Testimonial/>
        <section id="quotation">
          <Quotation/>
        </section>
        <LogoCloud/>
    </div>
  );
}
