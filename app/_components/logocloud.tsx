"use client";
import React from 'react'
import Image from 'next/image'

export default function LogoCloud() {
  return (
    <div className="bg-white py-24 sm:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-lg/8 font-semibold text-gray-900 mb-10">Trusted by the world&apos;s most innovative teams</h2>
            
            {/* Marquee container */}
            <div className="relative">
                {/* First row of logos */}
                <div className="flex animate-marquee space-x-16 whitespace-nowrap">
                    <div className="flex items-center space-x-16 py-4">
                        <Image 
                            className="max-h-12 w-auto object-contain"
                            src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg"
                            alt="Transistor"
                            width="158"
                            height="48"
                        />
                        <Image 
                            className="max-h-12 w-auto object-contain"
                            src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg"
                            alt="Reform"
                            width="158"
                            height="48"
                        />
                        <Image 
                            className="max-h-12 w-auto object-contain"
                            src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg"
                            alt="Tuple"
                            width="158"
                            height="48"
                        />
                        <Image 
                            className="max-h-12 w-auto object-contain"
                            src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg"
                            alt="SavvyCal"
                            width="158"
                            height="48"
                        />
                        <Image 
                            className="max-h-12 w-auto object-contain"
                            src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg"
                            alt="Statamic"
                            width="158"
                            height="48"
                        />
                    </div>
                    {/* Duplicate set for seamless loop */}
                    <div className="flex items-center space-x-16 py-4">
                        <Image 
                            className="max-h-12 w-auto object-contain"
                            src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg"
                            alt="Transistor"
                            width="158"
                            height="48"
                        />
                        <Image 
                            className="max-h-12 w-auto object-contain"
                            src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg"
                            alt="Reform"
                            width="158"
                            height="48"
                        />
                        <Image 
                            className="max-h-12 w-auto object-contain"
                            src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg"
                            alt="Tuple"
                            width="158"
                            height="48"
                        />
                        <Image 
                            className="max-h-12 w-auto object-contain"
                            src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg"
                            alt="SavvyCal"
                            width="158"
                            height="48"
                        />
                        <Image 
                            className="max-h-12 w-auto object-contain"
                            src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg"
                            alt="Statamic"
                            width="158"
                            height="48"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )    
}
