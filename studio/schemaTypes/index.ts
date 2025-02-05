import {callToActionType} from './objects/module/callToActionType'
import {collectionGroupType} from './objects/collection/collectionGroupType'
import {collectionLinksType} from './objects/collection/collectionLinksType'
import {gridItemType} from './objects/module/gridItemType'
import {gridType} from './objects/module/gridType'
import {heroType} from './objects/module/heroType'
import {imageCallToActionType} from './objects/module/imageCallToActionType'
import {imageFeaturesType} from './objects/module/imageFeaturesType'
import {imageFeatureType} from './objects/module/imageFeatureType'
import {imageWithProductHotspotsType} from './objects/hotspot/imageWithProductHotspotsType'
import {linkInternalType} from './objects/link/linkInternalType'
import {productFeaturesType} from './objects/module/productFeaturesType'
import {productHotspotsType} from './objects/hotspot/productHotspotsType'
import {seoType} from './objects/seoType'
import {spotType} from './objects/hotspot/spotType'

const annotations = [ linkInternalType]

const objects = [
  callToActionType,
  collectionGroupType,
  collectionLinksType,
  gridItemType,
  gridType,
  heroType,
  imageCallToActionType,
  imageFeaturesType,
  imageFeatureType,
  imageWithProductHotspotsType,
  productFeaturesType,
  productHotspotsType,
  seoType,
  spotType,
]

import {portableTextType} from './portableText/portableTextType'
import {portableTextSimpleType} from './portableText/portableTextSimpleType'

const blocks = [portableTextType, portableTextSimpleType]

import {collectionType} from './documents/collection'
import {pageType} from './documents/page'
import {productType} from './documents/product'
import {productCategory} from './documents/productCategory'

const documents = [collectionType,pageType, productType, productCategory]

import {homeType} from './singletons/homeType'

const singletons = [homeType]

export const schemaTypes = [...annotations, ...objects, ...singletons, ...blocks, ...documents]
