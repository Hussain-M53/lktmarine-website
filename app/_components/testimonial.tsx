import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Testimonial() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative solutions provided by LKT Marine have completely transformed our vessel operations. Their expertise is unmatched.",
      name: "Sarah Chen",
      designation: "Fleet Manager at Ocean Ventures",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. Their marine equipment solutions are truly world-class.",
      name: "Michael Rodriguez",
      designation: "Technical Director at Maritime Solutions",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Their commitment to quality and service excellence has made them our preferred marine equipment partner for all our vessels.",
      name: "Emily Watson",
      designation: "Operations Director at Global Shipping",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Outstanding support and robust marine solutions. Their expertise in marine equipment is unparalleled.",
      name: "James Kim",
      designation: "Marine Superintendent at Pacific Fleet",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The quality of their marine equipment and technical support has been game-changing for our fleet operations.",
      name: "Lisa Thompson",
      designation: "VP of Marine Operations at SeaWay Corp",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className="bg-gradient-to-r from-[#091057] to-[#024caa] py-16">
      <div className="container mx-auto px-4 mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Voices of Success
        </h2>
        <p className="text-xl text-gray-200">
          What industry leaders say about our marine solutions
        </p>
      </div>
      <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
    </div>
  );
}
