"use client"

import { useState, useEffect, useRef } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  WrenchScrewdriverIcon,
  BoltIcon,
  WrenchIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const productCategories = [
  {
    name: 'Industrial',
    href: '/site/product-category/industrial', icon: WrenchScrewdriverIcon,
    subcategories: ['Climax Lubricant', 'Devcon', 'Lessmann Wire Brushes', 'Liquid Wrench', 'Molykote, Go, Carborundum, Molislip Copaslip', 'Trelawny Surface Preparation Equipment', 'Omega Air Hoist', 'Broco Prime Cut', 'Lead Ingots', 'Load Binders'],
  },
  {
    name: 'Marine & Offshore',
    href: '/site/product-category/marine-offshore', icon: BoltIcon,
    subcategories: ['Polypropylene Ropes, Manila Ropes & Jute Ropes', 'Galvanized Chains, Shackets & Hooks', '3M Propeller Polishing Pads & Discs', 'AquaFix Pipe Repair Tapes', 'Broco Tactical', 'Broco Underwater', 'Kolor Kut Water & Oil Gauging Pastes', 'Cordobond USA', 'Polyform US', 'Posiedon Depp Water', 'RSC BIO Oils & Greases', 'Subsalve Liftings Bags', 'Trident Marine Systems Europe', 'Pilot Ladders, Gangway Ladders, Embarkations Ladders'],
  },
  {
    name: 'Deck & Engine Stores',
    href: '/site/product-category/deck-engine-stores', icon: WrenchIcon,
    subcategories: ['Aluminum Port Holes', 'Anti Slip Tapes', 'Anti Splashing Tape', 'Boat Scrupper Plugs', 'Chains Blocks, Lever Blocks', 'Flags', 'Life Rings', 'Non Spark Shovels & Scoops', 'Oil Measuring Tapes', 'Oil Sampling Bottles', 'Petro Tapes', 'Swarfega Hand Cleaners', 'Thermometers Brass Case, Copper Case, Stainless Steel', 'Tools & Hardware'],
  },
]


