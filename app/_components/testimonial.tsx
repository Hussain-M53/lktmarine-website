"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Testimonial() {
  const testimonials = [
    {
      quote: "The best marine equipment supplier I've worked with.",
      name: "John Smith",
      designation: "Ship Captain",
      src: "/path/to/image1.jpg"
    },
    {
      quote: "Exceptional service and quality products.",
      name: "Sarah Johnson",
      designation: "Fleet Manager",
      src: "/path/to/image2.jpg"
    },
    {
      quote: "Reliable and professional team.",
      name: "Michael Brown",
      designation: "Marine Engineer",
      src: "/path/to/image3.jpg"
    }
  ];

  return (
    <div className="bg-[#ec8305]">
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}
