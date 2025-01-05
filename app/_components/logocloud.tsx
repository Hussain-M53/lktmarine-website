"use client";
import React from 'react'
import Image from 'next/image'

export default function LogoCloud() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-24 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Authorized Distributors & Partners
          </h2>
          <p className="text-lg text-gray-600">
            Trusted by leading marine companies worldwide
          </p>
        </div>
        
        {/* Marquee container */}
        <div className="relative overflow-hidden">
          {/* First row of logos */}
          <div className="flex animate-marquee space-x-24 whitespace-nowrap">
            <div className="flex items-center space-x-24 py-8">
              <div className="flex-shrink-0 w-[160px] h-[60px] relative grayscale hover:grayscale-0 transition-all duration-300">
                <Image 
                  className="object-contain"
                  src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg"
                  alt="Transistor"
                  fill
                />
              </div>
              <div className="flex-shrink-0 w-[160px] h-[60px] relative grayscale hover:grayscale-0 transition-all duration-300">
                <Image 
                  className="object-contain"
                  src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg"
                  alt="Reform"
                  fill
                />
              </div>
              <div className="flex-shrink-0 w-[160px] h-[60px] relative grayscale hover:grayscale-0 transition-all duration-300">
                <Image 
                  className="object-contain"
                  src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg"
                  alt="Tuple"
                  fill
                />
              </div>
              <div className="flex-shrink-0 w-[160px] h-[60px] relative grayscale hover:grayscale-0 transition-all duration-300">
                <Image 
                  className="object-contain"
                  src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg"
                  alt="SavvyCal"
                  fill
                />
              </div>
              <div className="flex-shrink-0 w-[160px] h-[60px] relative grayscale hover:grayscale-0 transition-all duration-300">
                <Image 
                  className="object-contain"
                  src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg"
                  alt="Statamic"
                  fill
                />
              </div>
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex items-center space-x-24 py-8">
              <div className="flex-shrink-0 w-[160px] h-[60px] relative grayscale hover:grayscale-0 transition-all duration-300">
                <Image 
                  className="object-contain"
                  src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg"
                  alt="Transistor"
                  fill
                />
              </div>
              <div className="flex-shrink-0 w-[160px] h-[60px] relative grayscale hover:grayscale-0 transition-all duration-300">
                <Image 
                  className="object-contain"
                  src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg"
                  alt="Reform"
                  fill
                />
              </div>
              <div className="flex-shrink-0 w-[160px] h-[60px] relative grayscale hover:grayscale-0 transition-all duration-300">
                <Image 
                  className="object-contain"
                  src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg"
                  alt="Tuple"
                  fill
                />
              </div>
              <div className="flex-shrink-0 w-[160px] h-[60px] relative grayscale hover:grayscale-0 transition-all duration-300">
                <Image 
                  className="object-contain"
                  src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg"
                  alt="SavvyCal"
                  fill
                />
              </div>
              <div className="flex-shrink-0 w-[160px] h-[60px] relative grayscale hover:grayscale-0 transition-all duration-300">
                <Image 
                  className="object-contain"
                  src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg"
                  alt="Statamic"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )    
}
