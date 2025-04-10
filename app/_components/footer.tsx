"use client";
import { FloatingDock } from "@/components/ui/floating-dock";
import WorldMap from "@/components/ui/world-map";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import Image from "next/image";
import Link from 'next/link';
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsappFilled,
  IconBrandX,
} from "@tabler/icons-react";

export function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About us', href: '/site/about' },
    { name: 'Products', href: '/site/products' },
    { name: 'Contact Us', href: '/site/contact' },
    // { name: 'Sitemap', href: '/site/sitemap' },
  ];

  const links = [
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Facebook",
      icon: (
        <IconBrandFacebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Whatsapp",
      icon: (
        <IconBrandWhatsappFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];

  return (
    <footer className="bg-[#024caa] text-white w-full relative">
      {/* World Map Background */}
      <div className="mt-10 absolute inset-0">
        <WorldMap
          dots={[
            {
              start: { lat: 64.2008, lng: -149.4937 },
              end: { lat: 34.0522, lng: -118.2437 },
            },
            {
              start: { lat: 64.2008, lng: -149.4937 },
              end: { lat: -15.7975, lng: -47.8919 },
            },
            {
              start: { lat: -15.7975, lng: -47.8919 },
              end: { lat: 38.7223, lng: -9.1393 },
            },
            {
              start: { lat: 51.5074, lng: -0.1278 },
              end: { lat: 28.6139, lng: 77.209 },
            },
            {
              start: { lat: 28.6139, lng: 77.209 },
              end: { lat: 43.1332, lng: 131.9113 },
            },
            {
              start: { lat: 28.6139, lng: 77.209 },
              end: { lat: -1.2921, lng: 36.8219 },
            },
          ]}
        />
      </div>

      <div className="relative z-10 bg-black/10">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4 space-y-4">
              <h2 className="text-xl font-bold mb-4">ABOUT US</h2>
              <p className="text-gray-300">
                LKT Marine Services was established in the year 2008, with an aim to provide reliable marine services to clients in India and Overseas. Our business includes engineering services and supply of genuine spares and equipment.
              </p>
              <div className="mt-4">
              <FloatingDock
                mobileClassName="translate-y-10" // only for demo, remove for production
                items={links}
              />
              </div>
            </div>

            <div className="md:col-span-3">
              <h2 className="text-xl font-bold mb-4">QUICK LINKS</h2>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-white flex items-center"
                    >
                      <span className="mr-2">›</span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Info Section - 5 columns */}
            <div className="md:col-span-5">
              <div className="flex flex-col items-center mb-8">
                <Image 
                  src="/Logo.svg" 
                  alt="Company Logo" 
                  className="bg-white text-white p-4 rounded-xl"
                  width={280}
                  height={280}
                  priority
                />
                <h3 className="text-xl font-bold text-center">
                  LKT MARINE SERVICES LLC
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <MapPinIcon className="h-6 w-6 flex-shrink-0 mt-1" />
                  <p>9 11th St – Al Qusais Industrial Area – Al Qusais Industrial Area 1 Dubai – United Arab Emirates</p>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneIcon className="h-5 w-5 flex-shrink-0" />
                  <a href="tel:+97156 2180452">+97156 2180452</a>
                </div>
                <div className="flex items-center gap-2">
                  <EnvelopeIcon className="h-5 w-5 flex-shrink-0" />
                  <a href="mailto:sales@Lktmarine.com">sales@Lktmarine.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center">
            <p>© Copyright 2024. All Rights Reserved - LKT Marine Services LLC</p>
            <p>Design & Develop By DigiLabs.co</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
