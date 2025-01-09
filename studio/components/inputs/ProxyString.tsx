import get from 'lodash.get'
import {StringInputProps, useFormValue, SanityDocument, StringSchemaType} from 'sanity'

type Props = StringInputProps<StringSchemaType & {options?: {field?: string}}>

const ProxyString = (props: Props) => {
  const {schemaType} = props

  const path = schemaType?.options?.field
  const doc = useFormValue([]) as SanityDocument

  const proxyValue = path ? (get(doc, path) as string) : ''

  return props.renderDefault({
    ...props,
    elementProps: {...props.elementProps, placeholder: proxyValue},
  })
}

export default ProxyString
