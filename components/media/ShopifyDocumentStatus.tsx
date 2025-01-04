import React from 'react'
import Image from 'next/image'
import { SanityDocument } from 'sanity'

interface Props {
  document: SanityDocument & {
    store?: {
      id: number
      status: string
      isDeleted: boolean
    }
  }
}

const ShopifyDocumentStatus = ({ document }: Props) => {
  const isDeleted = document?.store?.isDeleted
  const status = document?.store?.status
  const id = document?.store?.id

  if (!id || isDeleted) {
    return (
      <span className="text-red-500">
        Not synced to Shopify
      </span>
    )
  }

  return (
    <div className="flex items-center space-x-2">
      <div className="flex items-center">
        <Image
          src="/shopify.svg"
          width={16}
          height={16}
          alt="Shopify logo"
          className="w-4 h-4"
        />
      </div>
      <span
        className={
          status === 'active'
            ? 'text-green-500'
            : 'text-yellow-500'
        }
      >
        {status === 'active' ? 'Active' : 'Draft'}
      </span>
    </div>
  )
}

// Add display name
ShopifyDocumentStatus.displayName = 'ShopifyDocumentStatus'

export default ShopifyDocumentStatus
