import React from 'react'
import Image from 'next/image'

interface Props {
  isActive: boolean
  isDeleted: boolean
  type: 'product' | 'collection' | 'productVariant'
  url?: string
  title?: string
}

const ShopifyDocumentStatus = ({ isActive, isDeleted, type, url, title }: Props) => {
  if (isDeleted) {
    return (
      <span className="text-red-500">
        Deleted from Shopify
      </span>
    )
  }

  return (
    <div className="flex items-center space-x-2">
      {url && (
        <Image
          src={url}
          alt={title || 'Product image'}
          width={32}
          height={32}
          className="rounded-sm object-cover"
        />
      )}
      <span className={isActive ? 'text-green-500' : 'text-yellow-500'}>
        {isActive ? 'Active' : 'Draft'}
      </span>
    </div>
  )
}

export default ShopifyDocumentStatus
