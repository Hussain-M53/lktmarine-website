'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Quotation() {
    return (
        <div className="relative min-h-screen bg-white">
            <div className="lg:grid lg:grid-cols-2 lg:min-h-screen">
                {/* Left Column - Image and Text */}
                <div className="relative px-6 lg:px-8 flex items-center bg-gray-50">
                    <div className="relative mx-auto max-w-xl py-16 lg:py-0">
                        <div className="relative z-10">
                            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                Get Your Custom <br />
                                <span className="text-blue-600">Marine Equipment</span> Quote
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Looking for high-quality marine equipment and services? Fill out our quote form, and our experts will provide you with competitive pricing tailored to your specific needs.
                            </p>

                            {/* Feature list */}
                            <div className="mt-8">
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-x-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/10">
                                            <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-600">Quick response within 24 hours</span>
                                    </li>
                                    <li className="flex items-center gap-x-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/10">
                                            <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-600">Genuine parts & equipment</span>
                                    </li>
                                    <li className="flex items-center gap-x-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/10">
                                            <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-600">Competitive global pricing</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Background Image */}
                        <div className="absolute inset-0 -z-10">
                            <div className="relative w-full h-full">
                                <Image
                                    src="/marine-equipment.jpg"
                                    alt="Marine Equipment"
                                    fill
                                    className="object-cover opacity-10"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Form */}
                <div className="relative bg-[#024caa] px-6 lg:px-8 flex items-center">
                    <div className="mx-auto max-w-xl w-full py-16 lg:py-0">
                        <form action="#" method="POST" className="space-y-5">
                            <div className="grid grid-cols-2 gap-5">
                                {/* Full Name */}
                                <div>
                                    <label htmlFor="full-name" className="block text-sm font-medium leading-6 text-white">
                                        Full Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="full-name"
                                            id="full-name"
                                            autoComplete="name"
                                            className="block w-full rounded-lg border-0 bg-white/5 px-3.5 py-2.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                </div>

                                {/* Company Name */}
                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium leading-6 text-white">
                                        Company Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="company"
                                            id="company"
                                            className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                                            placeholder="Your Company Ltd."
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-5">
                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                                        Email
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            autoComplete="email"
                                            className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                                            placeholder="you@example.com"
                                        />
                                    </div>
                                </div>

                                {/* Phone */}
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium leading-6 text-white">
                                        Phone Number
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="tel"
                                            name="phone"
                                            id="phone"
                                            autoComplete="tel"
                                            className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                                            placeholder="+1 (555) 000-0000"
                                        />
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium leading-6 text-white">
                                        Message
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            name="message"
                                            id="message"
                                            rows={4}
                                            className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                                            placeholder="Tell us about your requirements..."
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="mt-8">
                                <button
                                    type="submit"
                                    className="block w-full rounded-lg bg-white px-3.5 py-2.5 text-center text-sm font-semibold text-blue-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors duration-200"
                                >
                                    Request Quote
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
