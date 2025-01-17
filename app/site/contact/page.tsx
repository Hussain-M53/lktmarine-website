'use client'

import { useState } from 'react'
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function Contact() {
  return (
    <div className="relative bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[#f8fafc] [mask-image:linear-gradient(0deg,white,transparent)] bg-grid-pattern"></div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Get in Touch
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We're here to help with all your marine equipment needs. Reach out to us through any of the following channels.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
          {/* Left Column - Contact Info & Map */}
          <div className="space-y-12">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Office Location */}
              <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
                <BuildingOffice2Icon className="h-7 w-7 text-blue-600" />
                <h3 className="mt-4 text-xl font-semibold text-gray-900">Office Location</h3>
                <p className="mt-3 text-base text-gray-600">
                  PO Box: 392520, <br />
                  Al Quoz Industrial Area - 4, <br />
                  Dubai, UAE
                </p>
              </div>

              {/* Contact Info */}
              <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
                <div className="space-y-6">
                  <div>
                    <PhoneIcon className="h-7 w-7 text-blue-600" />
                    <h3 className="mt-4 text-xl font-semibold text-gray-900">Phone</h3>
                    <p className="mt-3 text-base text-gray-600">
                      <a href="tel:+97155175 0296" className="hover:text-blue-600">
                        +971 55 175 0296
                      </a>
                    </p>
                  </div>
                  <div>
                    <EnvelopeIcon className="h-7 w-7 text-blue-600" />
                    <p className="mt-3 text-base text-gray-600">
                      <a href="mailto:sales1@horizonmsuae.com" className="hover:text-blue-600">
                        sales1@horizonmsuae.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.626026570831!2d55.2418825!3d25.2208333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d4895555555%3A0x0!2sAl+Quoz+Industrial+Area+4%2C+Dubai%2C+UAE!5e0!3m2!1sen!2sae!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="rounded-2xl bg-blue-900 p-8 lg:p-12">
            <form action="#" method="POST" className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-8">Send us a message</h3>
              
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-2 block w-full rounded-md border-0 bg-white/5 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-2 block w-full rounded-md border-0 bg-white/5 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm"
                  placeholder="you@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="mt-2 block w-full rounded-md border-0 bg-white/5 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-2 block w-full rounded-md border-0 bg-white/5 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm"
                  placeholder="How can we help you?"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors duration-200"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
