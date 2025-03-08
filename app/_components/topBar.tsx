import Link from 'next/link'
import React from 'react'
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa'

function TopBar() {

    const phoneNumber = process.env.WHATSAPP_NUMBER;
    const message = "Hello! I'm interested in your services.";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    return (
        <div className='bg-gray-800 sticky top-0 h-14 w-full max-w-7xl flex justify-end items-center p-4'>
            <Link
                href={whatsappURL}
                target="_blank"
                rel="noopener noreferrer">
                <div className='flex items-center text-white mr-6 hover:cursor-pointer'>
                    <FaWhatsapp className='mr-2 h-14' />
                    <span>+97156 2180452</span>
                </div>
            </Link>

            <Link href={`mailto:${process.env.EMAIL_ADDRESS}`}>
                <div className='flex items-center text-white hover:cursor-pointer'>
                    <FaEnvelope className='mr-2' />
                    <span>sales@Lktmarine.com</span>
                </div>
            </Link>
        </div>
    )
}

export default TopBar