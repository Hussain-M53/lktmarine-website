import {PortableText} from '@portabletext/react'
import {PreviewLayoutKey, SchemaType, useSchema} from 'sanity'
import {Box} from '@sanity/ui'
import {HotspotTooltipProps} from 'sanity-plugin-hotspot-array'
import {useMemo} from 'react'

interface HotspotFields {
  productWithVariant?: {
    product?: {
      title?: string
    }
  }
  productOption?: string
}

export default function ProductTooltip(props: HotspotTooltipProps<HotspotFields>) {
  const {value} = props

  const title = value?.productWithVariant?.product?.title
  const option = value?.productOption

  if (!title) {
    return null
  }

  return (
    <Box padding={2}>
      <div className="text-sm font-medium">{title}</div>
      {option && <div className="text-xs text-gray-600">{option}</div>}
    </Box>
  )
}
