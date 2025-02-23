import React from 'react'
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa'

function TopBar() {
    return (
        <div className='bg-gray-800 sticky top-0 h-14 w-full max-w-7xl flex justify-end items-center p-4'>
            <div className='flex items-center text-white mr-6'>
                <FaWhatsapp className='mr-2 h-14' />
                <span>+97156 2180452</span>
            </div>
            <div className='flex items-center text-white'>
                <FaEnvelope className='mr-2' />
                <span>info@lktmarine.com</span>
            </div>
        </div>
    )
}

export default TopBar