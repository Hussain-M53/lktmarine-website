import {ListItemBuilder} from 'sanity/structure'
import defineStructure from '../utils/defineStructure'
import {ProjectsIcon} from '@sanity/icons'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Products')
    .schemaType('product')
    .icon(ProjectsIcon)
    .child(
      S.documentTypeList('product')
    )
)
