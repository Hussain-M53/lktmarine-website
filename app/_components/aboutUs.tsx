'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChartBarIcon, GlobeAltIcon, UserGroupIcon, ClockIcon } from '@heroicons/react/24/outline';

const AnimatedCounter = ({ value, duration = 2 }: { value: string, duration?: number }) => {
  const [counter, setCounter] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref);
  const isNumeric = !isNaN(Number(value));
  const finalValue = isNumeric ? Number(value) : 0;

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);

        if (progress < 1) {
          setCounter(Math.floor(finalValue * progress));
          requestAnimationFrame(animateCount);
        } else {
          setCounter(finalValue);
        }
      };

      requestAnimationFrame(animateCount);
    }
  }, [isInView, finalValue, duration]);

  return (
    <span ref={ref}>
      {isNumeric ? counter : value}
    </span>
  );
};

function AboutUs() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section with Gradient */}
      <section className="relative min-h-[90vh] bg-gradient-to-r from-[#091057] via-[#1a237e] to-[#024caa]">
        <div className="absolute inset-0 opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-between min-h-[90vh]"
          >
            <div className="md:w-1/2 z-10">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Navigating the Future of Marine Solutions
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Pioneering excellence in marine engineering since 1998, delivering innovative solutions worldwide.
              </p>
              <Link 
                href="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-[#EC8305] rounded-full overflow-hidden transition-all duration-300 ease-in-out hover:bg-[#ff9f2b] transform hover:-translate-y-1"
              >
                Discover More
                <svg className="w-5 h-5 ml-2 -mr-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-1/2 mt-12 md:mt-0"
            >
              <Image
                src="https://miro.medium.com/v2/resize:fit:3072/0*YBiL306qsgtjBevY" // Replace with a high-quality modern ship image
                alt="Modern Marine Solutions"
                width={700}
                height={500}
                className="rounded-2xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section with Floating Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {[
              { icon: ChartBarIcon, number: "25", suffix: "+", text: "Years Experience", color: "from-blue-500 to-blue-700" },
              { icon: GlobeAltIcon, number: "1000", suffix: "+", text: "Projects Completed", color: "from-orange-500 to-red-500" },
              { icon: UserGroupIcon, number: "50", suffix: "+", text: "Global Partners", color: "from-green-500 to-teal-500" },
              { icon: ClockIcon, number: "24", suffix: "/7", text: "Support Available", color: "from-purple-500 to-pink-500" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-xl p-8 transform hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center mb-6 mx-auto`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-gray-800 mb-2">
                  <AnimatedCounter value={stat.number} />
                  {stat.suffix}
                </h3>
                <p className="text-gray-600">{stat.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section with Parallax */}
      <section className="py-24 bg-white relative">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4"
        >
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#091057] to-[#024caa] rounded-2xl transform rotate-3"></div>
              <Image
                src="https://miro.medium.com/v2/resize:fit:3072/0*YBiL306qsgtjBevY"
                alt="Our Company"
                width={600}
                height={400}
                className="relative rounded-2xl shadow-xl object-cover"
              />
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Journey of Excellence</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                From our humble beginnings to becoming an industry leader, our journey has been defined by innovation, 
                dedication, and an unwavering commitment to excellence in marine solutions.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Today, we're proud to be at the forefront of marine technology, serving clients globally with 
                cutting-edge solutions and unparalleled expertise.
              </p>
              <Link 
                href="/about"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#091057] to-[#024caa] rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Explore Our Story
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default AboutUs;