export default function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY.current;
      const isStationary = currentScrollY === lastScrollY.current;

      // Hide navbar when not scrolling and not at top
      if (isStationary && currentScrollY > 0) {
        setIsVisible(false);
      }
      else {
        setIsVisible(true);
      }
      // Update scroll position state
      setIsScrolled(currentScrollY > 0);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Add timer to hide navbar when scrolling stops
    let scrollTimer: NodeJS.Timeout;
    const handleScrollEnd = () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        if (window.scrollY > 0) {
          setIsVisible(false);
        }
      }, 1500); // Adjust timeout as needed (1.5 seconds)
    };

    window.addEventListener('scroll', handleScrollEnd);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScrollEnd);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-md'
          : 'bg-transparent'
        } ${isVisible
          ? 'translate-y-0 opacity-100'
          : '-translate-y-full opacity-0'
        }`}
    >
      <nav aria-label="Global" className="shadow-md mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              src="/Logo.svg"
              alt="Company Logo"
              className=""
              width={150}
              height={150}
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-1">
          <Link
            href="/site"
            className={`px-4 py-2 text-sm font-semibold rounded-md transition-all duration-300 ease-in-out transform 
                relative after:absolute after:inset-0 after:rounded-md after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100 after:bg-gradient-to-r after:from-blue-50/50 after:to-transparent after:-z-10
            ${pathname === '/site' ?
                isScrolled ? 'scale-105 text-[#024caa]' : 'scale-105 text-[#024caa] bg-white/90 shadow-blue-100/50 shadow-lg '
                : isScrolled || pathname!='/site'? 'text-gray-900 hover:text-[#024caa]' : 'text-white hover:text-[#024caa] hover:bg-white/90 hover:scale-105 hover:shadow-lg hover:shadow-blue-100/50'}`}>
            Home
          </Link>

          <Popover className="relative"
            onMouseLeave={() => {
              timeoutRef.current = setTimeout(() => {
                setIsProductsOpen(false)
              }, 100)
            }}>
            <PopoverButton
              onMouseEnter={() => {
                clearTimeout(timeoutRef.current)
                setIsProductsOpen(true)
              }}
              className={`px-4 py-2 flex items-center gap-x-1 text-sm font-semibold rounded-md transition-all duration-300 ease-in-out transform relative after:absolute after:inset-0 after:rounded-md after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100 after:bg-gradient-to-r after:from-blue-50/50 after:to-transparent after:-z-10
                ${pathname.includes('/site/product') ?
                  isScrolled ? 'scale-105 text-[#024caa]' : 'scale-105 text-[#024caa] bg-white/90 shadow-blue-100/50 shadow-lg '
                  : isScrolled || pathname!='/site' ? 'text-gray-900 hover:text-[#024caa]' : 'text-white hover:text-[#024caa] hover:bg-white/90 hover:scale-105 hover:shadow-lg hover:shadow-blue-100/50'}`}>
              Products
              <ChevronDownIcon aria-hidden="true" className={`size-5 flex-none transition-colors ${isScrolled ? 'text-gray-400' : 'text-gray-300'
                }`} />
            </PopoverButton>

            {isProductsOpen && (
              <PopoverPanel
                static
                onMouseEnter={() => {
                  clearTimeout(timeoutRef.current)
                  setIsProductsOpen(true)
                }}
                className="absolute -left-48 top-full z-10 mt-3 w-screen max-w-4xl overflow-hidden rounded-xl bg-white/95 backdrop-blur-sm shadow-lg ring-1 ring-gray-900/5">
                <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-2">
                  {productCategories.map((item) => (
                    <div key={item.name} className='flex flex-col '>
                      <div className="group relative flex items-center gap-x-2 rounded-lg p-2 hover:bg-gray-50 transition-colors">
                        <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white transition-colors">
                          <item.icon aria-hidden="true" className="h-8 w-8 text-gray-600 group-hover:text-[#024caa]" />
                        </div>
                        <div className=''>
                          <Link href={item.href} className="block text-md font-semibold text-gray-900 hover:text-[#024caa] transition-colors">
                            {item.name}
                            <span className="absolute inset-0" />
                          </Link>
                        </div>
                      </div>
                      <div className="pl-14 space-y-2">
                        {item.subcategories.map((subcategory, index) => (
                          <Link
                            key={index}
                            href={`${item.href}/${subcategory}`}
                            className="block text-sm text-gray-600 hover:text-[#024caa] transition-colors"
                          >
                            {subcategory}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            )}
          </Popover>

          <Link
            href="#"
            className={`px-4 py-2 text-sm font-semibold rounded-md transition-all duration-300 ease-in-out transform relative after:absolute after:inset-0 after:rounded-md after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100 after:bg-gradient-to-r after:from-blue-50/50 after:to-transparent after:-z-10
             ${pathname === '/site/blog' ?
                isScrolled ? 'scale-105 text-[#024caa]' : 'scale-105 text-[#024caa] bg-white/90 shadow-blue-100/50 shadow-lg '
                : isScrolled || pathname!='/site'? 'text-gray-900 hover:text-[#024caa]' : 'text-white hover:text-[#024caa] hover:bg-white/90 hover:scale-105 hover:shadow-lg hover:shadow-blue-100/50'}`}>
            Blog
          </Link>

          <Link
            href="/site/about-us"
            className={`px-4 py-2 text-sm font-semibold rounded-md transition-all duration-300 ease-in-out transform relative after:absolute after:inset-0 after:rounded-md after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100 after:bg-gradient-to-r after:from-blue-50/50 after:to-transparent after:-z-10
            ${pathname === '/site/about-us' ?
                isScrolled ? 'scale-105 text-[#024caa]' : 'scale-105 text-[#024caa] bg-white/90 shadow-blue-100/50 shadow-lg '
                : isScrolled || pathname!='/site'? 'text-gray-900 hover:text-[#024caa]' : 'text-white hover:text-[#024caa] hover:bg-white/90 hover:scale-105 hover:shadow-lg hover:shadow-blue-100/50'}`}>
            About Us
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/site/contact"
            className={`px-4 py-2 text-sm font-semibold rounded-md transition-all duration-300 ease-in-out transform relative after:absolute after:inset-0 after:rounded-md after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100 after:bg-gradient-to-r after:from-blue-50/50 after:to-transparent after:-z-10
             ${pathname === '/site/contact' ?
                isScrolled ? 'scale-105 text-[#024caa]' : 'scale-105 text-[#024caa] bg-white/90 shadow-blue-100/50 shadow-lg '
                : isScrolled || pathname!='/site'? 'text-gray-900 hover:text-[#024caa]' : 'text-white hover:text-[#024caa] hover:bg-white/90 hover:scale-105 hover:shadow-lg hover:shadow-blue-100/50'} group`}>
            Contact Us <span aria-hidden="true" className="group-hover:translate-x-1 inline-block transition-transform">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/site" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                alt=""
                src="/logo.svg"
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">a
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Products
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                </Disclosure>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Blog
                </Link>
                <Link
                  href="/site/about-us"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  About Us
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="/site/contact"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
